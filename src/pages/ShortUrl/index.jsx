import Feature from '@components/Feature/index';
import Footer from '@components/Footer/index';
import From from '@components/Form/index';
import Hero from '@components/Hero/index';
import TagLine from '@components/TagLine/index';
import { Box } from '@mui/material';

const ShortUrl = () => (
  <Box sx={{ overflow: 'hidden' }}>
    <Hero />
    <From />
    <Feature />
    <TagLine />
    <Footer />
  </Box>
);

export default ShortUrl;
