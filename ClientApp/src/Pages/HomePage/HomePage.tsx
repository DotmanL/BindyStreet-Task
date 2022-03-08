import React from 'react';
import { makeStyles } from '@mui/styles';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';
import { NavBar } from '../../Components/Shared/Components/Navbar';
import { PostsCard } from '../../Components/PostsCard/PostsCard';
import { BarChartComponent } from '../../Components/BarCharts/BarChartComponent';
import { PostsApi } from '../../Components/Api/PostsService';
import { Posts } from '../../Components/Api/types';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('sm')]: {},
  },
  barChartContainer: {
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    background: theme.palette.mainBackground.color,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));

const HomePage: React.FC = () => {
  const [barGraph, setBarGraph] = React.useState(false);
  const { isLoading, error, data } = useQuery<Posts[], Error>('getTeams', async () => PostsApi.findAll());

  const showBarGraps = (): void => {
    setBarGraph(!barGraph);
  };

  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Helmet>
        <title>Bindy Street Task</title>
      </Helmet>
      <NavBar
        buttonTitle={!barGraph ? 'TODOS' : 'POSTS'}
        appName="BINDY STREET TASK"
        onShowTodo={(): void => showBarGraps()}
      />

      {barGraph ? (

        <Grid className={classes.barChartContainer}>
          <BarChartComponent data={data} isLoading={isLoading} error={error} />
        </Grid>
      ) : (
        <Grid className={classes.postsContainer}>
          <PostsCard data={data} isLoading={isLoading} error={error} />
        </Grid>
      )}
    </Grid>

  );
};

export default HomePage;
