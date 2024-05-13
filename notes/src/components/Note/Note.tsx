import React from 'react';
import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StyledButton, StyledLink } from './styled';
import { Link } from 'react-router-dom';

interface NoteProps {
  title: string;
  id: number;
  completed: boolean;
  handleDelete: (id: number) => void;
}

const Note = ({
  title,
  id,
  completed,
  handleDelete,
}: NoteProps): JSX.Element => {
  return (
    <ListItemButton>
      <ListItemIcon>
        {completed ? (
          <span style={{ color: 'green' }}>✔</span>
        ) : (
          <span style={{ color: 'red' }}>✘</span>
        )}
      </ListItemIcon>
      <ListItemText>
        <StyledLink to={`/note/${id}`} className='styledLink'>
          {title}
        </StyledLink>
      </ListItemText>
      <StyledButton size='small'>
        <Link to={`/add/${id}`}>
          <EditIcon color='action' />
        </Link>
      </StyledButton>
      <IconButton
        edge='end'
        aria-label='delete'
        onClick={() => handleDelete(id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemButton>
  );
};

export default Note;
