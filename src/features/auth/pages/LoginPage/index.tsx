import { Stack, Typography } from '@mui/material';

export const LoginPage: React.FC = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: '60vh' }}
    >
      <Typography variant="h1">Login</Typography>
    </Stack>
  );
};
