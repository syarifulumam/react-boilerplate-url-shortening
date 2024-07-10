import CardList from '@components/Card/index';
import { selectShortLink } from '@containers/App/selectors';
import { Box, Button, Container, Divider, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

const paragraph = true;
const Feature = () => {
  const shortLink = useSelector(selectShortLink);
  const [copy, setCopy] = useState('Copy');

  const handleCopy = (link) => {
    setCopy('Copied!');
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setCopy('Copy');
    }, 2000);
  };
  return (
    <Box sx={{ py: 5, backgroundColor: '#f0f1f6', paddingTop: '20px' }}>
      <Container maxWidth="lg">
        {shortLink.length !== 0 &&
          shortLink.map((item) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
              key={item.key}
            >
              <Typography>{item.url}</Typography>
              <Divider sx={{ width: '100%', display: { xs: 'block', md: 'none' } }} />
              <Box
                sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '10px', alignItems: 'center' }}
              >
                <Typography
                  color="#63c9c5"
                  sx={{ fontWeight: 'bold', textDecoration: 'none' }}
                  fontWeight="bold"
                  component="a"
                  href={item.shrtlnk}
                  target="_blank"
                >
                  {item.shrtlnk}
                </Typography>
                <Tooltip title={copy}>
                  <Button
                    variant="contained"
                    onClick={() => handleCopy(item.shrtlnk)}
                    sx={{
                      backgroundColor: '#3a3053',
                      '&: hover': { backgroundColor: '#2bd0d1', opacity: 0.7 },
                    }}
                  >
                    <FormattedMessage id="app_form_button2" />
                  </Button>
                </Tooltip>
              </Box>
            </Box>
          ))}
      </Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }} align="center">
          Advanced Statistics
          <FormattedMessage id="app_feature_title" />
        </Typography>
        <Typography component="p" paragraph={paragraph} sx={{ width: '70%' }} color="text.secondary" align="center">
          <FormattedMessage id="app_feature_description" />
        </Typography>
      </Box>
      <CardList />
    </Box>
  );
};

export default Feature;
