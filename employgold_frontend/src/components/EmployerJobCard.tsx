import React from 'react';
import { Box } from '@mui/material';
//TODO: define response type
type EmployerJobCardProps = {
  content: any;
  index: number;
  target: any;
  setTarget: React.Dispatch<React.SetStateAction<any>>;
};

export default function EmployerJobCard({
  content,
  index,
  target,
  setTarget,
}: EmployerJobCardProps) {
  return (
    <Box
      sx={{
        borderTop: index === 0 ? '1px solid silver' : 'none',
        borderBottom: '1px solid silver',
        background:
          content?.id === target?.id ? 'rgba(247, 127, 0, 0.25)' : 'none',
        userSelect: 'none',
        cursor: 'pointer',
        p: 1,
      }}
      onClick={() => {
        setTarget(content);
      }}>
      <Box sx={{ typography: 'h6' }}>{content?.title}</Box>
      <Box sx={{ typography: 'body2', opacity: 0.5 }}>
        {content?.company} - {content?.location}
      </Box>
      <Box sx={{ typography: 'body2', mt: 2 }}>
        Post Date: {content?.date.toLocaleDateString('en-US')}
      </Box>
    </Box>
  );
}
