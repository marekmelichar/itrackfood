import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import components from './components';
import palette from './palette';
import './types';
import typography from './typography';

// Create theme
const intermediateTheme = createTheme({
  palette,
  typography,
  components,
});

// Generate responsive typography based on visual breakpoints
const theme = responsiveFontSizes(intermediateTheme, {});

export default theme;
