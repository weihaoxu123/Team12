import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';

import EmployerInfoSection from 'src/components/EmployerProfileEditComponents/EmployerInfoSection';

interface IEmployerProfileEditPageProps {}
interface IStepItem {
  label: string;
  element: JSX.Element;
}

export default function EmployerProfileEditPage(
  props: IEmployerProfileEditPageProps,
) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo | null>(null);
  const [publiProfile, setPublicProfile] = useState<IPublicProfileInfo | null>(
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
      label: 'Employer Infomation',
      element: (
        <EmployerInfoSection
          personalInfo={personalInfo}
          handleSaveClick={handleSavePersonalInfo}
        />
      ),
    },
    // { label: 'References', element: <Box></Box> },
  ];

  return (
    <Box className="editPage">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          py: 2,
        }}>
        <Box
          sx={{
            typography: 'h3',
            fontFamily: 'Wire One',
            fontWeight: 700,
            cursor: 'pointer',
            ml: 8,
            color: theme.palette.primary.main,
          }}
          onClick={() => navigate('/')}>
          EmployGold
        </Box>
      </Box>
      {steps[activeStep].element}
    </Box>
  );
}
