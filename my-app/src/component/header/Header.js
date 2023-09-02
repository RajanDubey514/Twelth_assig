import React from 'react';
import { Grid,AppBar,Toolbar,Typography , Container } from '@mui/material';
import './headerStyle.css';
import { useNavigate } from "react-router-dom";


export default function Header() {

  //use for navigation using react-dom
  const navigate = useNavigate();

  return (
    <Container>
      <AppBar position="static" className='appBar'>
        <Toolbar variant="dense" className='appBar_container'>
          <Grid className='appBar_name_container'>
          <Typography variant="h6" className='appBar_name' onClick={() => navigate("/task1")} >
             Twelfth Man Times 
          </Typography>
          </Grid>
          <Grid className='appBar_comp_container'>
          <Typography variant="p" className='appBar_comp' onClick={() => navigate("/task1")} >
            Task 1
          </Typography>
          </Grid>
          <Grid className='appBar_comp_container'>
          <Typography variant="p" className='appBar_comp' onClick={() => navigate("/task2")} >
            Task 2
          </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}