import React, { useState } from 'react';
import { Box, useTheme } from '@mui/system';
import { Button, Checkbox, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  // const [userId, setUserId] = useState<string>('0');
  const [isEmployer, setIsEmployer] = useState<boolean>(false);
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const nextStepHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords should be the same.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    const formEle = e.currentTarget.parentElement as HTMLFormElement;
    if (formEle.reportValidity()) {
      // const user = await signIn();
      const userInfo = {
        token: '2easdjin87q1',
        userGroup: email,
      };
      window.localStorage.setItem('token', userInfo.token);
      window.localStorage.setItem('userGroup', email);
      // TODO: use API response
      // navigate(`/${userInfo.userGroup}/matches`);
      (email === 'candidate@email.com' || email === 'employer@email.com') &&
        navigate(`/${isEmployer ? 'employer' : 'candidate'}/profile/edit`);
    }
  };

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setPassword(e.currentTarget.value);
  };

  const handleConfirmPasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (e) => {
      setConfirmPassword(e.currentTarget.value);
    };

  const handleAgreeTerms: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setAgreeTerms((agreeTerms) => !agreeTerms);
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
        component={'form'}
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
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            className="textBox"
            required
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(errorMessage)}
            helperText={errorMessage}
          />
          <TextField
            className="textBox"
            required
            type="password"
            value={confirmPassword}
            id="outlined-required"
            label="Confirm Password"
            onChange={handleConfirmPasswordChange}
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
              <Checkbox
                sx={{ padding: 0, margin: 0 }}
                size="small"
                value={agreeTerms}
                onClick={handleAgreeTerms}
              />
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
            disabled={!agreeTerms}
            sx={{
              typography: 'body1',
              color: '#fff',
              textTransform: 'none',
              marginTop: 2,
            }}
            type={'submit'}
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
