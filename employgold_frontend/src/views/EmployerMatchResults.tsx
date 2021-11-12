import React, { useState, useMemo, useEffect } from 'react';
import { Box } from '@mui/system';
import { Avatar, Button } from '@mui/material';
import NavBar from 'src/components/NavBar';
import InfiniteList from 'src/components/InfiniteList';
import CandidateProfilePreview from 'src/components/CandidateProfilePreview';

let randomNums: any[] = [];
for (let i = 0; i < 1000; i++) {
  randomNums.push((100 - 100 * Math.random()).toFixed(0));
}

export default function EmployerMatchResults() {
  const [targetJobIndex, setTargetJobIndex] = useState(0);

  const [unlocked, setUnlocked] = useState<boolean>(false);
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
    setPersonalInfo({
      legalFirstName: 'Yingjie',
      legalLastName: 'Shen',
      email: 'yingjies@usc.edu',
      alternativeEmail: 'yingjies@usc.edu',
      addressLine1: '123 Jefferson St',
      city: 'Irvine',
      state: 'CA',
      country: 'United States',
      zipCode: '90007',
      mobileNumber: '6083207375',
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
          endDate: '1636617600000',
        },
        {
          schoolName: 'University of Wisconsin - Madison',
          degree: 'Bachelor',
          city: 'Madison',
          state: 'WI',
          country: 'United States',
          major: 'Computer Science',
          startDate: '1516694400000',
          currentlyEnrolled: false,
          endDate: '1589871600000',
        },
      ],
      workExperienceInfos: [
        {
          companyName: 'Software Company',
          positionName: 'Software Engineer',
          city: 'Los Angeles',
          state: 'CA',
          country: 'United States',
          startDate: '1636617600000',
          currentlyEmployed: true,
          jobDescription: 'Build software',
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

  let data: any[] = [];
  for (let i = 0; i < 1000; i++) {
    data.push(
      <Box
        onClick={() => {
          setTargetJobIndex(i);
          setUnlocked(false);
        }}
        p={1}
        sx={{
          borderTop: i == 0 ? '1px solid silver' : 'none',
          borderBottom: '1px solid silver',
          background: i == targetJobIndex ? 'rgba(247, 127, 0, 0.25)' : 'none',
          userSelect: 'none',
          cursor: 'pointer',
        }}>
        <Box sx={{ typography: 'h6' }}>Candidate Name {i}</Box>
        <Box sx={{ typography: 'body1' }}>
          {`Match Score: ${randomNums[i]}`}
        </Box>
      </Box>,
    );
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <NavBar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Box
          flex={1}
          py={2}
          sx={{
            height: 'calc(100vh - 96px)',
            overflow: 'hidden',
            borderRight: '1px solid silver',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box px={1} sx={{ typography: 'h5' }}>
            Matched Candidates
          </Box>
          <Box>
            <InfiniteList data={data} pageSize={100} />
          </Box>
        </Box>
        <Box flex={3} sx={{ height: 'calc(100vh - 80px)', overflow: 'auto' }}>
          <Box
            px={12}
            py={2}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                typography: 'h4',
                display: 'flex',
                alignItems: 'center',
              }}>
              Candidate name {targetJobIndex}
            </Box>
            <Box mt={1} sx={{ typography: 'body1' }}>
              Headline
            </Box>
            <Box mt={6} sx={{ typography: 'h5' }}>
              Summary
            </Box>
            <Box mt={2} sx={{ typography: 'body1' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box mt={6}>
              <Button
                disabled={unlocked}
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
            </Box>
            {unlocked && (
              <CandidateProfilePreview
                personalInfo={personalInfo}
                publiProfile={publiProfile}
                educationAndExperienceInfo={educationAndExperienceInfo}
                jobPreferenceInfo={jobPreferenceInfo}
                careerDevAssessmentInfo={careerDevAssessmentInfo}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
