import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';
import { Button } from '@mui/material';

import NavBar from 'src/components/NavBar';

export default function CandidateProfile() {
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
        <Box sx={{ typography: 'h4' }}>Candidate Profile</Box>
        <Box mt={8}>
          <Button
            variant="contained"
            sx={{
              typography: 'body1',
              color: '#fff',
              width: 300,
              height: 50,
              textTransform: 'none',
            }}>
            View Profile
          </Button>
        </Box>
        <Box mt={4}>
          <Button
            onClick={() => {
              navigate('/candidate/profile/edit');
            }}
            variant="contained"
            sx={{
              typography: 'body1',
              color: '#fff',
              width: 300,
              height: 50,
              textTransform: 'none',
            }}>
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
