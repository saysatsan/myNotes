import { ErrorInfo } from 'react';
import axios from '../initial';
import { AxiosResponse } from 'axios';
import { NoteType } from '../../store/sources/notes/types';

const note = {
  get: (id: number): Promise<NoteType> => axios.get(`/todos/${id}`)
    .then((data: AxiosResponse<NoteType>) => {
      if (data.status > 399) {
        throw new Error('Error getting note');
      }

      return data.data;
    })
    .catch((error: ErrorInfo) => {
      console.log(error);
      throw new Error('Error getting note');
    }),    
  patch: (id: number, params: { title?: string, completed?: boolean } ): Promise<NoteType> => axios.patch(`/todos/${id}`, params),
};

export default note;
