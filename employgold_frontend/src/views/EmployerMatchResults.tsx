import React, { useState, useMemo, useEffect } from 'react';
import { Box } from '@mui/system';
import { Avatar, Button, IconButton } from '@mui/material';
import NavBar from 'src/components/NavBar';
import InfiniteList from 'src/components/InfiniteList';
import CandidateProfilePreview from 'src/components/CandidateProfilePreview';

export default function EmployerMatchResults() {
  const [targetJob, setTargetJob] = useState<any>();
  const [candidateListOpen, setCandidateListOpen] = useState<boolean>(false);

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

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
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
            height: 'calc(100vh - 100px)',
            overflow: 'hidden',
            borderRight: '1px solid silver',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box
            px={1}
            sx={{
              typography: 'h5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Box>Posted Jobs</Box>
            <Button
              sx={{
                typography: 'body1',
                width: 'fit-content',
                textTransform: 'none',
                p: 0,
              }}
              disabled={targetJob == null}
              onClick={() => {
                setCandidateListOpen((candidateListOpen) => !candidateListOpen);
              }}>
              {candidateListOpen ? 'Hide Candidates' : 'Show Candidates'}
            </Button>
          </Box>
          <Box>
            <InfiniteList
              query={['employerJobs']}
              target={targetJob}
              setTarget={setTargetJob}
            />
          </Box>
        </Box>

        {candidateListOpen && (
          <Box
            flex={1}
            py={2}
            sx={{
              height: 'calc(100vh - 100px)',
              overflow: 'hidden',
              borderRight: '1px solid silver',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Box
              px={1}
              sx={{
                typography: 'h5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Box>Matched Candidates</Box>
            </Box>
            <Box>
              {targetJob &&
                targetJob.candidates.map(
                  (candidate: { id: string; name: string }) => (
                    <Box key={candidate.id}>{candidate.name}</Box>
                  ),
                )}
            </Box>
          </Box>
        )}

        <Box
          flex={candidateListOpen ? 2 : 3}
          sx={{
            height: 'calc(100vh - 80px)',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box
            px={6}
            py={2}
            sx={{
              flex: 1,
              height: '100%',
              overflow: 'auto',
            }}>
            <Box sx={{ typography: 'h5' }}>Summary</Box>
            <Box mt={1} sx={{ typography: 'body1' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    </Box>
  );
}
