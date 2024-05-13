import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/services';
import { moduleName } from './constants';
import { FetchNotesResponse, NoteType } from './types';

const fetchNotes = createAsyncThunk<FetchNotesResponse, void>(
  `${moduleName}/fetchNotes`,
  async () => {
    const response = await api.notes.get();
    
    return response;
  }
);

const createNote = createAsyncThunk<NoteType, NoteType>(
  `${moduleName}/createNote`,
  async (note) => {
    const response = await api.notes.post(note);
  
    return response.data;
  }
);

const deleteNoteById = createAsyncThunk<void, number>(
  `${moduleName}/deleteNoteById`,
  async (id) => {
    await api.notes.delete(id);
  }
);

const fetchNotePage = createAsyncThunk<NoteType, number>(
  `${moduleName}/fetchNotePage`,
  async (id) => {
    const response = await api.note.get(id);

    return response;
  }
);

const updateNoteById = createAsyncThunk< 
  void,
  { id: number, values: NoteType },
  { rejectValue: string }
>(`${moduleName}/updateNoteById`, 
  async ({ id, values }, { rejectWithValue }) => {
    try {
      if (id === undefined) {
        throw new Error("Invalid id");
      }

      const response = await api.note.patch(id, values);

      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to change card");
    }
  }
);

const thunks = { fetchNotes, createNote, fetchNotePage, deleteNoteById, updateNoteById };

export default thunks;
