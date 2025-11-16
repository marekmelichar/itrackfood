import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CookieIcon from '@mui/icons-material/Cookie';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  bannerContainerStyles,
  bannerContentStyles,
  iconStyles,
  textContainerStyles,
  titleStyles,
  descriptionStyles,
  linkStyles,
  buttonsContainerStyles,
  acceptButtonStyles,
  essentialButtonStyles,
  closeButtonStyles,
} from './styles';

const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_TIMESTAMP = 'cookieConsentTimestamp';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const timestamp = localStorage.getItem(COOKIE_CONSENT_TIMESTAMP);

    // Show banner if no consent or consent is older than 6 months
    if (!consent || !timestamp) {
      setIsVisible(true);
    } else {
      const sixMonthsAgo = Date.now() - 6 * 30 * 24 * 60 * 60 * 1000;
      if (parseInt(timestamp) < sixMonthsAgo) {
        setIsVisible(true);
      }
    }
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    localStorage.setItem(COOKIE_CONSENT_TIMESTAMP, Date.now().toString());
    setIsVisible(false);

    // Initialize analytics/marketing based on consent
    if (consent.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
    if (consent.marketing) {
      // Initialize marketing cookies
      // window.gtag?.('consent', 'update', { ad_storage: 'granted' });
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    });
  };

  const handleEssentialOnly = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    });
  };

  const handleClose = () => {
    // Close without saving preference - banner will reappear on next visit
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Box sx={bannerContainerStyles} role="dialog" aria-label="Cookie consent">
      <IconButton sx={closeButtonStyles} onClick={handleClose} aria-label="Close cookie banner">
        <CloseIcon sx={{ fontSize: '18px' }} />
      </IconButton>
      <Box sx={bannerContentStyles}>
        <Box sx={iconStyles} aria-hidden="true">
          <CookieIcon />
        </Box>
        <Box sx={textContainerStyles}>
          <Typography sx={titleStyles} component="h2">
            {t('CookieBanner.Title')}
          </Typography>
          <Typography sx={descriptionStyles}>
            {t('CookieBanner.Description')}{' '}
            <Link href="#" sx={linkStyles} aria-label={t('CookieBanner.PolicyLink')}>
              {t('CookieBanner.PolicyLink')}
            </Link>
            .
          </Typography>
          <Box sx={buttonsContainerStyles}>
            <Button
              sx={essentialButtonStyles}
              onClick={handleEssentialOnly}
              aria-label={t('CookieBanner.EssentialOnly')}
            >
              {t('CookieBanner.EssentialOnly')}
            </Button>
            <Button
              sx={acceptButtonStyles}
              onClick={handleAcceptAll}
              aria-label={t('CookieBanner.AcceptAll')}
            >
              {t('CookieBanner.AcceptAll')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
