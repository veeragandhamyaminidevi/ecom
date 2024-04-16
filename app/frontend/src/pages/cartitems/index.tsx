import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'
import Data from './data'
const cart = () => {
  return (
    <Container maxWidth="lg">
    <Grid container spacing={5} style={{marginTop:"20px"}}>
        {Data.map((rs,index)=>(
            <Grid item xs={6} sm={3} key={index}>
                <Card  sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={rs.img}
        style={{ width: '100%' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {rs.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rs.des}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-between' }}>
        <Button size="small">Add to Cart</Button>
        <Button size="small">More Info</Button>
      </CardActions>
    </Card>
                </Grid>

        ))}
    </Grid>

</Container>
  )
}

export default cart