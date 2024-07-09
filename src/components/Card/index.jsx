import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

const CardList = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      mt: '50px',
      flexDirection: { xs: 'column', md: 'row' },
    }}
  >
    <Card sx={{ maxWidth: 300, maxHeight: '300px', position: 'relative', overflow: 'visible', zIndex: 2 }}>
      <CardContent>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: '#3a2f58',
            position: 'absolute',
            top: -40,
            left: { xs: '50%', md: '5%' },
            transform: { xs: 'translateX(-50%)', md: 'translateX(-5%)' },
          }}
        >
          <img src="./images/icon-brand-recognition.svg" alt="recognition" />
        </Avatar>
        <Typography variant="h6" component="h2" fontWeight="bold" mt={4}>
          <FormattedMessage id="app_card_title1" />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <FormattedMessage id="app_card_description1" />
        </Typography>
      </CardContent>
    </Card>
    <Card
      className={classes.card2}
      sx={{
        maxWidth: 300,
        maxHeight: '300px',
        position: 'relative',
        overflow: 'visible',
        mt: { xs: '30px', md: '80px' },
      }}
    >
      <CardContent>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: '#3a2f58',
            position: 'absolute',
            top: -40,
            zIndex: 2,
            left: { xs: '50%', md: '5%' },
            transform: { xs: 'translateX(-50%)', md: 'translateX(-5%)' },
          }}
        >
          <img src="./images/icon-detailed-records.svg" alt="recognition" />
        </Avatar>
        <Typography variant="h6" component="h2" fontWeight="bold" mt={4}>
          <FormattedMessage id="app_card_title2" />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <FormattedMessage id="app_card_description2" />
        </Typography>
      </CardContent>
    </Card>
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: '300px',
        position: 'relative',
        overflow: 'visible',
        zIndex: 2,
        mt: { xs: '30px', md: '160px' },
      }}
    >
      <CardContent>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: '#3a2f58',
            position: 'absolute',
            top: -40,
            left: { xs: '50%', md: '5%' },
            transform: { xs: 'translateX(-50%)', md: 'translateX(-5%)' },
          }}
        >
          <img src="./images/icon-fully-customizable.svg" alt="recognition" />
        </Avatar>
        <Typography variant="h6" component="h2" fontWeight="bold" mt={4}>
          <FormattedMessage id="app_card_title3" />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <FormattedMessage id="app_card_description3" />
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
export default CardList;
