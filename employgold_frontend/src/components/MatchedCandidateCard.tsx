import React from 'react';
import { Button, Box } from '@mui/material';
//TODO: define response type
type MatchedCandidateCardProps = {
  candidate?: any;
  index?: number;
  targetCandidate: any;
  setTargetCandidate: React.Dispatch<React.SetStateAction<any>>;
};

export default function MatchedCandidateCard({
  candidate,
  index,
  targetCandidate,
  setTargetCandidate,
}: MatchedCandidateCardProps) {
  return (
    <Button
      sx={{
        width: '100%',
        margin: 0,
        padding: 0,
        textTransform: 'none',
        textAlign: 'start',
        color: 'black',
        '&:hover': {
          background: 'rgba(247, 127, 0, 0.25)',
        },
      }}>
      <Box
        sx={{
          width: '100%',
          borderTop: index === 0 ? '1px solid silver' : 'none',
          borderBottom: '1px solid silver',
          background:
            candidate?.id === targetCandidate?.id
              ? 'rgba(247, 127, 0, 0.5)'
              : 'none',
          p: 1,
        }}
        onClick={() => {
          setTargetCandidate(candidate);
        }}>
        <Box sx={{ typography: 'h6' }}>{candidate.name}</Box>
        <Box sx={{ typography: 'body2', mt: 2 }}>
          Match Score: {candidate.score}
        </Box>
      </Box>
    </Button>
  );
}
