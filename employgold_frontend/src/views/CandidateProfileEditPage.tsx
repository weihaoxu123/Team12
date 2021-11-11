import React, { useEffect, useState } from 'react';

import { Box, useTheme } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import OverrideStepperConnector from '../components/OverrideStepperConnector';
import OverrideStepperIcon from '../components/OverrideStepperIcon';
import CandidatePersonalInfoSection from 'src/components/CandidateProfileEditComponents/CandidatePersonalInfoSection';
import CandidatePublicProfileSection from 'src/components/CandidateProfileEditComponents/CandidatePublicProfileSection';
import CandidateEducationAndExperienceSection from 'src/components/CandidateProfileEditComponents/CandidateEducationAndExperienceSection';

interface ICandidateProfileEditPageProps {}
interface IStepItem {
  label: string;
  element: JSX.Element;
}

export default function CandidateProfileEditPage(
  props: ICandidateProfileEditPageProps,
) {
  const theme = useTheme();
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>();
  const [publiProfile, setPublicProfile] = useState<IPublicProfileInfo>();
  const [educationAndExperienceInfo, setEducationAndExperienceInfo] =
    useState<IEducationAndExperienceInfo>();

  const [activeStep, setActiveStep] = useState(2);
  const [skipped, setSkipped] = useState(new Set());

  useEffect(() => {
    //TODO: get personal info for user
    setPersonalInfo(undefined);
    //TODO: get public profile for user
    setPublicProfile(undefined);
    //TODO: get education and work experience info
    setEducationAndExperienceInfo(undefined);
  }, []);

  const handleBackClick = () => {
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleSavePersonalInfo = async (info: IPersonalInfo) => {
    //TODO: upload info using api
    setPersonalInfo(info);
    setActiveStep(activeStep + 1);
  };

  const handleSavePublicProfileInfo = async (info: IPublicProfileInfo) => {
    //TODO: upload info using api
    setPublicProfile(info);
    setActiveStep(activeStep + 1);
  };

  const handleSaveEducationAndExperienceInfo = async (
    info: IEducationAndExperienceInfo,
  ) => {
    //TODO: upload education and experience info using api
    console.info(info);
    setEducationAndExperienceInfo(info);
    setActiveStep(activeStep + 1);
  };

  const steps: IStepItem[] = [
    {
      label: 'Personal Infomation',
      element: (
        <CandidatePersonalInfoSection
          personalInfo={personalInfo}
          handleSaveClick={handleSavePersonalInfo}
        />
      ),
    },
    {
      label: 'Public Profile',
      element: (
        <CandidatePublicProfileSection
          publicProfile={publiProfile}
          handleSaveClick={handleSavePublicProfileInfo}
          handleBackClick={handleBackClick}
        />
      ),
    },
    {
      label: 'Education and Experience',
      element: (
        <CandidateEducationAndExperienceSection
          educationAndExperienceInfo={educationAndExperienceInfo}
          handleSaveClick={handleSaveEducationAndExperienceInfo}
          handleBackClick={handleBackClick}
        />
      ),
    },
    { label: 'Job Preferences', element: <Box></Box> },
    { label: 'Career Developement Assessments', element: <Box></Box> },
    { label: 'References', element: <Box></Box> },
  ];

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
          }}>
          EmployGold
        </Box>
      </Box>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<OverrideStepperConnector></OverrideStepperConnector>}
        sx={{ width: '60%', margin: '0 auto', marginTop: '40px' }}>
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
      {steps[activeStep].element}
    </Box>
  );
}
