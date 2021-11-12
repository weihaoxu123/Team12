import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Avatar, Button } from '@mui/material';
import NavBar from 'src/components/NavBar';
import InfiniteList from 'src/components/InfiniteList';

export default function EmployerMatchResults() {
  const [targetJobIndex, setTargetJobIndex] = useState(0);

  let data: any[] = [];
  for (let i = 0; i < 1000; i++) {
    data.push(
      <Box
        onClick={() => setTargetJobIndex(i)}
        p={1}
        sx={{
          borderTop: i == 0 ? '1px solid silver' : 'none',
          borderBottom: '1px solid silver',
          background: i == targetJobIndex ? 'rgba(247, 127, 0, 0.25)' : 'none',
          userSelect: 'none',
          cursor: 'pointer',
        }}>
        <Box sx={{ typography: 'h6' }}>Candidate Name {i}</Box>
        <Box sx={{ typography: 'body1' }}>
          Match Score: {(100 - 100 * Math.random()).toFixed(0)}
        </Box>
      </Box>,
    );
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <NavBar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Box
          flex={1}
          py={2}
          sx={{
            height: 'calc(100vh - 96px)',
            overflow: 'hidden',
            borderRight: '1px solid silver',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box px={1} sx={{ typography: 'h5' }}>
            Matched Candidates
          </Box>
          <Box>
            <InfiniteList data={data} pageSize={100} />
          </Box>
        </Box>
        <Box flex={3} sx={{ height: 'calc(100vh - 80px)', overflow: 'auto' }}>
          <Box
            px={12}
            py={2}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                typography: 'h4',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}>
              <Avatar sx={{ width: 36, height: 36 }}>C</Avatar> Candidate name{' '}
              {targetJobIndex}
            </Box>
            <Box mt={1} sx={{ typography: 'body1' }}>
              Headline
            </Box>
            <Box mt={6} sx={{ typography: 'h5' }}>
              Summary
            </Box>
            <Box mt={2} sx={{ typography: 'body1' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box mt={6}>
              <Button
                variant="contained"
                sx={{
                  typography: 'body1',
                  color: '#fff',
                  width: 'fit-content',
                  textTransform: 'none',
                }}>
                Unlock Full Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
