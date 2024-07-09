import { postShortLink } from '@containers/App/actions';
import { Box, Button, Container, Input } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const From = () => {
  const [inputLink, setInputLink] = useState('');
  const valueTrue = true;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postShortLink(inputLink));
    setInputLink('');
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: '#3a3053',
          backgroundImage: 'url(/src/static/images/images/bg-shorten-desktop.svg)',
          backgroundRepeat: 'no-repeat',
          objectFit: 'contain',
          height: '100px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '5px',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', width: '80%', gap: '10px' }}>
          <Input
            onChange={(e) => setInputLink(e.target.value)}
            value={inputLink}
            type="text"
            disableUnderline={valueTrue}
            fullWidth={valueTrue}
            placeholder="Shorten a link here..."
            sx={{ backgroundColor: 'white', borderRadius: '5px', paddingX: '20px' }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#2bd0d1',
              width: '200px',
              '&: hover': { backgroundColor: '#2bd0d1', opacity: 0.7 },
            }}
          >
            <FormattedMessage id="app_form_button" />
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default From;
