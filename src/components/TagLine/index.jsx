import { Box, Button, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const TagLine = () => (
  <Box
    sx={{
      textAlign: 'center',
      backgroundImage: 'url(./images/bg-boost-desktop.svg)',
      height: '200px',
      backgroundColor: '#3a3053',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography component="h2" variant="h4" fontWeight="bold">
      <FormattedMessage id="app_tagline" />
    </Typography>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#2bd0d1',
        borderRadius: '20px',
        '&: hover': { backgroundColor: '#2bd0d1', opacity: 0.7 },
      }}
    >
      <FormattedMessage id="app_tagline_button" />
    </Button>
  </Box>
);

export default TagLine;
