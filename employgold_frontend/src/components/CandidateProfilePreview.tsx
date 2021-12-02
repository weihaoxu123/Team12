import React from 'react';
import * as dfs from 'date-fns';
import { Box, useTheme } from '@mui/system';

interface ICandidateProfilePreviewProps {
  personalInfo: IPersonalInfo | null;
  publicProfile: IPublicProfileInfo | null;
  educationAndExperienceInfo: IEducationAndExperienceInfo | null;
  jobPreferenceInfo: IJobPreferenceInfo | null;
  careerDevAssessmentInfo: ICareerDevAssessmentsInfo | null;
}

export default function CandidateProfilePreview({
  personalInfo,
  publicProfile,
  educationAndExperienceInfo,
  jobPreferenceInfo,
  careerDevAssessmentInfo,
}: ICandidateProfilePreviewProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        typography: 'body1',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          width: '100%',
          border: '1px solid silver',
          borderRadius: 2,
          my: 1,
          p: 2,
          boxSizing: 'border-box',
        }}>
        <Box sx={{ typography: 'h6' }}>Personal Information</Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
          }}>
          <Box
            sx={{
              flex: 1,
              color: theme.palette.primary.main,
            }}>
            Basic Information
          </Box>
          <Box sx={{ flex: 1 }}>
            {personalInfo?.nameTitle && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Title</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.nameTitle}</Box>
              </Box>
            )}
            {personalInfo?.legalFirstName && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Legal First Name</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.legalFirstName}</Box>{' '}
              </Box>
            )}
            {personalInfo?.legalMiddleName && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Legal Middle Name</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.legalMiddleName}</Box>
              </Box>
            )}
            {personalInfo?.legalLastName && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Legal Last Name</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.legalLastName}</Box>
              </Box>
            )}
            {personalInfo?.postNominalLetters && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>
                  Post Nominal Letters (If any)
                </Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.postNominalLetters}</Box>
              </Box>
            )}
            {personalInfo?.pronouns && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Pronouns</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.pronouns}</Box>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
          }}>
          <Box
            sx={{
              flex: 1,
              color: theme.palette.primary.main,
            }}>
            Contact
          </Box>
          <Box sx={{ flex: 1 }}>
            {personalInfo?.email && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Email</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.email}</Box>
              </Box>
            )}
            {personalInfo?.alternativeEmail && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Alternative Email</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.alternativeEmail}</Box>
              </Box>
            )}
            {personalInfo?.mobileNumber && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Mobile Number</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.mobileNumber}</Box>
              </Box>
            )}
            {personalInfo?.homeNumber && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Home Number</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.homeNumber}</Box>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
          }}>
          <Box
            sx={{
              flex: 1,
              color: theme.palette.primary.main,
            }}>
            Home Address
          </Box>
          <Box sx={{ flex: 1 }}>
            {personalInfo?.addressLine1 && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Address Line 1</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.addressLine1}</Box>
              </Box>
            )}
            {personalInfo?.addressLine2 && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Address Line 2</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.addressLine2}</Box>
              </Box>
            )}
            {personalInfo?.city && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>City</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.city}</Box>
              </Box>
            )}
            {personalInfo?.state && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>State</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.state}</Box>
              </Box>
            )}
            {personalInfo?.country && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Country</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.country}</Box>
              </Box>
            )}
            {personalInfo?.zipCode && (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, color: '#9c9c9c' }}>Zip Code</Box>
                <Box sx={{ flex: 1 }}>{personalInfo?.zipCode}</Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          border: '1px solid silver',
          borderRadius: 2,
          p: 2,
          boxSizing: 'border-box',
          my: 1,
        }}>
        <Box sx={{ typography: 'h6' }}>Education and Experience</Box>
        <Box
          sx={{
            mt: 1,
            color: theme.palette.primary.main,
          }}>
          Education
        </Box>
        <Box sx={{ flex: 1 }}>
          {educationAndExperienceInfo?.educationInfos ? (
            educationAndExperienceInfo?.educationInfos.map(
              (education, index) => (
                <Box
                  key={index}
                  sx={{
                    py: 1,
                    borderTop: index === 0 ? 'none' : '1px solid silver',
                  }}>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>School Name</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.schoolName ? education.schoolName : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Degree</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.degree ? education.degree : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>City</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.city ? education.city : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>State</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.state ? education.state : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Country</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.country ? education.country : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Major</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.major ? education.major : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Minor</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.minor ? education.minor : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Start Date</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.startDate
                        ? dfs.format(Number(education.startDate), 'yyyy-MM-dd')
                        : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>End Date</Box>
                    <Box sx={{ flex: 1 }}>
                      {education.endDate
                        ? dfs.format(Number(education.endDate), 'yyyy-MM-dd')
                        : 'N/A'}
                    </Box>
                  </Box>
                </Box>
              ),
            )
          ) : (
            <Box>N/A</Box>
          )}
        </Box>
        <Box
          sx={{
            mt: 1,
            color: theme.palette.primary.main,
          }}>
          Experience
        </Box>
        <Box sx={{ flex: 1 }}>
          {educationAndExperienceInfo?.workExperienceInfos ? (
            educationAndExperienceInfo?.workExperienceInfos.map(
              (experience, index) => (
                <Box
                  key={index}
                  sx={{
                    py: 1,
                    borderTop: index === 0 ? 'none' : '1px solid silver',
                  }}>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Company Name</Box>
                    <Box sx={{ flex: 1 }}>
                      {experience.companyName || 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Position Name</Box>
                    <Box sx={{ flex: 1 }}>
                      {experience.positionName || 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Type</Box>
                    <Box sx={{ flex: 1 }}>
                      {experience.type ? experience.type : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>City</Box>
                    <Box sx={{ flex: 1 }}>{experience.city || 'N/A'}</Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>State</Box>
                    <Box sx={{ flex: 1 }}>{experience.state || 'N/A'}</Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Country</Box>
                    <Box sx={{ flex: 1 }}>{experience.country || 'N/A'}</Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Description</Box>
                    <Box sx={{ flex: 1 }}>
                      {experience.jobDescription || 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>Start Date</Box>
                    <Box sx={{ flex: 1 }}>
                      {experience.startDate
                        ? dfs.format(Number(experience.startDate), 'yyyy-MM-dd')
                        : 'N/A'}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, color: '#9c9c9c' }}>End Date</Box>
                    <Box sx={{ flex: 1 }}>
                      {experience.endDate
                        ? dfs.format(Number(experience.endDate), 'yyyy-MM-dd')
                        : 'N/A'}
                    </Box>
                  </Box>
                </Box>
              ),
            )
          ) : (
            <Box>N/A</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
