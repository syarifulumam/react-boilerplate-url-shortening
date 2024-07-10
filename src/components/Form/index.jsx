import { postShortLink } from '@containers/App/actions';
import { Box, Button, Container, Input, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { selectShortLink } from '@containers/App/selectors';

const From = () => {
  const [inputLink, setInputLink] = useState('');
  const intl = useIntl();
  const shortLink = useSelector(selectShortLink);
  const valueTrue = true;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = () => {
    if (shortLink.find((item) => item.url === inputLink)) {
      setError('url', {
        message: intl.formatMessage({ id: 'app_validation_url_exist' }),
        shouldFocus: valueTrue,
      });
    } else {
      dispatch(postShortLink(inputLink));
    }
    setInputLink('');
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: '#3a3053',
          backgroundImage: 'url(./images/bg-shorten-desktop.svg)',
          backgroundRepeat: 'no-repeat',
          objectFit: 'contain',
          height: '100px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '5px',
          paddingY: '10px',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '10px', width: '80%' }}
        >
          <Box width="100%">
            <Input
              {...register('url', {
                required: intl.formatMessage({ id: 'app_validation_url_required' }),
                pattern: {
                  value: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
                  message: intl.formatMessage({ id: 'app_validation_url_invalid' }),
                },
              })}
              onChange={(e) => setInputLink(e.target.value)}
              value={inputLink}
              type="text"
              disableUnderline={valueTrue}
              fullWidth={valueTrue}
              placeholder="Shorten a link here..."
              sx={{
                backgroundColor: 'white',
                borderRadius: '5px',
                paddingX: '20px',
                position: 'relative',
                height: '43px',
                border: errors.url ? '2px solid red' : 'none',
              }}
            />
            {errors.url && (
              <Typography
                variant="caption"
                display="block"
                color="red"
                gutterBottom
                sx={{ position: 'absolute', width: '100%' }}
              >
                {errors.url.message}
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={{
              backgroundColor: '#2bd0d1',
              width: { xs: '100%', md: '200px' },
              marginTop: { xs: '10px', md: '0' },
              '&: hover': { backgroundColor: '#2bd0d1', opacity: 0.7 },
            }}
          >
            <FormattedMessage id="app_form_button" />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default From;
