import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';

import NavBar from 'src/components/NavBar';
import CandidateProfilePreview from 'src/components/CandidateProfilePreview';

export default function CandidateProfileViewPage() {
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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <NavBar />
      <Box
        sx={{
          py: 4,
          width: '80%',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}>
        <CandidateProfilePreview
          personalInfo={personalInfo}
          publiProfile={publiProfile}
          educationAndExperienceInfo={educationAndExperienceInfo}
          jobPreferenceInfo={jobPreferenceInfo}
          careerDevAssessmentInfo={careerDevAssessmentInfo}
        />
      </Box>
    </Box>
  );
}
