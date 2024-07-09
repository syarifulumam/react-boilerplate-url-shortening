import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { FormattedMessage } from 'react-intl';

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
    <Card sx={{ maxWidth: 300, maxHeight: '300px', position: 'relative', overflow: 'visible' }}>
      <CardContent>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: '#3a2f58',
            position: 'absolute',
            top: -40,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img src="/src/static/images/images/icon-brand-recognition.svg" alt="recognition" />
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
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img src="/src/static/images/images/icon-detailed-records.svg" alt="recognition" />
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
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img src="/src/static/images/images/icon-fully-customizable.svg" alt="recognition" />
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
