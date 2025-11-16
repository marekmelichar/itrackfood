import { useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ScaleIcon from '@mui/icons-material/Scale';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import avatar1 from '../../assets/images/61a12a68c0eccd177b110cd1_orange-avatar-1-poll48eecu1my3u9inakumon7qza0kmfjrp9ark4km.png';
import avatar3 from '../../assets/images/61a12a68c0eccde89c110cdd_pink-avatar-1.png';
import avatar2 from '../../assets/images/61b092691ecb720b0cf0d774_cyan-guy.png';
import bannerImage from '../../assets/images/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg';
import recommendedByImage from '../../assets/images/recommended-by-1200 1.png';
import { CookieBanner } from '../../components/CookieBanner';
import { Footer } from '../../components/Footer';
import { ROUTE_LOGIN, ROUTE_SIGNUP } from '../../config/routes';

import {
  headerStyles,
  logoStyles,
  heroSectionStyles,
  heroImageStyles,
  heroContentStyles,
  heroTitleStyles,
  heroSubtitleStyles,
  heroButtonStyles,
  loginButtonStyles,
  sectionStyles,
  sectionTitleStyles,
  recommendedSectionStyles,
  recommendedTitleStyles,
  recommendedImageStyles,
  featuresGridStyles,
  featureCardStyles,
  featureIconStyles,
  featureTitleStyles,
  featureDescriptionStyles,
  testimonialsSectionStyles,
  testimonialsContainerStyles,
  testimonialsTitleStyles,
  testimonialsWrapperStyles,
  testimonialCardStyles,
  testimonialTextStyles,
  testimonialAuthorStyles,
  testimonialNameStyles,
  testimonialImageStyles,
  navigationButtonStyles,
} from './styles';

export const LandingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);

  const features = [
    {
      icon: <RestaurantIcon />,
      title: t('LandingPage.Features.NutritionalAwareness.Title'),
      description: t('LandingPage.Features.NutritionalAwareness.Description'),
    },
    {
      icon: <ScaleIcon />,
      title: t('LandingPage.Features.WeightManagement.Title'),
      description: t('LandingPage.Features.WeightManagement.Description'),
    },
    {
      icon: <LocalDiningIcon />,
      title: t('LandingPage.Features.PortionControl.Title'),
      description: t('LandingPage.Features.PortionControl.Description'),
    },
    {
      icon: <WarningIcon />,
      title: t('LandingPage.Features.FoodSensitivities.Title'),
      description: t('LandingPage.Features.FoodSensitivities.Description'),
    },
    {
      icon: <TrendingUpIcon />,
      title: t('LandingPage.Features.DietBalance.Title'),
      description: t('LandingPage.Features.DietBalance.Description'),
    },
    {
      icon: <TrendingUpIcon />,
      title: t('LandingPage.Features.Accountability.Title'),
      description: t('LandingPage.Features.Accountability.Description'),
    },
    {
      icon: <FitnessCenterIcon />,
      title: t('LandingPage.Features.MealPlanning.Title'),
      description: t('LandingPage.Features.MealPlanning.Description'),
    },
  ];

  const testimonials = [
    {
      name: t('LandingPage.Testimonials.Sarah.Name'),
      image: avatar1,
      text: t('LandingPage.Testimonials.Sarah.Text'),
    },
    {
      name: t('LandingPage.Testimonials.John.Name'),
      image: avatar2,
      text: t('LandingPage.Testimonials.John.Text'),
    },
    {
      name: t('LandingPage.Testimonials.Emily.Name'),
      image: avatar3,
      text: t('LandingPage.Testimonials.Emily.Text'),
    },
    {
      name: t('LandingPage.Testimonials.Michael.Name'),
      image: avatar1,
      text: t('LandingPage.Testimonials.Michael.Text'),
    },
    {
      name: t('LandingPage.Testimonials.Lisa.Name'),
      image: avatar2,
      text: t('LandingPage.Testimonials.Lisa.Text'),
    },
    {
      name: t('LandingPage.Testimonials.David.Name'),
      image: avatar3,
      text: t('LandingPage.Testimonials.David.Text'),
    },
  ];

  const handleNextTestimonial = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevTestimonial = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={headerStyles}>
        <Typography sx={logoStyles}>🍕</Typography>
        <Button sx={loginButtonStyles} onClick={() => navigate(ROUTE_LOGIN)}>
          {t('LandingPage.Login')}
        </Button>
      </Box>

      {/* Hero Section */}
      <Box sx={heroSectionStyles}>
        <Box sx={heroImageStyles(bannerImage)} />
        <Box sx={heroContentStyles}>
          <Typography sx={heroTitleStyles}>{t('LandingPage.HeroTitle')}</Typography>
          <Typography sx={heroSubtitleStyles}>{t('LandingPage.HeroSubtitle')}</Typography>
          <Button sx={heroButtonStyles} onClick={() => navigate(ROUTE_SIGNUP)}>
            {t('LandingPage.HeroButton')}
          </Button>
        </Box>
      </Box>

      {/* Recommended By Section */}
      <Box sx={recommendedSectionStyles}>
        <Typography sx={recommendedTitleStyles}>{t('LandingPage.RecommendedBy')}</Typography>
        <Box
          component="img"
          src={recommendedByImage}
          alt={t('LandingPage.RecommendedBy')}
          sx={recommendedImageStyles}
        />
      </Box>

      {/* Features Section */}
      <Box sx={sectionStyles}>
        <Typography sx={sectionTitleStyles}>{t('LandingPage.SectionTitle')}</Typography>
        <Box sx={featuresGridStyles}>
          {features.map((feature, index) => (
            <Box key={index} sx={featureCardStyles}>
              <Box sx={featureIconStyles}>{feature.icon}</Box>
              <Box>
                <Typography sx={featureTitleStyles}>{feature.title}</Typography>
                <Typography sx={featureDescriptionStyles}>{feature.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box sx={testimonialsSectionStyles}>
        <Box sx={testimonialsContainerStyles}>
          <Typography sx={testimonialsTitleStyles}>
            {t('LandingPage.Testimonials.Title')}
          </Typography>
          <Box sx={testimonialsWrapperStyles}>
            <IconButton
              sx={navigationButtonStyles}
              className="left"
              onClick={handlePrevTestimonial}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <Box key={index} sx={{ padding: '0 16px' }}>
                  <Box sx={testimonialCardStyles}>
                    <Typography sx={testimonialTextStyles}>
                      &quot;{testimonial.text}&quot;
                    </Typography>
                    <Box sx={testimonialAuthorStyles}>
                      <Box component="img" src={testimonial.image} sx={testimonialImageStyles} />
                      <Box>
                        <Typography sx={testimonialNameStyles}>{testimonial.name}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
            <IconButton
              sx={navigationButtonStyles}
              className="right"
              onClick={handleNextTestimonial}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Footer />
      <CookieBanner />
    </Box>
  );
};
