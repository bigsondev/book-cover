import { useState } from 'react';
import { Grid } from '@material-ui/core';

import Fade from 'react-reveal/Fade';

import { BookCoverForm } from './BookCoverForm';
import { BookCoverCard } from './BookCoverCard';
import { Footer } from './Footer';
import { FORM_FIELDS } from './constants';

export const BookCover = () => {
  const [formValues, setFormValues] = useState({
    [FORM_FIELDS.title.id]: '',
    [FORM_FIELDS.subtitle.id]: '',
    [FORM_FIELDS.coverImageUrl.id]: '',
    [FORM_FIELDS.logoImageUrl.id]: '',
    [FORM_FIELDS.websiteUrl.id]: '',
    [FORM_FIELDS.backgroundColor.id]: '#FFEED6',
  });

  const handleFormValueChange = (name) => (event) => {
    setFormValues({ ...formValues, [name]: event.target.value });
  };

  return (
    <Fade>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={4}>
          <BookCoverForm
            formValues={formValues}
            onFormValueChange={handleFormValueChange}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <BookCoverCard {...formValues} />
        </Grid>
      </Grid>
      <Footer />
    </Fade>
  );
};
