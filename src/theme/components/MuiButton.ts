import { Components, Theme } from '@mui/material/styles';

import palette from '../palette';

const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: theme.spacing(5),
      textTransform: 'none',
      borderRadius: theme.spacing(3.75),
      minWidth: 0,
      padding: `${theme.spacing(0.625)} ${theme.spacing(3)} ${theme.spacing(0.375)} ${theme.spacing(3)}`,
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
    }),
  },
};

export default MuiButton;
