import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Select,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { setLocale } from '@containers/App/actions';

const Navbar = ({ locale }) => {
  const dispatch = useDispatch();
  const [anchorNav, setAnchorNav] = useState(null);
  const [language, setLanguage] = useState(locale);
  const Gutters = true;
  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };
  const handleChange = (lang) => {
    setLanguage(lang);
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
  };
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
        <Toolbar disableGutters={Gutters}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 }, fontWeight: 'bold', marginRight: '10px' }}
          >
            Shortly
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} gap={2}>
            <Button size="small" sx={{ color: 'gray', fontWeight: 'bold', '&: hover': { color: 'black' } }}>
              <FormattedMessage id="app_navbar_title1" />
            </Button>
            <Button size="small" sx={{ color: 'gray', fontWeight: 'bold', '&: hover': { color: 'black' } }}>
              <FormattedMessage id="app_navbar_title2" />
            </Button>
            <Button size="small" sx={{ color: 'gray', fontWeight: 'bold', '&: hover': { color: 'black' } }}>
              <FormattedMessage id="app_navbar_title3" />
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} gap={2}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select id="demo-simple-select" value={language} onChange={(e) => handleChange(e.target.value)}>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="id">Indonesia</MenuItem>
              </Select>
            </FormControl>
            <Button size="small" sx={{ color: 'gray', fontWeight: 'bold', '&: hover': { color: 'black' } }}>
              <FormattedMessage id="app_navbar_login" />
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: '#2bd0d1',
                borderRadius: '20px',
                '&: hover': { backgroundColor: '#2bd0d1', opacity: 0.7 },
              }}
            >
              <FormattedMessage id="app_navbar_signup" />
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              anchorEl={anchorNav}
              onClose={closeMenu}
              sx={{ display: { xs: 'flex', md: 'none' } }}
              slotProps={{
                paper: {
                  sx: {
                    width: '100%',
                    backgroundColor: '#3a3053',
                    color: 'white',
                  },
                },
              }}
            >
              <MenuList>
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <FormattedMessage id="app_navbar_title1" />
                </MenuItem>
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <FormattedMessage id="app_navbar_title2" />
                </MenuItem>
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <FormattedMessage id="app_navbar_title3" />
                </MenuItem>
                <Divider variant="middle" component="li" />
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <FormControl sx={{ minWidth: 120 }} size="small">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={language}
                      label="Age"
                      sx={{ color: 'white' }}
                      onChange={(e) => handleChange(e.target.value)}
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="id">Indonesia</MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <FormattedMessage id="app_navbar_login" />
                </MenuItem>
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: '#2bd0d1',
                      borderRadius: '20px',
                      '&: hover': { backgroundColor: '#2bd0d1', opacity: 0.7 },
                    }}
                  >
                    <FormattedMessage id="app_navbar_signup" />
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Navbar;
