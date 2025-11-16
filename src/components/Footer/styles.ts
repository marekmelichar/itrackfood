import { SxProps, Theme } from '@mui/material';

export const footerStyles: SxProps<Theme> = {
  backgroundColor: 'primary.main',
  padding: (theme) => `${theme.spacing(2)} ${theme.spacing(3)}`,
  marginTop: 'auto',
};

export const footerContentStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: (theme) => theme.typography.pxToRem(14),
};
