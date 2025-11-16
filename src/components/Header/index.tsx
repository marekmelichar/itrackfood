import { AppBar, Toolbar, Box, Avatar } from '@mui/material';

import { appBarStyles, toolbarStyles, logoAvatarStyles, userAvatarStyles } from './styles';

export const Header = () => {
  return (
    <AppBar position="sticky" sx={appBarStyles}>
      <Toolbar sx={toolbarStyles}>
        <Box>
          <Avatar sx={logoAvatarStyles}>🍕</Avatar>
        </Box>

        <Box>
          <Avatar sx={userAvatarStyles} src="/path/to/user/avatar.jpg" alt="User" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
