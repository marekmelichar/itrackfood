import { SxProps, Theme } from '@mui/material';

export const headerStyles: SxProps<Theme> = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: (theme) => `${theme.spacing(2)} ${theme.spacing(6)}`,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
};

export const logoStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(32),
  cursor: 'pointer',
};

export const heroSectionStyles: SxProps<Theme> = {
  position: 'relative',
  minHeight: (theme) => theme.spacing(62.5),
  height: (theme) => theme.spacing(62.5),
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
};

export const heroImageStyles = (imageUrl: string): SxProps<Theme> => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});

export const heroContentStyles: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  maxWidth: (theme) => theme.spacing(150),
  margin: '0 auto',
  padding: (theme) => `${theme.spacing(7.5)} ${theme.spacing(6)}`,
  width: '100%',
};

export const heroTitleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(56),
  fontWeight: 700,
  color: 'white',
  marginBottom: (theme) => theme.spacing(2),
  lineHeight: 1.2,
  maxWidth: (theme) => theme.spacing(75),
};

export const heroSubtitleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(16),
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: (theme) => theme.spacing(4),
  maxWidth: (theme) => theme.spacing(62.5),
  lineHeight: 1.6,
};

export const heroButtonStyles: SxProps<Theme> = {
  backgroundColor: 'primary.main',
  color: 'white',
  padding: (theme) => `${theme.spacing(2)} ${theme.spacing(5)}`,
  fontSize: (theme) => theme.typography.pxToRem(18),
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: (theme) => theme.spacing(1),
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
};

export const loginButtonStyles: SxProps<Theme> = {
  backgroundColor: 'primary.main',
  color: 'white',
  padding: (theme) => `${theme.spacing(1.5)} ${theme.spacing(4)}`,
  fontSize: (theme) => theme.typography.pxToRem(16),
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: (theme) => theme.spacing(1),
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
};

export const sectionStyles: SxProps<Theme> = {
  maxWidth: (theme) => theme.spacing(150),
  margin: '0 auto',
  padding: (theme) => `${theme.spacing(10)} ${theme.spacing(3)}`,
};

export const sectionTitleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(36),
  fontWeight: 700,
  color: 'text.primary',
  textAlign: 'center',
  marginBottom: (theme) => theme.spacing(2),
};

export const recommendedSectionStyles: SxProps<Theme> = {
  backgroundColor: 'grey.50',
  padding: (theme) => `${theme.spacing(10)} ${theme.spacing(3)}`,
  textAlign: 'center',
};

export const recommendedTitleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(24),
  fontWeight: 600,
  color: 'text.primary',
  marginBottom: (theme) => theme.spacing(6),
};

export const recommendedImageStyles: SxProps<Theme> = {
  maxWidth: (theme) => theme.spacing(125),
  width: '70%',
  height: 'auto',
};

export const featuresGridStyles: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: (theme) => `${theme.spacing(8)} ${theme.spacing(10)}`,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gap: (theme) => theme.spacing(6),
  },
};

export const featureCardStyles: SxProps<Theme> = {
  display: 'flex',
  gap: (theme) => theme.spacing(3),
  textAlign: 'left',
};

export const featureIconStyles: SxProps<Theme> = {
  minWidth: (theme) => theme.spacing(7),
  width: (theme) => theme.spacing(7),
  height: (theme) => theme.spacing(7),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: (theme) => theme.spacing(1.5),
  backgroundColor: (theme) => `${theme.palette.primary.main}15`,
  color: 'primary.main',
  '& svg': {
    fontSize: (theme) => theme.typography.pxToRem(32),
  },
};

export const featureTitleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(20),
  fontWeight: 600,
  color: 'text.primary',
  marginBottom: (theme) => theme.spacing(1.5),
};

export const featureDescriptionStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(14),
  color: 'text.secondary',
  lineHeight: 1.6,
};

export const testimonialsSectionStyles: SxProps<Theme> = {
  background: (theme) =>
    `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 60%, white 60%, white 100%)`,
  padding: (theme) => `${theme.spacing(11.25)} ${theme.spacing(3)} 0 ${theme.spacing(3)}`,
  color: 'white',
};

export const testimonialsContainerStyles: SxProps<Theme> = {
  maxWidth: (theme) => theme.spacing(150),
  margin: '0 auto',
};

export const testimonialsWrapperStyles: SxProps<Theme> = {
  position: 'relative',
  maxWidth: (theme) => theme.spacing(150),
  margin: '0 auto',
  padding: (theme) => `0 ${theme.spacing(1.25)}`,
  paddingBottom: (theme) => theme.spacing(7.5),
  '& .slick-list': {
    overflowX: 'hidden',
    overflowY: 'visible',
    paddingBottom: (theme) => theme.spacing(3.75),
    marginBottom: (theme) => theme.spacing(-3.75),
  },
  '& .slick-track': {
    display: 'flex',
    alignItems: 'stretch',
  },
  '& .slick-slide': {
    height: 'auto',
    '& > div': {
      height: '100%',
    },
  },
};

export const testimonialCardStyles: SxProps<Theme> = {
  backgroundColor: 'white',
  padding: (theme) => theme.spacing(6),
  borderRadius: (theme) => theme.spacing(1.5),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  minHeight: (theme) => theme.spacing(37.5),
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: (theme) => theme.spacing(112.5),
  height: '100%',
};

export const testimonialTextStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(14),
  color: 'text.secondary',
  lineHeight: 1.8,
  marginBottom: (theme) => theme.spacing(3),
  fontStyle: 'italic',
  flex: 1,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 6,
  WebkitBoxOrient: 'vertical',
};

export const testimonialAuthorStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: (theme) => theme.spacing(2),
};

export const testimonialImageStyles: SxProps<Theme> = {
  width: (theme) => theme.spacing(6),
  height: (theme) => theme.spacing(6),
  borderRadius: '50%',
  objectFit: 'cover',
};

export const testimonialNameStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(16),
  fontWeight: 600,
  color: 'text.primary',
};

export const testimonialsTitleStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(36),
  fontWeight: 700,
  color: 'white',
  textAlign: 'center',
  marginBottom: (theme) => theme.spacing(8),
};

export const navigationButtonStyles: SxProps<Theme> = {
  position: 'absolute',
  top: (theme) => `calc(50% - ${theme.spacing(3.75)})`,
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  color: 'primary.main',
  width: (theme) => theme.spacing(6),
  height: (theme) => theme.spacing(6),
  borderRadius: '50%',
  minWidth: 'auto',
  padding: 0,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  zIndex: 10,
  '&:hover': {
    backgroundColor: 'white',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
  },
  '& svg': {
    fontSize: (theme) => theme.typography.pxToRem(20),
  },
  '&.left': {
    left: '0',
  },
  '&.right': {
    right: '0',
  },
};
