import { useState, useEffect } from 'react';
import { CircularProgress, Button } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import CandidateProfilePreview from 'src/components/CandidateProfilePreview';

// TODO: define job type later

export default function CandidatePreview(props: any) {
  const { candidate } = props;
  const theme = useTheme();
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo | null>(null);
  const [publicProfile, setPublicProfile] = useState<
    IPublicProfileInfo | null | any
  >(null);
  const [educationAndExperienceInfo, setEducationAndExperienceInfo] =
    useState<IEducationAndExperienceInfo | null>(null);
  const [jobPreferenceInfo, setJobPreferenceInfo] =
    useState<IJobPreferenceInfo | null>(null);

  const [careerDevAssessmentInfo, setCareerDevAssessmentInfo] =
    useState<ICareerDevAssessmentsInfo | null>(null);

  useEffect(() => {
    //TODO: get personal info for user
    setPersonalInfo({
      legalFirstName: 'John',
      legalLastName: 'Joe',
      email: 'john.doe@usc.edu',
      alternativeEmail: 'john.doe@usc.edu',
      addressLine1: '123 Jefferson St.',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      zipCode: '90007',
      mobileNumber: '1234567890',
      nameTitle: 'Mr.',
      pronouns: 'He',
    } as IPersonalInfo);
    //TODO: get public profile for user
    const pp = JSON.parse(localStorage.getItem('publicProfile') || 'null');
    setPublicProfile(pp);
    //TODO: get education and work experience info
    const eae = JSON.parse(
      localStorage.getItem('educationAndExperience') || 'null',
    );
    setEducationAndExperienceInfo({
      educationInfos: [
        {
          schoolName: 'University of Southern California',
          degree: 'Master',
          city: 'Los Angeles',
          state: 'CA',
          country: 'United States',
          major: 'Computer Science',
          startDate: '1598252400000',
          currentlyEnrolled: true,
          endDate: '1636704000000',
        },
      ],
      workExperienceInfos: [
        {
          companyName: 'Software Company',
          positionName: 'Software Engineer',
          city: 'Los Angeles',
          state: 'CA',
          country: 'United States',
          startDate: '1636704000000',
          currentlyEmployed: true,
          jobDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          endDate: '1636704000000',
          type: 'Intern',
        },
      ],
    } as IEducationAndExperienceInfo);
    //TODO: get job preference info
    const jp = JSON.parse(localStorage.getItem('jobPreference') || 'null');
    setJobPreferenceInfo(jp);
    //TODO: get career dev assessment info
    const cda = JSON.parse(
      localStorage.getItem('careerDevAssessment') || 'null',
    );
    setCareerDevAssessmentInfo(cda);
  }, []);

  useEffect(() => {
    setUnlocked(false);
  }, [candidate]);

  return candidate ? (
    <Box
      px={4}
      py={2}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box sx={{ typography: 'h4' }}>{candidate.name}</Box>
      <Box
        py={2}
        sx={{
          flex: 1,
          height: '100%',
        }}>
        <Box sx={{ typography: 'h6' }}>Headline</Box>
        <Box mt={1} sx={{ typography: 'body1', opacity: 0.5 }}>
          {publicProfile && publicProfile?.headline}
        </Box>
        <Box sx={{ typography: 'h6', mt: 2 }}>Summary</Box>
        <Box mt={1} sx={{ typography: 'body1', opacity: 0.5 }}>
          {publicProfile && publicProfile?.headlineSummary}
        </Box>
        <Box mt={2}>
          {!unlocked && (
            <Button
              onClick={() => {
                setUnlocked(true);
              }}
              variant="contained"
              sx={{
                typography: 'body1',
                color: '#fff',
                width: 'fit-content',
                textTransform: 'none',
              }}>
              Unlock Full Profile
            </Button>
          )}
          {unlocked && (
            <CandidateProfilePreview
              personalInfo={personalInfo}
              publicProfile={publicProfile}
              educationAndExperienceInfo={educationAndExperienceInfo}
              jobPreferenceInfo={jobPreferenceInfo}
              careerDevAssessmentInfo={careerDevAssessmentInfo}
            />
          )}
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CircularProgress />
    </Box>
  );
}
