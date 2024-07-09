import { Box, Container, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material';
import classes from './style.module.scss';

const valueTrue = true;
const Footer = () => (
  <Box sx={{ py: 5, backgroundColor: '#232027', color: 'white' }}>
    <Container maxWidth="lg">
      <Grid container sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Grid item md={3} xs={12}>
          <Typography variant="h6" component="h1" fontWeight="bold">
            Shortly
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Typography fontWeight="bold">Features</Typography>
          <List dense={valueTrue} sx={{ color: 'grey' }}>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Link Shortening
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Branded Links
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Analytics
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} xs={12}>
          <Typography fontWeight="bold">Resources</Typography>
          <List dense={valueTrue} sx={{ color: 'grey' }}>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Blog
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Developers
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Support
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} xs={12}>
          <Typography fontWeight="bold">Company</Typography>
          <List dense={valueTrue} sx={{ color: 'grey' }}>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                About
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Our Team
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Careers
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters={valueTrue}>
              <ListItemButton
                disableGutters={valueTrue}
                component="a"
                href="#"
                sx={{ '&: hover': { color: '#2bd0d1' }, justifyContent: { xs: 'center', md: 'left' } }}
              >
                Contact
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12} sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <img
            src="/src/static/images/images/icon-facebook.svg"
            alt="facebook"
            width={24}
            height={24}
            className={classes.iconSosmed}
          />
          <img
            src="/src/static/images/images/icon-twitter.svg"
            alt="twitter"
            width={24}
            height={24}
            className={classes.iconSosmed}
          />
          <img
            src="/src/static/images/images/icon-pinterest.svg"
            alt="pinterest"
            width={24}
            height={24}
            className={classes.iconSosmed}
          />
          <img
            src="/src/static/images/images/icon-instagram.svg"
            alt="instagram"
            width={24}
            height={24}
            className={classes.iconSosmed}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
