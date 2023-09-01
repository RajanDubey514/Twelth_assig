import React from 'react';
import { Grid, TableRow, TableHead, TableContainer, TableCell, TableBody, 
  Table } from '@mui/material';

export default function TableData({data}) {
  return (
    <Grid>
      <TableContainer>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">category</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.available}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
