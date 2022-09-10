import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Headers = () => {
  return (
    <Container component="header" maxWidth="lg" sx={{ mt: 4 }}>
      <Typography component="h1" variant="h2" color="primary" gutterBottom>
        Analysis Chart
      </Typography>
      <Typography component="h2" variant="h4" color="primary">
        Number of lesson
      </Typography>
    </Container>
  );
};
export default Headers;
