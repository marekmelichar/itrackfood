import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customBg: Palette['primary'];
  }

  interface PaletteOptions {
    customBg?: PaletteOptions['primary'];
  }
}
