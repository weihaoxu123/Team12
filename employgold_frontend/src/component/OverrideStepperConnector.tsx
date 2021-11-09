import {
  StepConnector,
  stepConnectorClasses,
  styled,
  useTheme,
} from '@mui/material';
import React from 'react';

export default function OverrideStepperConnector() {
  const OverrideStepConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 30px)',
      right: 'calc(50% + 30px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
      borderTopWidth: 8,
      borderRadius: 5,
    },
  }));
  return <OverrideStepConnector></OverrideStepConnector>;
}
