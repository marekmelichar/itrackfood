import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';

import { containerStyles, mainLayoutStyles } from './styles';

export const MainLayout = () => {
  return (
    <Box sx={containerStyles}>
      <Header />
      <Box sx={mainLayoutStyles}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
