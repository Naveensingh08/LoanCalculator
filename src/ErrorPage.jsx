import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function ErrorPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      px={2}
      width={'100vw'}
    >
      <Typography variant="h4" gutterBottom align="center">
        Something went wrong in the application.
      </Typography>
      <Typography variant="body1" mb={3} align="center">
        
      </Typography>
      <Button
        variant="contained"
        
        component={RouterLink}
        to="/"
        style={{backgroundColor:'white',color:'blue',border:'1px solid blue'}}
      >
        Go Home
      </Button>
    </Box>
  );
}

export default ErrorPage;
