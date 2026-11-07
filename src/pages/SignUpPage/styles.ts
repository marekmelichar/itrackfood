import { SxProps, Theme } from '@mui/material';

import cityImage from '../../assets/images/katherine-chase-4MMK78S7eyk-unsplash.jpg';

export const containerStyles: SxProps<Theme> = {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: 'background.default',
};

export const leftSectionStyles: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: (theme) => theme.spacing(6),
  maxWidth: (theme) => theme.spacing(75),
};

export const rightSectionStyles: SxProps<Theme> = {
  flex: 1,
  backgroundImage: `url(${cityImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export const formContainerStyles: SxProps<Theme> = {
  width: '100%',
  maxWidth: (theme) => theme.spacing(50),
};

export const titleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(28),
  fontWeight: 600,
  color: 'text.primary',
  marginBottom: (theme) => theme.spacing(4),
  textAlign: 'center',
};

export const googleButtonStyles: SxProps<Theme> = {
  width: '100%',
  height: (theme) => theme.spacing(6),
  border: '1px solid #E0E0E0',
  borderRadius: (theme) => theme.spacing(1),
  backgroundColor: 'white',
  color: 'text.primary',
  textTransform: 'none',
  fontSize: (theme) => theme.typography.pxToRem(14),
  fontWeight: 500,
  marginBottom: (theme) => theme.spacing(3),
  '&:hover': {
    backgroundColor: '#F7F7F7',
    border: '1px solid #E0E0E0',
  },
};

export const dividerContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: (theme) => theme.spacing(3),
};

export const dividerLineStyles: SxProps<Theme> = {
  flex: 1,
  height: '1px',
  backgroundColor: '#E0E0E0',
};

export const dividerTextStyles: SxProps<Theme> = {
  padding: (theme) => `0 ${theme.spacing(2)}`,
  fontSize: (theme) => theme.typography.pxToRem(14),
  color: 'text.secondary',
};

export const inputStyles: SxProps<Theme> = {
  marginBottom: (theme) => theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: (theme) => theme.spacing(1),
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: (theme) => theme.typography.pxToRem(14),
  },
};

export const signupButtonStyles: SxProps<Theme> = {
  width: '100%',
  height: (theme) => theme.spacing(6),
  backgroundColor: 'primary.main',
  color: 'white',
  textTransform: 'none',
  fontSize: (theme) => theme.typography.pxToRem(16),
  fontWeight: 600,
  borderRadius: (theme) => theme.spacing(1),
  marginBottom: (theme) => theme.spacing(3),
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
};

export const loginContainerStyles: SxProps<Theme> = {
  textAlign: 'center',
  color: 'text.secondary',
};

export const loginTextStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(14),
};

export const loginLinkStyles: SxProps<Theme> = {
  color: 'text.primary',
  fontWeight: 600,
  textDecoration: 'underline',
  cursor: 'pointer',
  marginLeft: (theme) => theme.spacing(0.5),
  fontSize: (theme) => theme.typography.pxToRem(14),
  '&:hover': {
    color: 'primary.main',
  },
};
