import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import NavBar from 'src/components/NavBar';
import InfiniteList from 'src/components/InfiniteList';
import JobPreview from 'src/components/JobPreview';

export default function CandidateMatchResults() {
  const [targetJob, setTargetJob] = useState<any>(null);

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
            height: 'calc(100vh - 100px)',
            overflow: 'hidden',
            borderRight: '1px solid silver',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box px={1} sx={{ typography: 'h5' }}>
            Matched Jobs
          </Box>
          <Box>
            <InfiniteList
              query={['matchedJobs']}
              target={targetJob}
              setTarget={setTargetJob}
            />
          </Box>
        </Box>
        <Box flex={3} sx={{ height: 'calc(100vh - 80px)', overflow: 'auto' }}>
          <JobPreview job={targetJob} />
        </Box>
      </Box>
    </Box>
  );
}
