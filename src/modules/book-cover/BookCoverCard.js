import {
  Card,
  CardHeader,
  CardContent,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';

import CoverImageUrl from '../../assets/boy.svg';
import LogoImageUrl from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  cardHolder: {
    position: 'relative',
    height: '80vh',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 540,
    },
    maxHeight: 700,
    textAlign: 'center',
  },
  cardHeaderHolder: {
    paddingTop: '3.75rem',
    '& .MuiCardHeader-title': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
      fontWeight: 700,
      fontSize: '3rem',
    },
    '& .MuiCardHeader-subheader': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
      fontWeight: 700,
      fontSize: '1.5rem',
      fontStyle: 'italic',
    },
  },
  coverImageHolder: {
    [theme.breakpoints.up('xs')]: {
      width: '60%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '55%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '65%',
    },
    maxWidth: 300,
    maxHeight: 300,
    height: 'auto',
  },
  logoImageHolder: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '4rem',
    },
    maxWidth: '5rem',
    height: 'auto',
  },
  footerHolder: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    bottom: '1rem',
  },
  footerUrlHolder: {
    fontWeight: 700,
    fontSize: '1.125rem',
    textTransform: 'uppercase',
  },
}));

export const BookCoverCard = ({
  title,
  subtitle,
  coverImageUrl,
  logoImageUrl,
  websiteUrl,
  backgroundColor,
}) => {
  const {
    cardHolder,
    cardHeaderHolder,
    cardContentHolder,
    coverImageHolder,
    logoImageHolder,
    footerHolder,
    footerUrlHolder,
  } = useStyles();

  return (
    <Card
      elevation={10}
      className={cardHolder}
      style={{ backgroundColor: backgroundColor }}
    >
      <CardHeader
        title={title || 'My Own Story'}
        subheader={subtitle || 'Insights of being a Developer'}
        className={cardHeaderHolder}
      />
      <CardContent className={cardContentHolder}>
        <Box my="1.5rem">
          <img
            src={coverImageUrl || CoverImageUrl}
            alt="Visual cover for the book"
            className={coverImageHolder}
          />
        </Box>
        <div className={footerHolder}>
          <img
            src={logoImageUrl || LogoImageUrl}
            alt="Logo"
            className={logoImageHolder}
          />
          <Typography className={footerUrlHolder}>
            {websiteUrl || 'www.bigsondev.com'}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
