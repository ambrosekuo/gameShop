import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import { styles } from './styleObjects/PSQLTable';
import { getData } from './helpers/psqlApihelper';

const useStyles = makeStyles(styles);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}





const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function PSQLTable() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  
useEffect( () => {
    getData().then(data => setData(data));
},[]);

console.log(data);

  return (data ? 
    (<TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">Created On</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.user_id}>
              <TableCell component="th" scope="row">
              {row.username}
              </TableCell>
              <TableCell align="right">{row['created_on']}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : <Typography>
      Loading
  </Typography> );
}