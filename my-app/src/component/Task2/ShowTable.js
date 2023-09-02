import React , {useState} from 'react';
import { Grid, TextField ,Container , InputAdornment  } from '@mui/material';
import { products } from '../Data'
import TableData from './TableData';
import SearchIcon from '@mui/icons-material/Search';
import './showTableStyle.css'

export default function ShowTable() {
  const [query , setQuery] = useState("")

  const keys = ['name','category','price']
  const search=(data) => {
     return data.filter((item)=>keys.some(key =>item[key].toString().toLowerCase().includes(query))
      );
  };

  return (
    <Container>
      <Grid className='Task2_search_container'>
      <TextField
        id="input-with-icon-textfield"
        label="Search Box"
        size='small'
        fullWidth value={query} placeholder='Search..name , category , price..' onChange={e=>setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      </Grid>
  
       <TableData data={search(products)} />
    </Container>
  );
}
