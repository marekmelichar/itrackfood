import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  containerStyles,
  leftSectionStyles,
  rightSectionStyles,
  formContainerStyles,
  titleStyles,
  subtitleStyles,
  googleButtonStyles,
  dividerContainerStyles,
  dividerLineStyles,
  dividerTextStyles,
  inputStyles,
  forgotPasswordStyles,
  checkboxContainerStyles,
  checkboxLabelStyles,
  loginButtonStyles,
  signupContainerStyles,
  signupTextStyles,
  signupLinkStyles,
} from './styles';

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={leftSectionStyles}>
        <Box sx={formContainerStyles}>
          <Typography sx={titleStyles}>{t('LoginPage.Title')}</Typography>
          <Typography sx={subtitleStyles}>{t('LoginPage.Subtitle')}</Typography>

          <Button
            variant="outlined"
            sx={googleButtonStyles}
            onClick={handleGoogleLogin}
            startIcon={
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                />
                <path
                  fill="#34A853"
                  d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                />
                <path
                  fill="#FBBC05"
                  d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                />
                <path
                  fill="#EA4335"
                  d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                />
              </svg>
            }
          >
            {t('LoginPage.GoogleButton')}
          </Button>

          <Box sx={dividerContainerStyles}>
            <Box sx={dividerLineStyles} />
            <Typography sx={dividerTextStyles}>{t('Common.Or')}</Typography>
            <Box sx={dividerLineStyles} />
          </Box>

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label={t('Common.Email')}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={inputStyles}
              required
            />

            <TextField
              fullWidth
              label={t('Common.Password')}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={inputStyles}
              required
            />

            <Typography sx={forgotPasswordStyles} onClick={() => navigate('/forgot-password')}>
              {t('LoginPage.ForgotPassword')}
            </Typography>

            <Box sx={checkboxContainerStyles}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    sx={{
                      color: '#E0E0E0',
                      '&.Mui-checked': {
                        color: 'primary.main',
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={checkboxLabelStyles}>{t('LoginPage.RememberMe')}</Typography>
                }
              />
            </Box>

            <Button type="submit" sx={loginButtonStyles}>
              {t('Common.Login')}
            </Button>
          </form>

          <Box sx={signupContainerStyles}>
            <Typography component="span" sx={signupTextStyles}>
              {t('LoginPage.NotAMember')}
            </Typography>
            <Typography component="span" sx={signupLinkStyles} onClick={() => navigate('/signup')}>
              {t('Common.SignUp')}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={rightSectionStyles} />
    </Box>
  );
};
