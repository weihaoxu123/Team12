import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

import NavBar from 'src/components/NavBar';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <NavBar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box sx={{ typography: 'h4' }} mb={6}>
          Page Not Found
        </Box>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    </Box>
  );
}
