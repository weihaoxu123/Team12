import React, { useState, useMemo, useEffect } from 'react';
import { Box } from '@mui/system';
import { Avatar, Button, IconButton } from '@mui/material';
import NavBar from 'src/components/NavBar';
import InfiniteList from 'src/components/InfiniteList';
import MatchedCandidateCard from 'src/components/MatchedCandidateCard';
import CandidatePreview from 'src/components/CandidatePreview';
import JobPreview from 'src/components/JobPreview';

export default function EmployerMatchResults() {
  const [targetJob, setTargetJob] = useState<any>();
  const [targetCandidate, setTargetCandidate] = useState<any>();
  const [candidateListOpen, setCandidateListOpen] = useState<boolean>(false);

  useEffect(() => {
    if (targetJob) {
      setTargetCandidate(targetJob?.candidates[0]);
    }
  }, [targetJob]);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
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
          <Box
            px={1}
            sx={{
              typography: 'h5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Box>Posted Jobs</Box>
            <Button
              sx={{
                typography: 'body1',
                width: 'fit-content',
                textTransform: 'none',
                p: 0,
              }}
              disabled={targetJob == null}
              onClick={() => {
                setCandidateListOpen((candidateListOpen) => !candidateListOpen);
              }}>
              {candidateListOpen ? 'Hide Candidates' : 'Show Candidates'}
            </Button>
          </Box>
          <Box>
            <InfiniteList
              query={['employerJobs']}
              target={targetJob}
              setTarget={setTargetJob}
            />
          </Box>
        </Box>

        {candidateListOpen && (
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
            <Box
              px={1}
              sx={{
                typography: 'h5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Box>Matched Candidates</Box>
            </Box>
            <Box sx={{ overflow: 'auto' }}>
              {targetJob &&
                targetJob.candidates.map(
                  (candidate: { id: string; name: string }, index: number) => (
                    <MatchedCandidateCard
                      candidate={candidate}
                      index={index}
                      targetCandidate={targetCandidate}
                      setTargetCandidate={setTargetCandidate}
                    />
                  ),
                )}
            </Box>
          </Box>
        )}

        <Box
          flex={candidateListOpen ? 2 : 3}
          sx={{ height: 'calc(100vh - 80px)', overflow: 'auto' }}>
          {candidateListOpen ? (
            <CandidatePreview candidate={targetCandidate} />
          ) : (
            <JobPreview job={targetJob} />
          )}
        </Box>
      </Box>
    </Box>
  );
}
