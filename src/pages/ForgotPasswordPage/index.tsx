import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  containerStyles,
  leftSectionStyles,
  rightSectionStyles,
  formContainerStyles,
  titleStyles,
  subtitleStyles,
  inputStyles,
  submitButtonStyles,
  backLinkStyles,
  arrowStyles,
} from './styles';

export const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    navigate('/login');
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={leftSectionStyles}>
        <Box sx={formContainerStyles}>
          <Typography sx={titleStyles}>{t('ForgotPasswordPage.Title')}</Typography>
          <Typography sx={subtitleStyles}>{t('ForgotPasswordPage.Subtitle')}</Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t('Common.Email')}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={inputStyles}
              required
            />

            <Button type="submit" sx={submitButtonStyles}>
              {t('ForgotPasswordPage.SubmitButton')}
            </Button>
          </form>

          <Box sx={backLinkStyles} onClick={() => navigate('/login')}>
            <ArrowBackIcon sx={arrowStyles} />
            <Typography component="span">{t('ForgotPasswordPage.BackToLogin')}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={rightSectionStyles} />
    </Box>
  );
};
