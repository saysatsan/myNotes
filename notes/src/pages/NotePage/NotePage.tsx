import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import thunks from '../../store/sources/notes/thunks';
import { AppDispatch, RootState } from '../../store';
import { Alert, Button, LinearProgress } from '@mui/material';
import {
  StyledButton,
  StyledLink,
  StyledPage,
  StyledTitle,
  StyledButtonBlock,
  StyledIcon,
} from './styled';

const NotePage: React.FC = () => {
  const { note, loading, error } = useSelector(
    (state: RootState) => state.notesReducer
  );
  const { id } = useParams<{ id: string | undefined }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id);
      dispatch(thunks.fetchNotePage(numericId));
    }
  }, [dispatch, id]);

  if (loading) return <LinearProgress color='secondary' />;
  if (error) return <Alert>Error: {error}</Alert>;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledPage>
      <StyledIcon>
        {note.completed ? (
          <span style={{ color: 'green' }}>✔</span>
        ) : (
          <span style={{ color: 'red' }}>✘</span>
        )}
      </StyledIcon>
      <StyledTitle>{note.title}</StyledTitle>
      <StyledButtonBlock>
        <StyledButton size='small' color='error' variant='outlined'>
          <StyledLink to={`/add/${id}`}>Edit</StyledLink>
        </StyledButton>
        <Button color='success' variant='outlined' onClick={handleGoBack}>
          Back
        </Button>
      </StyledButtonBlock>
    </StyledPage>
  );
};

export default NotePage;
