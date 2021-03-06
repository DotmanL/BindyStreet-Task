import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { Posts } from '../Api/types';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  cardContainer: {
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
    borderRadius: '10px',
    background: theme.palette.background.default,
    width: '45%',
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
      width: '95vw',
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  body: {
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTo: theme.spacing(1),
    },
  },
}));

interface PostsCardProps {
  data: Posts[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const PostsCard: React.FC<PostsCardProps> = ({ data, isLoading, error }) => {
  const classes = useStyles();

  if (error) {
    return <p>{(error as Error)?.message}</p>;
  }
  return (
    <Grid container className={classes.root}>
      {isLoading ? (
        <Grid className={classes.cardContainer}>
          {data && data.map((posts: Posts) => (
            <Card key={posts.id} className={classes.card}>
              <CardContent>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
                <Skeleton animation="wave" />
              </CardContent>
            </Card>
          ))}
        </Grid>
      ) : (

        <Grid className={classes.cardContainer}>
          {data && data.map((posts: Posts) => (
            <Card key={posts.id} className={classes.card}>
              <CardContent>
                <Typography variant="h5">
                  {posts.id}
                </Typography>
                <Typography variant="h5" className={classes.title}>
                  {posts.title}
                </Typography>
                <Typography className={classes.body} variant="h6">
                  {posts.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      )}
    </Grid>
  );
};
