import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { StyledEngineProvider, CssBaseline, ThemeProvider, IconButton } from '@mui/material';
import { closeSnackbar, SnackbarProvider } from 'notistack';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'dayjs/locale/cs';

import { MainLayout } from './components';
import { ROUTE_HOME, ROUTE_LOGIN, SNACKBARS_AUTOHIDE_DURATION } from './config';
import { LoginPage } from './features/auth';
import { MainPage, NotFoundPage } from './pages';
import theme from './theme';
import './App.css';

const router = createBrowserRouter([
  {
    path: ROUTE_LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_HOME,
    element: <MainLayout />, // Shared Layout for all protected pages
    children: [
      {
        index: true, // Default protected page
        element: <MainPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={10}
          preventDuplicate={true}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          autoHideDuration={SNACKBARS_AUTOHIDE_DURATION}
          action={(snackbarId) => (
            <IconButton
              aria-label="close"
              size="small"
              disableRipple
              onClick={() => closeSnackbar(snackbarId)}
            >
              <CloseOutlinedIcon
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '14px',
                }}
              />
            </IconButton>
          )}
          style={{
            color: theme.palette.secondary.main,
          }}
          iconVariant={{
            success: <CheckCircleOutlineIcon htmlColor={theme.palette.success.main} />,
            error: <ErrorOutlineOutlinedIcon fill={theme.palette.error.main} />,
            warning: <InfoOutlinedIcon fill={theme.palette.warning.dark} />,
            info: <InfoOutlinedIcon fill={theme.palette.info.main} />,
          }}
        >
          <RouterProvider router={router} fallbackElement={<div>Loading router...</div>} />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
