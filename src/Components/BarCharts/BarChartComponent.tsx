import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {
  ResponsiveContainer, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';
import { Posts } from '../Api/types';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
  header: {
    fontFamily: 'Montserrat Alternates',
    marginTop: theme.spacing(2),
    color: theme.palette.common.white,
    background: theme.palette.mainBackground.color,
    border: '2px solid',
    borderColor: theme.palette.text.primary,
    padding: theme.spacing(1),
    borderRadius: '10px',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.spacing(3.6),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2),
    },
  },
  barChart: {
    display: 'flex',
    flexDirection: 'row',
    justifySelf: 'center',
    marginTop: theme.spacing(9),
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(0.5),
    },
  },
  bars: {
    fill: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
    },
  },
}));

interface BarChartComponentProps {
  data: Posts[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, isLoading, error }) => {
  const classes = useStyles();

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>{(error as Error)?.message}</p>;
  }

  // eslint-disable-next-line max-len
  const newData = data && data.map((posts) => ({ name: `Title ${posts.id}`, id: posts.id, todoTitleLength: posts.title.length }));

  return (
    <Grid container className={classes.root}>
      <Grid>
        <Typography variant="h3" className={classes.header}>
          Todos Title Length Bar Chart
        </Typography>
      </Grid>
      <ResponsiveContainer height={400} width="98%">
        <BarChart
          data={newData}
          width={500}
          className={classes.barChart}
          margin={{
            top: 5,
            right: 10,
            left: -25,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="todoTitleLength" className={classes.bars} />

        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};
