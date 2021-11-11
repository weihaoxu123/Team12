import { useTheme } from '@mui/material';
import { StepIconProps } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const OverrideStepperIcon: React.FC<StepIconProps> = (props) => {
  const theme = useTheme();
  const { active, completed } = props;

  if (active || completed) {
    return (
      <Box
        sx={{
          height: 25,
          width: 25,
          borderRadius: '50%',
          background: theme.palette.primary.main,
        }}
      ></Box>
    );
  }

  return (
    <Box
      sx={{
        height: 25,
        width: 25,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.main}`,
      }}
    ></Box>
  );
};

export default OverrideStepperIcon;
