import { SxProps, Theme } from '@mui/material';

export const bannerContainerStyles: SxProps<Theme> = {
  position: 'fixed',
  bottom: (theme) => theme.spacing(3),
  left: (theme) => theme.spacing(3),
  right: (theme) => theme.spacing(3),
  backgroundColor: 'white',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  zIndex: 1300,
  padding: (theme) => `${theme.spacing(2.5)} ${theme.spacing(3)}`,
  borderRadius: (theme) => theme.spacing(1.5),
  border: '1px solid',
  borderColor: 'divider',
};

export const bannerContentStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: (theme) => theme.spacing(2),
};

export const iconStyles: SxProps<Theme> = {
  width: (theme) => theme.spacing(5),
  height: (theme) => theme.spacing(5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: (theme) => theme.spacing(1),
  backgroundColor: (theme) => `${theme.palette.primary.main}15`,
  color: 'primary.main',
  flexShrink: 0,
  '& svg': {
    fontSize: (theme) => theme.typography.pxToRem(24),
  },
};

export const textContainerStyles: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: (theme) => theme.spacing(0.5),
};

export const titleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(16),
  fontWeight: 600,
  color: 'text.primary',
};

export const descriptionStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(14),
  color: 'text.secondary',
  lineHeight: 1.6,
};

export const linkStyles: SxProps<Theme> = {
  color: 'primary.main',
  textDecoration: 'underline',
  cursor: 'pointer',
  '&:hover': {
    color: 'primary.dark',
  },
};

export const actionsStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: (theme) => theme.spacing(1),
  marginTop: (theme) => theme.spacing(1.5),
};

export const buttonsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: (theme) => theme.spacing(1.5),
  marginTop: (theme) => theme.spacing(2),
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
};

export const acceptButtonStyles: SxProps<Theme> = {
  backgroundColor: 'primary.main',
  color: 'white',
  padding: (theme) => `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  fontSize: (theme) => theme.typography.pxToRem(14),
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: (theme) => theme.spacing(1),
  flex: 1,
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
};

export const essentialButtonStyles: SxProps<Theme> = {
  backgroundColor: 'transparent',
  color: 'text.primary',
  padding: (theme) => `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  fontSize: (theme) => theme.typography.pxToRem(14),
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: (theme) => theme.spacing(1),
  border: '1px solid',
  borderColor: 'divider',
  flex: 1,
  '&:hover': {
    backgroundColor: 'action.hover',
    borderColor: 'text.secondary',
  },
};

export const closeButtonStyles: SxProps<Theme> = {
  position: 'absolute',
  top: (theme) => theme.spacing(1.5),
  right: (theme) => theme.spacing(1.5),
  padding: (theme) => theme.spacing(0.5),
  color: 'text.secondary',
  '&:hover': {
    backgroundColor: 'action.hover',
  },
};
