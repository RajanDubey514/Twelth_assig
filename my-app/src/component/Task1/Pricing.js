import React from 'react'
import { Grid,Typography } from '@mui/material'
import './pricing.css';

function Pricing() {
  return (
   <Grid container className="pricing_comntainer">
    <Grid item lg={12} md={12} sm={12} xs={12} className="pricing_head_container">
    <Typography variant="p" className="pricing_head">Pricing</Typography>
    </Grid> 
    <Grid item lg={12} md={12} sm={12} xs={12} className="pricing_header_container">
    <Typography variant="p" className="pricing_header">Simple, transparent pricing</Typography>
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12} className="pricing_para_container">
    <Typography variant="p" className="pricing_para">We believe Untitled should be accessible to all companies, no matter the size.</Typography>
    </Grid>
   </Grid>
  )
}

export default Pricing
