import React from 'react';
import { appStyles } from './styleObjects/App';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { PSQLTable } from './PSQLTable';

const useStyles = makeStyles(appStyles);

function App() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography variant='h2' className={classes.mainTitle}>
        PSQL DB to Html Format
      </Typography>
      <PSQLTable>
        
      </PSQLTable>
      <Button variant='contained'>
        Click me
      </Button>
      <Typography>
        Hi I am Ambrose
      </Typography>
    </Grid>
  );
}

export default App;
