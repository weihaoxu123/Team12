import React, { useState } from 'react';
import { Box, StepConnector, useTheme } from '@mui/material';
import CandidateNavBar from '../component/CandidateNavbar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import OverrideStepperConnector from '../component/OverrideStepperConnector';
import OverrideStepperIcon from '../component/OverrideStepperIcon';

interface ICandidateProfileEditPageProps {}
interface IStepItem {
  label: string;
  element: JSX.Element;
}

export default function CandidateProfileEditPage(
  props: ICandidateProfileEditPageProps
) {
  const steps: IStepItem[] = [
    { label: 'Personal Infomation', element: <Box></Box> },
    { label: 'Public Profile', element: <Box></Box> },
    { label: 'Education and Experience', element: <Box></Box> },
    { label: 'Job Preferences', element: <Box></Box> },
    { label: 'Career Developement Assessments', element: <Box></Box> },
    { label: 'References', element: <Box></Box> },
  ];

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Box
          sx={{
            typography: 'h3',
            fontFamily: 'Wire One',
            fontWeight: 700,
            cursor: 'pointer',
            ml: 8,
            color: theme.palette.primary.main,
          }}
        >
          EmployGold
        </Box>
      </Box>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<OverrideStepperConnector></OverrideStepperConnector>}
        sx={{ width: '60%', margin: '0 auto', marginTop: '40px' }}
      >
        {steps.map((v: IStepItem) => {
          return (
            <Step key={v.label}>
              <StepLabel StepIconComponent={OverrideStepperIcon}>
                {v.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
