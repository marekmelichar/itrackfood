import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';

// Create theme
const intermediateTheme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
          textTransform: 'none',
          borderRadius: '30px',
          minWidth: 0,
          padding: '5px 24px 3px 24px',
          boxShadow: 'none',
          fontWeight: 600,
          border: `2px solid ${palette.primary.main}`,
          '&.MuiButton-text': {
            border: 'none',

            '&:hover': {
              boxShadow: 'none',
              backgroundColor: palette.primary.light,
              borderColor: 'transparent',
              color: 'currentColor',
            },
          },
          '&.MuiButton-outlined': {
            border: `2px solid ${palette.primary.main}`,

            '&:hover': {
              boxShadow: 'none',
              backgroundColor: palette.primary.light,
              borderColor: palette.primary.dark,
              color: palette.primary.dark,
            },
          },
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: palette.primary.dark,
            borderColor: palette.primary.dark,
            color: palette.primary.contrastText,
          },
          '&.Mui-disabled': {
            borderColor: palette.grey[400],
          },
        },
      },
    },
  },
});

// Generate responsive typography based on visual breakpoints
const theme = responsiveFontSizes(intermediateTheme, {});

export default theme;
