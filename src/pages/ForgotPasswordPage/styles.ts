import { SxProps, Theme } from '@mui/material';

import buildingImage from '../../assets/images/fabian-jones-1a-U1BDJf8A-unsplash (1).jpg';

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
  backgroundImage: `url(${buildingImage})`,
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
  marginBottom: (theme) => theme.spacing(1),
  textAlign: 'center',
};

export const subtitleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(14),
  color: 'text.secondary',
  marginBottom: (theme) => theme.spacing(4),
  textAlign: 'center',
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

export const submitButtonStyles: SxProps<Theme> = {
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

export const backLinkStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: (theme) => theme.typography.pxToRem(14),
  color: 'text.secondary',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: 'primary.main',
  },
};

export const arrowStyles: SxProps<Theme> = {
  marginRight: (theme) => theme.spacing(1),
  fontSize: (theme) => theme.typography.pxToRem(18),
};
