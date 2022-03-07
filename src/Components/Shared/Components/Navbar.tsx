import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
// eslint-disable-next-line import/no-unresolved
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import BindyLogo from '../assets/bindylogo.png';
import DarkModeToggle from './DarkModeToggle';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-evenly',
      padding: theme.spacing(0.5, 0, 0.5, 1.5),
    },
  },
  appBar: {
    background: theme.palette.mainBackground.color,
    color: theme.palette.common.white,
    top: '0',
    // boxShadow: 'none',
    height: '90px',
    padding: theme.spacing(0, 0),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  },
  newAppBar: {
    backgroundColor: theme.palette.background.default,
    top: '0',
    color: theme.palette.text.primary,
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
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-evenly',

    },
  },
  userIntro: {
    width: '100%',
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),

    },
  },
  todosButton: {
    background: theme.palette.mainBackground.color,
    borderRadius: '8px',
    padding: theme.spacing(0.5, 1.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.2, 1),
    },
  },
  todoText: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.4),
    },
  },
  dmContainer: {
    [theme.breakpoints.down('sm')]: {
    },
  },
  appDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogo: {
    width: '80px',
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      width: '40px',
      height: '40px',
    },
  },
  appName: {
    fontSize: theme.spacing(3.6),
    fontFamily: 'Nunito',
    fontWeight: 900,
    margin: theme.spacing(1.5, 0, 0, 1),
    // color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
  onShowTodo: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ appName, onShowTodo }) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line operator-linebreak
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // eslint-disable-next-line no-shadow
      const scrolledDown = bodyScrollTop > 60;
      setScrolledDownEnough(scrolledDown);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledDownEnough]);

  return (
    <AppBar
      position="fixed"
      className={classnames({
        [classes.newAppBar]: scrolledDownEnough,
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
          <Grid className={classes.appDetails}>
            <img src={BindyLogo} className={classes.appLogo} alt="BindyStreet" />
            <Typography variant="h6" className={classes.appName}>{appName}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.navLinks}>
          <Grid>
            <Typography variant="h6" className={classes.userIntro}>Hi, Dotun</Typography>
          </Grid>
          <List>
            {' '}
            <Button variant="contained" className={classes.todosButton}>
              <Typography
                className={classes.todoText}
                onClick={(): void => {
                  onShowTodo();
                }}
              >
                {' '}
                TODOS
              </Typography>
            </Button>
          </List>
          <Grid className={classes.dmContainer}>
            <DarkModeToggle />
          </Grid>
        </Grid>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List className={classes.drawer}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Browse" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Blogs" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Business" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
