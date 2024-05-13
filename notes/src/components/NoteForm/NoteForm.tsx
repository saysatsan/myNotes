import React from 'react';
import { Formik } from 'formik';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { NoteType } from '../../store/sources/notes/types';
import { StyledDiv, StyledForm } from './styled';

interface NoteFormProps {
  initialValues: NoteType | undefined;
  onSubmit: (values: { title: string; completed: boolean }) => void;
  handleCancel: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({
  initialValues,
  onSubmit,
  handleCancel,
}) => {
  return (
    <Formik
      initialValues={initialValues || { title: '', completed: false }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      enableReinitialize={true}
    >
      {({ values, setFieldValue }) => (
        <StyledForm>
          <div>
            <TextField
              id='standard-basic'
              color='success'
              variant='standard'
              name='title'
              type='text'
              placeholder='Title'
              value={values.title}
              onChange={(e) => setFieldValue('title', e.target.value)}
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  name='completed'
                  color='success'
                  checked={values.completed}
                  onChange={(e) => setFieldValue('completed', e.target.checked)}
                />
              }
              label='Completed'
            />
          </div>
          <StyledDiv>
            <Button type='submit' variant='contained' color='success'>
              OK
            </Button>
            <Button variant='outlined' onClick={handleCancel} color='error'>
              Cancel
            </Button>
          </StyledDiv>
        </StyledForm>
      )}
    </Formik>
  );
};

export default NoteForm;
