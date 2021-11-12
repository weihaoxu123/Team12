import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/system';

import { UserContext } from 'src/contexts/UserContext';

export default function NavBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const userContext = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const userGroup = userContext != null ? userContext.userGroup : '';
  const userGroup = window.localStorage.getItem('userGroup');

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
          <Box sx={{ display: 'flex', gap: 1 }}>
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
            {userGroup === 'employer' && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 'fit-content',
                  padding: '0px 4px',
                  marginTop: 1,
                  typography: 'caption',
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  color: theme.palette.primary.main,
                }}>
                Employer
              </Box>
            )}
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
            {userGroup === 'employer' && (
              <Button
                sx={{
                  typography: 'body1',
                  color: '#fff',
                  textTransform: 'none',
                }}
                onClick={() => navigate(`/${userGroup}/jobs`)}>
                Jobs
              </Button>
            )}
            <Button
              sx={{
                typography: 'body1',
                color: '#fff',
                textTransform: 'none',
              }}
              onClick={() => navigate(`/${userGroup}/profile`)}>
              {userGroup === 'candidate' ? 'Profile' : 'Company'}
            </Button>
            <Box>
              <IconButton onClick={handleClick} size="medium">
                <Avatar sx={{ width: 36, height: 36 }}>M</Avatar>
              </IconButton>
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>
              <MenuItem onClick={() => navigate('/')}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    );
  };

  return <AppBar position="static">{displayDesktop()}</AppBar>;
}
