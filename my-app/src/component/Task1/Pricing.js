import React from 'react'
import { Grid, Typography, Card, CardActions, CardContent, Button , Container } from '@mui/material'
import  objArr  from '../Data'
import './pricing.css';

function Pricing() {
    return (
        <Container className="pricing_comntainer">
            <Grid item lg={12} md={12} sm={12} xs={12} className="pricing_head_container">
                <Typography variant="p" className="pricing_head">Pricing</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className="pricing_header_container">
                <Typography variant="p" className="pricing_header">Simple, transparent pricing</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className="pricing_para_container">
                <Typography variant="p" className="pricing_para">We believe Untitled should be accessible to all companies, no matter the size.</Typography>
            </Grid>
            <Grid container>
            { objArr.map((data , key) => {
                    return (
                        <Grid item lg={4} md={4} sm={6} xs={12} key={key}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Grid>{data.plan_rs}</Grid>
                                    <Grid>{data.plan}</Grid>
                                    <Grid>{data.billed}</Grid>
                                    <ul>
                                    <li>{data.feature_list_1}</li>
                                    <li>{data.feature_list_2}</li>
                                    <li>{data.feature_list_3}</li>
                                    <li>{data.feature_list_4}</li>
                                    <li>{data.feature_list_5}</li>
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Get started</Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                })
            }
            </Grid>
        </Container>
    )
}

export default Pricing
