import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import NavBar from 'src/components/NavBar';
import InfiniteList from 'src/components/InfiniteList';

export default function CandidateMatchResults() {
  const [targetJobIndex, setTargetJobIndex] = useState(0);

  let data: any[] = [];
  for (let i = 0; i < 1000; i++) {
    data.push(
      <Box
        onClick={() => setTargetJobIndex(i)}
        p={1}
        sx={{
          borderTop: i === 0 ? '1px solid silver' : 'none',
          borderBottom: '1px solid silver',
          background: i === targetJobIndex ? 'rgba(247, 127, 0, 0.25)' : 'none',
          userSelect: 'none',
          cursor: 'pointer',
        }}>
        <Box sx={{ typography: 'h6' }}>Company name {i}</Box>
        <Box sx={{ typography: 'body1' }}>Job title</Box>
        <Box sx={{ typography: 'body1' }}>Job location</Box>
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
            Matched Jobs
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
            <Box sx={{ typography: 'h4' }}>Job title {targetJobIndex}</Box>
            <Box sx={{ typography: 'body1' }}>Company - Location</Box>
            <Box sx={{ typography: 'body1' }}>Industry</Box>
            <Box sx={{ typography: 'body1' }}>Post date</Box>
            <Box sx={{ typography: 'body1' }}>Job Type</Box>
            <Box mt={6}>
              <Button
                variant="contained"
                sx={{
                  typography: 'body1',
                  color: '#fff',
                  width: 'fit-content',
                  textTransform: 'none',
                }}
                onClick={() => {
                  window.open(
                    'https://careers.google.com/jobs/results/81428638450229958-manager-executive-development/?category=DATA_CENTER_OPERATIONS&category=DEVELOPER_RELATIONS&category=HARDWARE_ENGINEERING&category=INFORMATION_TECHNOLOGY&category=MANUFACTURING_SUPPLY_CHAIN&category=NETWORK_ENGINEERING&category=PRODUCT_MANAGEMENT&category=PROGRAM_MANAGEMENT&category=SOFTWARE_ENGINEERING&category=TECHNICAL_INFRASTRUCTURE_ENGINEERING&category=TECHNICAL_SOLUTIONS&category=TECHNICAL_WRITING&company=Google&company=YouTube&q=',
                    '_blank',
                  );
                }}>
                Apply Now
              </Button>
            </Box>

            <Box mt={6} sx={{ typography: 'body1' }}>
              <Box sx={{ typography: 'h5' }}>Description</Box>
              <Box mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Box>
            </Box>

            <Box mt={6} sx={{ typography: 'body1' }}>
              <Box sx={{ typography: 'h5' }}>Responsibilities</Box>
              <Box mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Box>
            </Box>

            <Box mt={6} sx={{ typography: 'body1' }}>
              <Box sx={{ typography: 'h5' }}>Qualifications</Box>
              <Box mt={2}>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Box>
              <Box mt={2}>
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore
              </Box>
              <Box mt={2}>
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Box>
              <Box mt={2}>
                4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt u
              </Box>
              <Box mt={2}>
                5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut laborna aliqua.
              </Box>
              <Box mt={2}>
                6. Lorem ipsum dolor sit amectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
