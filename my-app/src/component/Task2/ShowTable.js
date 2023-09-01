import React , {useState} from 'react';
import { Grid, TextField } from '@mui/material';
import { products } from '../Data'
import TableData from './TableData';

export default function ShowTable() {
  const [query , setQuery] = useState("")

  const keys = ['name','category' , 'price']
  const search=(data) => {
     return data.filter((item)=>keys.some(key =>item[key].toString().toLowerCase().includes(query))
      );
  };

  return (
    <Grid>
      <Grid>
        <TextField value={query} placeholder='Search..' onChange={e=>setQuery(e.target.value)}/>
      </Grid>
       <TableData data={search(products)} />
    </Grid>
  );
}
