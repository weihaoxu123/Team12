import React from 'react';
import { Box, useTheme } from '@mui/material';
//TODO: define response type
type MatchedJobsCardProps = {
  content: any;
  index: number;
  targetId: string;
  setTargetId: React.Dispatch<React.SetStateAction<string>>;
};

export default function MatchedJobsCard({
  content,
  index,
  targetId,
  setTargetId,
}: MatchedJobsCardProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderTop: index === 0 ? '1px solid silver' : 'none',
        borderBottom: '1px solid silver',
        background:
          content?.id === targetId ? 'rgba(247, 127, 0, 0.25)' : 'none',
        userSelect: 'none',
        cursor: 'pointer',
        p: 1,
      }}
      onClick={() => {
        setTargetId(content.id);
      }}>
      <Box sx={{ typography: 'h6' }}>{content?.title}</Box>
      <Box sx={{ typography: 'body2', opacity: 0.5 }}>
        {content?.company} - {content?.location}
      </Box>
      <Box sx={{ typography: 'body2', mt: 2 }}>
        Match Score: {content?.score}
      </Box>
    </Box>
  );
}
