import React, { useState } from 'react';
import { Box, useTheme } from '@mui/system';
import { Button, Checkbox, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userId, setUserId] = useState<String>('0');
  const [isEmployer, setIsEmployer] = useState(false);

  const nextStepHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    navigate(`/candidate/profile/edit`);
  };

  return (
    <Box
      className="landingPage"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }} p={2}>
        <Box
          sx={{
            typography: 'h3',
            fontFamily: 'Wire One',
            fontWeight: 700,
            cursor: 'pointer',
          }}
          ml={8}
          color={theme.palette.primary.main}
          onClick={() => navigate('/')}>
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
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          gap={2}
          mt={-12}
          component="form">
          <Box sx={{ typography: 'h5', marginBottom: 4 }}>Sign Up</Box>
          <TextField
            className="textBox"
            required
            id="outlined-required"
            label="Email"
          />
          <TextField
            className="textBox"
            required
            id="outlined-required"
            label="Password"
          />
          <TextField
            className="textBox"
            required
            id="outlined-required"
            label="Confirm Password"
          />
          <Box
            className="checkboxContainer"
            display="flex"
            sx={{
              typography: 'body1',
            }}>
            <Box mr={1}>
              <Checkbox
                sx={{ padding: 0, margin: 0 }}
                size="small"
                value={isEmployer}
                onClick={() => setIsEmployer((isEmployer) => !isEmployer)}
              />
            </Box>
            <Box display="flex" alignItems="center">
              I am an employer.
            </Box>
          </Box>
          <Box
            className="checkboxContainer"
            display="flex"
            sx={{
              typography: 'body1',
            }}>
            <Box mr={1}>
              <Checkbox sx={{ padding: 0, margin: 0 }} size="small" />
            </Box>
            <Box display="flex" alignItems="center">
              I agree to
              <Button
                sx={{
                  typography: 'body1',
                  textTransform: 'none',
                  paddingTop: 0,
                  paddingBottom: 0,
                }}>
                Terms
              </Button>
              and
              <Button
                sx={{
                  typography: 'body1',
                  textTransform: 'none',
                  paddingTop: 0,
                  paddingBottom: 0,
                }}>
                Conditions
              </Button>
              .
            </Box>
          </Box>
          <Button
            variant="contained"
            className="button"
            sx={{
              typography: 'body1',
              color: '#fff',
              textTransform: 'none',
              marginTop: 2,
            }}
            onClick={nextStepHandler}>
            Next Step
          </Button>
          <Box display="flex" alignItems="center" sx={{ typography: 'body2' }}>
            Already on EmployGold?
            <Button
              sx={{
                typography: 'body2',
                textTransform: 'none',
                padding: 0,
                marginLeft: 2,
              }}
              onClick={() => navigate('/sign-in')}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
