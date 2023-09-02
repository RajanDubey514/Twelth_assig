import React , {useState} from 'react';
import { Grid, TextField ,Container , InputAdornment  } from '@mui/material';
import { products } from '../Data'
import TableData from './TableData';
import SearchIcon from '@mui/icons-material/Search';
import './showTableStyle.css'

export default function ShowTable() {
  // useState for storing data
  const [query , setQuery] = useState("")
 
  // create multiple searching key
  const keys = ['name','category','price']

  // serching function
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

      {/* table component call */}
       <TableData data={search(products)} />
    </Container>
  );
}
