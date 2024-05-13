import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';
import { FetchNotesResponse, NoteType } from './types';

interface InitialState {
  notes: FetchNotesResponse;
  myNotes: NoteType[];
  loading: boolean;
  error: string | null;
  note: NoteType;
}

const initialState: InitialState = {
  notes: [],
  myNotes: [],
  loading: false,
  error: null,
  note: {} as NoteType,
}

export const notesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {    
    // Кейси для отримання всіх нотаток
    builder.addCase(thunks.fetchNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.fetchNotes.fulfilled, (state, { payload }: PayloadAction<FetchNotesResponse>) => {
      state.notes = payload;
      state.myNotes = payload;
      state.loading = false;
    });
    builder.addCase(thunks.fetchNotes.rejected, (state, { error }) => {
      state.error = error.message || null;
      state.loading = false;
    });

    // Кейси для отримання однієї нотатки
    builder.addCase(thunks.fetchNotePage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.fetchNotePage.fulfilled, (state, { payload }: PayloadAction<NoteType>) => {
      state.loading = false;
      state.note = payload;
    });
    builder.addCase(thunks.fetchNotePage.rejected, (state, { error }) => {
      state.error = error.message || null;
      state.loading = false;
    });

    // Кейси для видалення нотатки
    builder.addCase(thunks.deleteNoteById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.deleteNoteById.fulfilled, (state, action) => {
      const idToDelete = action.meta.arg;
      state.myNotes = state.myNotes.filter(note => note.id !== idToDelete);
      state.loading = false;
    });
    builder.addCase(thunks.deleteNoteById.rejected, (state, { error }) => {
      state.error = error.message || null;
      state.loading = false;
    });

    // Кейси для створення нотатки
    builder.addCase(thunks.createNote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.createNote.fulfilled, (state, { payload }: PayloadAction<NoteType>) => {
      console.log(payload);
      state.myNotes = [ payload, ...state.myNotes];
      state.loading = false;
    });
    builder.addCase(thunks.createNote.rejected, (state, { error }) => {
      state.error = error.message || null;
      state.loading = false;
    });
    
    // Кейси для оновлення нотатки
    builder.addCase(thunks.updateNoteById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.updateNoteById.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      if (payload) {
        state.myNotes = state.myNotes.map(note => {
            if (note.id === payload.id) {
                return payload;
            } else {
                return note;
            }
        });
      }       
    });
  },
});

export default notesReducer.reducer;
