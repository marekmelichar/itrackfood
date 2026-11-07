import { SxProps, Theme } from '@mui/material/styles';

export const appBarStyles: SxProps<Theme> = {
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
  color: '#000',
};

export const toolbarStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: (theme) => `${theme.spacing(1)} ${theme.spacing(3)}`,
  minHeight: (theme) => theme.spacing(7),
};

export const logoAvatarStyles: SxProps<Theme> = {
  width: (theme) => theme.spacing(5),
  height: (theme) => theme.spacing(5),
  fontSize: (theme) => theme.typography.pxToRem(24),
  backgroundColor: 'transparent',
};

export const userAvatarStyles: SxProps<Theme> = {
  width: (theme) => theme.spacing(5),
  height: (theme) => theme.spacing(5),
};
