import React, { ReactNode } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import BlankLayout from 'src/@core/layouts/BlankLayout';

const card = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
  
        padding: '20px',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src="/images/pages/hii.svg" alt="No Items"   style={{ width: '200px', height: 'auto'  }} />
        <Typography variant="h5" sx={{ mt: 2 }}>No Items are added</Typography>
      </Box>
      <Button variant="contained" color="primary" sx={{ backgroundColor: '#063970' }}>Add Items</Button>
    </Container>
  );
};

card.guestGuard = true;
card.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default card;

