import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Grid, Avatar, Button } from '@mui/material';

import { UserContext } from 'src/contexts/UserContext';

export default function NavBar() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const userGroup = userContext != null ? userContext.userGroup : '';

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          mx={8}>
          <Box
            sx={{
              typography: 'h3',
              fontFamily: 'Wire One',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            color="white"
            onClick={() => navigate(`/${userGroup}/matches`)}>
            EmployGold
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            gap={2}>
            <Button
              sx={{
                typography: 'body1',
                color: '#fff',
                textTransform: 'none',
              }}
              onClick={() => navigate(`/${userGroup}/matches`)}>
              Matches
            </Button>
            <Button
              sx={{
                typography: 'body1',
                color: '#fff',
                textTransform: 'none',
              }}
              onClick={() => navigate(`/${userGroup}/profile`)}>
              Profile
            </Button>
            <Box>
              <Avatar>H</Avatar>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    );
  };

  return <AppBar position="static">{displayDesktop()}</AppBar>;
}
