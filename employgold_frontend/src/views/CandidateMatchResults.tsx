import React from 'react';
import { Box } from '@mui/system';
import NavBar from 'src/components/NavBar';

export default function CandidateMatchResults() {
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
        Candidate Match Results
      </Box>
    </Box>
  );
}
