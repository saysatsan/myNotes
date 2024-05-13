import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import thunks from '../../store/sources/notes/thunks';
import NoteForm from '../../components/NoteForm/NoteForm';
import { StyledWrapper } from './styled';
import { NoteType } from '../../store/sources/notes/types';
import { AppDispatch } from '../../store';

const NoteCreatePage: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [initialValues, setInitialValues] = useState<NoteType>({
    title: '',
    completed: false,
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const idNumber = parseInt(id!);

  useEffect(() => {
    if (id) {
      dispatch(thunks.fetchNotePage(idNumber)).then((response) => {
        setInitialValues(response.payload as NoteType);
      });
    }
  }, [dispatch, id, idNumber]);

  const handleSubmit = (values: NoteType) => {
    if (id) {
      dispatch(thunks.updateNoteById({ id: idNumber, values }));
    } else {
      dispatch(thunks.createNote(values));
    }

    navigate('/');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <StyledWrapper>
      <Typography variant='h5'>{id ? 'Edit Note' : 'Add Note'}</Typography>
      <NoteForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </StyledWrapper>
  );
};

export default NoteCreatePage;
