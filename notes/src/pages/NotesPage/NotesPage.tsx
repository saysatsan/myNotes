import React, { useEffect } from 'react';
import { Alert, Button, LinearProgress, List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Note from '../../components/Note/Note';
import { StyledLink, StyledListWrapper } from './styled';
import { AppDispatch, RootState } from '../../store';
import notesThunk from '../../store/sources/notes/thunks';
import { NoteType } from '../../store/sources/notes/types';

const NotesPage: React.FC = () => {
  const { loading, error, myNotes } = useSelector(
    (state: RootState) => state.notesReducer
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if(myNotes.length === 0){
      dispatch(notesThunk.fetchNotes());
    }
  }, []);

  const deleteNote = (id: number) => {
    dispatch(notesThunk.deleteNoteById(id));
  };

  if (loading) return <LinearProgress color='error' />;
  if (error) return <Alert>Error: {error}</Alert>;

  return (
    <StyledListWrapper>
      <Button variant='contained' color='success'>
        <StyledLink to={`/add`}>Add Note</StyledLink>
      </Button>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component='ul'
        aria-labelledby='nested-list-subheader'
      >
        {myNotes.map((note: NoteType) => (
          <Note
            key={note.id}
            id={note.id ? note.id : 0}
            title={note.title}
            completed={note.completed}
            handleDelete={() => note.id && deleteNote(note.id)}
          />
        ))}
      </List>
    </StyledListWrapper>
  );
};

export default NotesPage;
