import React from 'react';
import { Box, Button } from '@mui/material';
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
            content?.id === target?.id ? 'rgba(247, 127, 0, 0.5)' : 'none',
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
    </Button>
  );
}
