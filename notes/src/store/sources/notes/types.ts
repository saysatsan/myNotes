export interface NoteType {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}
  
export type FetchNotesResponse = NoteType[];

