/**
 * Material UI color palette
 */

const palette = {
  primary: {
    main: '#88BF31', // Primary green from designs
    light: '#BADA88', // Light green for hover
    dark: '#53751E', // Dark green
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#4A4A4A', // Primary text color
    light: '#B1B1B1', // use also for hover + disabled input
    dark: '#707070', // Secondary text color
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#FF0202',
    light: '#F78B7E', // use also for hover
    dark: '#942214',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#E58900',
    light: '#FCD68F', // use also for hover
    dark: '#E58900',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#1576C1',
    light: '#83B0D8', // use also for hover
    dark: '#194873',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#88BF31',
    light: '#BADA88', // use also for hover
    dark: '#53751E',
    contrastText: '#FFFFFF',
  },
  grey: {
    50: '#F7F7F7', // Ultra light grey
    100: '#E7E7E7', // Light grey
    200: '#DBDBDB', // Disabled light grey
    300: '#CBCBCB',
    400: '#C1C1C1', // Grey
    500: '#B1B1B1', // Disabled dark grey
    600: '#A1A1A1',
    700: '#7E7E7E',
    800: '#616161',
    900: '#4A4A4A', // Primary text
  },
  customBg: {
    main: '#FFF3E0',
    light: '#FFF8E1',
    dark: '#FFE0B2',
    contrastText: '#4A4A4A',
  },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
  divider: '#E0E0E0',
  text: {
    primary: '#4A4A4A',
    secondary: '#707070',
    disabled: '#B1B1B1',
  },
};

export default palette;
