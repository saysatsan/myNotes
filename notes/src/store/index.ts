import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './sources/notes/reducer';

export interface RootState {
  notesReducer: ReturnType<typeof notesReducer>;
}

const rootReducer = combineReducers({
  notesReducer,
});

const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;

export default store;
