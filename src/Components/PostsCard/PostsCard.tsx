import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useQuery } from 'react-query';
import { PostsApi } from '../Api/PostsService';
import { Posts } from '../Api/types';

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.mainBackground.color,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  cardContainer: {
    // background: 'orange',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(8),
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  card: {
    margin: theme.spacing(2),
    color: theme.palette.text.primary,
    width: '45%',
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

export const PostsCard: React.FC = () => {
  const classes = useStyles();
  const { isLoading, error, data } = useQuery<Posts, Error>('getTeams', async () => PostsApi.findAll());

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>{(error as Error)?.message}</p>;
  }

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.cardContainer}>
        {data && data.map((posts) => (
          <Card key={posts.id} className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                {posts.id}
              </Typography>
              <Typography variant="h5">
                {posts.title}
              </Typography>
              <Typography variant="h6">
                {posts.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
