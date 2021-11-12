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
            onClick={() => {
              navigate('/candidate/profile/preview');
            }}
            className="button"
            variant="contained"
            sx={{
              typography: 'body1',
              color: '#fff',
              textTransform: 'none',
            }}>
            View Candidate Profile
          </Button>
        </Box>
        <Box mt={2}>
          <Button
            onClick={() => {
              navigate('/candidate/profile/edit');
            }}
            className="button"
            variant="contained"
            sx={{
              typography: 'body1',
              color: '#fff',
              textTransform: 'none',
            }}>
            Edit Candidate Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
