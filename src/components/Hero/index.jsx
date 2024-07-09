import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const paragraph = true;
const Hero = () => (
  <Container maxWidth="lg" sx={{ position: 'relative' }}>
    <Box my={{ xs: 0, md: 10 }} mb={{ xs: 10, md: 25 }}>
      <Grid container>
        <Grid item md={7} order={{ xs: 2, md: 1, lg: 1 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
            <FormattedMessage id="app_hero_heading" />
          </Typography>
          <Typography component="p" paragraph={paragraph} sx={{ width: '72%' }} color="text.secondary">
            <FormattedMessage id="app_hero_description" />
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2bd0d1',
              borderRadius: '20px',
              '&: hover': { backgroundColor: '#2bd0d1', opacity: 0.7 },
            }}
          >
            <FormattedMessage id="app_hero_button" />
          </Button>
        </Grid>
        {/* <Grid item md={5} sx={{ position: 'relative', overflow: { xs: 'hidden', md: 'visible' } }}> */}
        <Grid item md={5} sx={{ position: 'relative' }} order={{ xs: 1, md: 2, lg: 2 }}>
          <img
            src="./images/illustration-working.svg"
            alt="image_hero"
            loading="lazy"
            width="600px"
            style={{ position: { xs: 'relative', md: 'absolute' }, top: -60, left: 0, overflow: 'hidden', zIndex: -1 }}
          />
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default Hero;
