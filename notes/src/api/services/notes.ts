import { ErrorInfo } from 'react';
import   axios   from '../initial';
import { AxiosResponse } from 'axios';
import { FetchNotesResponse, NoteType } from '../../store/sources/notes/types';

const notes = {
  get: (): Promise<FetchNotesResponse> => axios.get('/todos')
    .then((data: AxiosResponse<FetchNotesResponse>) => {
      if (data.status > 399) {
        throw new Error('Error getting notes');
      }

      return data.data;
    })
    .catch((error: ErrorInfo) => {
      console.log(error);
      return [] as FetchNotesResponse;
    }),
  post: (params: NoteType): Promise<AxiosResponse<any>> => axios.post('/todos', params)
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      return error.response; 
    }),
  delete: (id: number): Promise<void> => axios.delete(`/todos/${id}`),
};

export default notes;
