import React from 'react';
import { Grid, TableRow, TableHead, TableContainer, TableCell, TableBody, 
  Table } from '@mui/material';
import './showTableStyle.css'


export default function TableData({data}) {
  return (
    <Grid>
      <TableContainer>
        <Table className='TableBox'>
          <TableHead className='TableHead_Box'>
            <TableRow className='TableHeading'>
              <TableCell className='TableHeadingText' align="center">Name</TableCell>
              <TableCell className='TableHeadingText' align="center">Category</TableCell>
              <TableCell className='TableHeadingText' align="center">Price</TableCell>
              <TableCell className='TableHeadingText' align="center">Available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.available}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
