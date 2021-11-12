import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import NavBar from 'src/components/NavBar';

export default function EmployerProfile() {
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
        <Box sx={{ typography: 'h4' }}>Employer Profile</Box>
        <Box mt={8}>
          <Button
            className="button"
            variant="contained"
            sx={{
              typography: 'body1',
              color: '#fff',

              textTransform: 'none',
            }}>
            Edit Company Profile
          </Button>
        </Box>
        <Box mt={2}>
          <Button
            className="button"
            variant="contained"
            sx={{
              typography: 'body1',
              color: '#fff',

              textTransform: 'none',
            }}>
            Edit Employer Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
