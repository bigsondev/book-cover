import { Grid, TextField } from '@material-ui/core';

import { FORM_FIELDS } from './constants';

export const BookCoverForm = ({ formValues, onFormValueChange }) => (
  <Grid container spacing={2} justify="center">
    {Object.keys(formValues).map((key) => {
      const { id, label, autoFocus, type } = FORM_FIELDS[key];

      return (
        <Grid item key={key} xs={8}>
          <TextField
            id={id}
            label={label}
            variant="outlined"
            onChange={onFormValueChange(id)}
            value={formValues[id]}
            autoFocus={autoFocus}
            type={type}
            fullWidth
          />
        </Grid>
      );
    })}
  </Grid>
);
