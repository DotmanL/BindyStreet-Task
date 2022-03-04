import React from 'react';
import { makeStyles } from '@mui/styles';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import { NavBar } from '../../Components/Shared/Components/Navbar';
import { PostsCard } from '../../Components/PostsCard/PostsCard';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.mainBackground.color,
    height: 'auto',
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('sm')]: {},
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Helmet>
        <title>Bindy Street Task</title>
      </Helmet>
      <NavBar appName="BPosts" />
      <Grid className={classes.postsContainer}>
        <PostsCard />
      </Grid>
    </Grid>
  );
};

export default HomePage;
