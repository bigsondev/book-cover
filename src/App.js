import {
  CssBaseline,
  Container,
  Box,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';

import { BookCover } from './modules';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          // Neat trick to show outlines of components
          // outline: '1px solid red',
        },
      },
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box mt={10}>
          <BookCover />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
