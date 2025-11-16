import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { footerStyles, footerContentStyles } from './styles';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={footerStyles}>
      <Box sx={footerContentStyles}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} {t('Footer.Copyright')}
        </Typography>
      </Box>
    </Box>
  );
};
