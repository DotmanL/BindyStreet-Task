import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
// eslint-disable-next-line import/no-unresolved
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DarkModeToggle from './DarkModeToggle';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBar: {
    background: theme.palette.background.default,
    color: 'black',
    top: '0',
    // boxShadow: 'none',
    height: '90px',
    padding: theme.spacing(0, 0),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
      borderBottom: '2px solid white',
    },
  },
  new: {
    backgroundColor: theme.palette.background.default,
    top: '0',
    color: 'black',
    height: '90px',
    padding: theme.spacing(0, 0),
    justifyContent: 'center',
    boxShadow: '0 5px 5px -2px rgba(0, 0, 0, 0.2)',
    marginTop: theme.spacing(-0.1),
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  },
  iconButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },

  iconButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.text.primary,
  },
  userIntro: {
    width: '100%',
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
  },
  todosButton: {
    background: theme.palette.mainBackground.color,
    borderRadius: '8px',
    padding: theme.spacing(0.5, 1.5),
  },
  appName: {
    fontSize: theme.spacing(4.8),
    fontFamily: 'Montserrat',
    fontWeight: 900,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  drawer: {
    width: 250,
  },
  button: {
    color: theme.palette.background.default,
    background: theme.palette.primary.main,
    width: 'auto',
    height: 'auto',
    borderRadius: '15px',
    padding: theme.spacing(0.3, 2),
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: 0.9,
    },
  },
  menuIcon: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      color: 'white',
    },
  },
}));

interface NavBarProps {
  appName: string;
}

export const NavBar: React.FC<NavBarProps> = ({ appName }) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line operator-linebreak
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // eslint-disable-next-line no-shadow
      const scrolledDown = bodyScrollTop > 120;
      setScrolledDownEnough(scrolledDown);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledDownEnough]);

  return (
    <AppBar
      position="fixed"
      className={classnames({
        [classes.new]: scrolledDownEnough,
        [classes.appBar]: !scrolledDownEnough,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <Grid className={classes.iconButtonContainer}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
            className={classes.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.appName}>{appName}</Typography>
        </Grid>
        <Grid className={classes.navLinks}>
          <Grid>
            <Typography variant="h6" className={classes.userIntro}>Hi, Dotun</Typography>
          </Grid>
          <List>
            {' '}
            <ListItem button className={classes.todosButton}>
              <ListItemText primary="TODOS" />
            </ListItem>
          </List>

          <DarkModeToggle />
        </Grid>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List className={classes.drawer}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
