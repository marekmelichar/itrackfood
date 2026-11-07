import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
  maxWidth: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#fff',
  minHeight: '100vh',
};

export const headerStyles: SxProps<Theme> = {
  padding: (theme) =>
    `${theme.spacing(4)} ${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(12.5)}`,
  marginBottom: 0,
};

export const dateSectionStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
};

export const monthNameStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(14),
  fontWeight: 400,
  color: '#000',
  letterSpacing: '0.5px',
  paddingTop: (theme) => theme.spacing(1),
};

export const dayStyles: SxProps<Theme> = {
  fontSize: (theme) => `${theme.typography.pxToRem(72)} !important`,
  fontWeight: 400,
  color: '#000',
  lineHeight: 1,
};

export const weekDayStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(14),
  fontWeight: 400,
  color: '#000',
  letterSpacing: '0.5px',
  paddingTop: (theme) => theme.spacing(1),
};

export const datePickerSectionStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
};

export const datePickerButtonStyles: SxProps<Theme> = {
  padding: (theme) => theme.spacing(1.5),
  border: '1px solid #e0e0e0',
  borderRadius: (theme) => theme.spacing(0.5),
  backgroundColor: '#fff',
  color: '#000',
};

export const mealsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  width: '100%',
};

export const mealSectionStyles: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: (theme) => `${theme.spacing(30)} 1fr`,
  minHeight: (theme) => theme.spacing(5),
  borderBottom: '1px solid #e0e0e0',
};

export const mealHeaderStyles: SxProps<Theme> = {
  backgroundColor: '#e8e8e8',
  padding: (theme) => `${theme.spacing(1.75)} ${theme.spacing(2)}`,
  fontSize: (theme) => theme.typography.pxToRem(13),
  fontWeight: 400,
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  borderRight: '1px solid #e0e0e0',
};

export const entriesContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
};

export const entryRowStyles: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: (theme) => `${theme.spacing(20)} 1fr`,
  padding: (theme) => `${theme.spacing(1.25)} ${theme.spacing(3)}`,
  borderBottom: '1px solid #f5f5f5',
  minHeight: (theme) => theme.spacing(4.75),
  alignItems: 'center',
  '&:last-child': {
    borderBottom: 'none',
  },
};

export const measurementStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: (theme) => theme.spacing(0.75),
  fontSize: (theme) => theme.typography.pxToRem(13),
  color: '#000',
};

export const unitStyles: SxProps<Theme> = {
  color: '#666',
  minWidth: (theme) => theme.spacing(4.375),
};

export const separatorStyles: SxProps<Theme> = {
  color: '#ccc',
};

export const amountStyles: SxProps<Theme> = {
  color: '#000',
  fontWeight: 400,
};

export const descriptionStyles: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.pxToRem(13),
  color: '#000',
};

export const timeEntryStyles: SxProps<Theme> = {
  gridColumn: '1 / -1',
  fontSize: (theme) => theme.typography.pxToRem(13),
  color: '#000',
  fontWeight: 400,
  paddingLeft: 0,
};

export const notesEntryStyles: SxProps<Theme> = {
  gridColumn: '1 / -1',
  fontSize: (theme) => theme.typography.pxToRem(13),
  color: '#000',
  fontWeight: 400,
  paddingLeft: 0,
};
