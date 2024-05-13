import notes from './notes';
import note from './note';
import { NoteType } from '../../store/sources/notes/types';

interface API {
  notes: {
    get: () => Promise<any>; 
    delete: (id: number) => Promise<void>;
    post: (params: NoteType) => Promise<any>;
  };
  note: {
    get: (id: number) => Promise<any>;
    patch: (id: number, params: any) => Promise<any>;    
  };
}

const api: API = {
  notes,
  note,
};

export default api;
