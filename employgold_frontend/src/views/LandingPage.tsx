import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useTheme } from '@mui/system';
import { Button } from '@mui/material';

export default function LandingPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      className="landingPage"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box width="100%" display="flex" alignItems="center" p={2}>
        <Box
          sx={{
            typography: 'h3',
            fontFamily: 'Wire One',
            fontWeight: 700,
            cursor: 'pointer',
          }}
          ml={8}
          color={theme.palette.primary.main}
          onClick={() => navigate('/')}
        >
          EmployGold
        </Box>
        <Box sx={{ flex: 1 }} />
        <Box sx={{ display: 'flex', gap: 2, mr: 8 }}>
          <Button
            onClick={() => navigate('/sign-up')}
            sx={{ typography: 'body1', textTransform: 'none' }}
          >
            Join Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              typography: 'body1',
              textTransform: 'none',
            }}
            onClick={() => navigate('/sign-in')}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: '100%',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img width="80%" src="images/work.svg" alt="home" />
        </Box>

        <Box
          sx={{
            height: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ typography: 'h4' }}>Find your next job here.</Box>
          <Box sx={{ typography: 'h5' }} mt={2}>
            The best in talent & employer matching
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
