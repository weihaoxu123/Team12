import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, useTheme } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import OverrideStepperConnector from '../components/OverrideStepperConnector';
import OverrideStepperIcon from '../components/OverrideStepperIcon';
import CandidatePersonalInfoSection from 'src/components/CandidateProfileEditComponents/CandidatePersonalInfoSection';
import CandidatePublicProfileSection from 'src/components/CandidateProfileEditComponents/CandidatePublicProfileSection';
import CandidateEducationAndExperienceSection from 'src/components/CandidateProfileEditComponents/CandidateEducationAndExperienceSection';
import CandidateJobPreferenceSection from 'src/components/CandidateProfileEditComponents/CandidateJobPreferencesSection';
import CandidateAssessmentSection from 'src/components/CandidateProfileEditComponents/CandidateAssessmentSection';

interface ICandidateProfileEditPageProps {}
interface IStepItem {
  label: string;
  element: JSX.Element;
}

export default function CandidateProfileEditPage(
  props: ICandidateProfileEditPageProps,
) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo | null>(null);
  const [publicProfile, setPublicProfile] = useState<IPublicProfileInfo | null>(
    null,
  );
  const [educationAndExperienceInfo, setEducationAndExperienceInfo] =
    useState<IEducationAndExperienceInfo | null>(null);
  const [jobPreferenceInfo, setJobPreferenceInfo] =
    useState<IJobPreferenceInfo | null>(null);

  const [careerDevAssessmentInfo, setCareerDevAssessmentInfo] =
    useState<ICareerDevAssessmentsInfo | null>(null);

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  useEffect(() => {
    //TODO: get personal info for user
    const pi = JSON.parse(localStorage.getItem('personalInfo') || 'null');
    setPersonalInfo({ ...pi });
    //TODO: get public profile for user
    const pp = JSON.parse(localStorage.getItem('publicProfile') || 'null');
    setPublicProfile(pp);
    //TODO: get education and work experience info
    const eae = JSON.parse(
      localStorage.getItem('educationAndExperience') || 'null',
    );
    setEducationAndExperienceInfo(eae);
    //TODO: get job preference info
    const jp = JSON.parse(localStorage.getItem('jobPreference') || 'null');
    setJobPreferenceInfo(jp);
    //TODO: get career dev assessment info
    const cda = JSON.parse(
      localStorage.getItem('careerDevAssessment') || 'null',
    );
    setCareerDevAssessmentInfo(cda);
  }, []);

  const handleBackClick = () => {
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleSavePersonalInfo = async (info: IPersonalInfo) => {
    //TODO: upload info using api
    setPersonalInfo(info);
    localStorage.setItem('personalInfo', JSON.stringify(info));
    setActiveStep(activeStep + 1);
  };

  const handleSavePublicProfileInfo = async (info: IPublicProfileInfo) => {
    //TODO: upload info using api
    setPublicProfile(info);
    localStorage.setItem('publicProfile', JSON.stringify(info));
    setActiveStep(activeStep + 1);
  };

  const handleSaveEducationAndExperienceInfo = async (
    info: IEducationAndExperienceInfo,
  ) => {
    //TODO: upload education and experience info using api
    setEducationAndExperienceInfo(info);
    localStorage.setItem('educationAndExperience', JSON.stringify(info));
    setActiveStep(activeStep + 1);
  };

  const handleSaveJobPreferenceInfo = async (info: IJobPreferenceInfo) => {
    //TODO: upload info using api
    setJobPreferenceInfo(info);
    localStorage.setItem('jobPreference', JSON.stringify(info));
    setActiveStep(activeStep + 1);
  };

  const handleSaveCareerDevAssessmentInfo = async (
    info: ICareerDevAssessmentsInfo,
  ) => {
    localStorage.setItem('careerDevAssessment', JSON.stringify(info));
    setCareerDevAssessmentInfo(info);
    navigate('/candidate/profile');
  };

  const steps: IStepItem[] = [
    {
      label: 'Personal Information',
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
          publicProfile={publicProfile}
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
    {
      label: 'Job Preferences',
      element: (
        <CandidateJobPreferenceSection
          jobPreferenceInfo={jobPreferenceInfo}
          handleSaveClick={handleSaveJobPreferenceInfo}
          handleBackClick={handleBackClick}
        />
      ),
    },
    {
      label: 'Career Development Assessments',
      element: (
        <CandidateAssessmentSection
          careerDevAssessmentInfo={careerDevAssessmentInfo}
          handleBackClick={handleBackClick}
          handleSaveClick={handleSaveCareerDevAssessmentInfo}
        />
      ),
    },
    // { label: 'References', element: <Box></Box> },
  ];

  return (
    <Box className="editPage">
      <Box
        sx={{ display: 'flex', alignItems: 'center', py: 2 }}
        onClick={() => {
          navigate('/');
        }}>
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
        connector={<OverrideStepperConnector />}
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
