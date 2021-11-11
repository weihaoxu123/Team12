import React, { useState } from 'react';
import { Box, useTheme } from '@mui/system';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', p: 2 }}>
        <Box
          sx={{
            typography: 'h3',
            fontFamily: 'Wire One',
            fontWeight: 700,
            cursor: 'pointer',
            ml: 8,
            color: theme.palette.primary.main,
          }}
          onClick={() => navigate('/')}
        >
          EmployGold
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mt: -26,
          }}
          component="form"
        >
          <Box sx={{ typography: 'h5', marginBottom: 4 }}>Sign In</Box>
          <TextField
            className="textBox"
            required
            id="outlined-required"
            label="Email"
            type="email"
          />
          <TextField
            className="textBox"
            required
            id="outlined-required"
            label="Password"
            type="password"
          />
          <Button
            variant="contained"
            className="button"
            sx={{
              typography: 'body1',
              color: '#fff',
              textTransform: 'none',
              marginTop: 2,
            }}
            type="submit"
          >
            Sign In
          </Button>
          <Box display="flex" alignItems="center" sx={{ typography: 'body2' }}>
            Not on EmployGold?
            <Button
              sx={{
                typography: 'body2',
                textTransform: 'none',
                padding: 0,
                marginLeft: 2,
              }}
              onClick={() => navigate('/sign-up')}
            >
              Join now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
