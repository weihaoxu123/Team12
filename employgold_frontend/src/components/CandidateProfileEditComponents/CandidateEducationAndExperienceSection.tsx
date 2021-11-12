import React, { ChangeEvent, useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useTheme,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import * as dfs from 'date-fns';

interface ICandidateEducationAndExperienceSectionProps {
  educationAndExperienceInfo: IEducationAndExperienceInfo | null;
  handleSaveClick: (info: IEducationAndExperienceInfo) => void;
  handleBackClick: () => void;
}

const degreeOptions: IDegreeOptions[] = [
  'Associate',
  'Bachelor',
  'Master',
  'Doctoral',
  'Professional',
  'Specialist',
  'Certificate',
  'License',
];

const defaultEducationAndExperienceInfo: IEducationAndExperienceInfo = {
  educationInfos: [
    {
      schoolName: '',
      degree: '',
      city: '',
      state: '',
      country: '',
      major: '',
      startDate: '',
      currentlyEnrolled: false,
    },
  ],
  workExperienceInfos: [
    {
      companyName: '',
      positionName: '',
      city: '',
      state: '',
      country: '',
      startDate: '',
      currentlyEmployed: false,
      jobDescription: '',
    },
  ],
};
const CandidateEducationAndExperienceSection: React.FC<ICandidateEducationAndExperienceSectionProps> =
  (props) => {
    const theme = useTheme();
    const [educationInfos, setEducationInfos] = useState(
      props.educationAndExperienceInfo?.educationInfos ||
        defaultEducationAndExperienceInfo.educationInfos,
    );

    const [workExperienceInfos, setWorkExperienceInfos] = useState(
      props.educationAndExperienceInfo?.workExperienceInfos ||
        defaultEducationAndExperienceInfo.workExperienceInfos,
    );

    const handleNewEducationInfoClick = () => {
      const newEducationInfo: IEducationInfo = {
        schoolName: '',
        degree: '',
        city: '',
        state: '',
        country: '',
        major: '',
        startDate: '',
        currentlyEnrolled: false,
      };

      setEducationInfos([...educationInfos, newEducationInfo]);
    };

    const handleRemoveEducationInfoClick = (idx: number) => {
      educationInfos.splice(idx, 1);
      setEducationInfos([...educationInfos]);
    };

    const handleEudcationSchoolNameChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        educationInfos[idx].schoolName = event.target.value;
        setEducationInfos([...educationInfos]);
      };

    const handleEducationDegreeChange =
      (idx: number) => (event: SelectChangeEvent<IDegreeOptions>) => {
        educationInfos[idx].degree = event.target.value as IDegreeOptions;
        setEducationInfos([...educationInfos]);
      };

    const handleEducationCityChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        educationInfos[idx].city = event.target.value;
        setEducationInfos([...educationInfos]);
      };

    const handleEducationStateChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        educationInfos[idx].state = event.target.value;
        setEducationInfos([...educationInfos]);
      };

    const handleEducationCountryChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        educationInfos[idx].country = event.target.value;
        setEducationInfos([...educationInfos]);
      };

    const handleEducationMajorChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        educationInfos[idx].major = event.target.value;
        setEducationInfos([...educationInfos]);
      };

    const handleEducationMinorChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        educationInfos[idx].minor = event.target.value;
        setEducationInfos([...educationInfos]);
      };

    const handleEducationStartDateChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.valueAsDate) {
          educationInfos[idx].startDate = dfs
            .parse(event.target.value, 'yyyy-MM-dd', new Date())
            .getTime()
            .toString();
        }
        setEducationInfos([...educationInfos]);
      };

    const handleEducationEndDateChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        educationInfos[idx].endDate = dfs
          .parse(event.target.value, 'yyyy-MM-dd', new Date())
          .getTime()
          .toString();
        setEducationInfos([...educationInfos]);
      };

    const handleCurrentlyEnrolledChange: (
      idx: number,
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void =
      (idx) => (event) => {
        educationInfos[idx].currentlyEnrolled = event.target.checked;
        setEducationInfos([...educationInfos]);
      };

    const handleNewWorkExperienceInfoClick = () => {
      const newWorkExperienceInfo: IWorkExperienceInfo = {
        companyName: '',
        positionName: '',
        city: '',
        state: '',
        country: '',
        startDate: '',
        currentlyEmployed: false,
        jobDescription: '',
      };

      setWorkExperienceInfos([...workExperienceInfos, newWorkExperienceInfo]);
    };

    const handleRemoveWorkExperienceInfoClick = (idx: number) => {
      workExperienceInfos.splice(idx, 1);
      setWorkExperienceInfos([...workExperienceInfos]);
    };

    const handleWorkExperienceCompanyNameChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].companyName = event.target.value;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperiencePositionChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].positionName = event.target.value;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperienceTypeChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].type = event.target.value;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperienceCityChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].city = event.target.value;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperienceStateChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].state = event.target.value;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperienceCountryChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].country = event.target.value;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperienceJobDescriptionChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].jobDescription = event.target.value;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperienceStartDateChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.valueAsDate) {
          workExperienceInfos[idx].startDate = dfs
            .parse(event.target.value, 'yyyy-MM-dd', new Date())
            .getTime()
            .toString();
        }
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleWorkExperienceEndDateChange =
      (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
        workExperienceInfos[idx].endDate = dfs
          .parse(event.target.value, 'yyyy-MM-dd', new Date())
          .getTime()
          .toString();
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    const handleCurrentlyEmployedChange: (
      idx: number,
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void =
      (idx) => (event) => {
        workExperienceInfos[idx].currentlyEmployed = event.target.checked;
        setWorkExperienceInfos([...workExperienceInfos]);
      };

    return (
      <Box
        sx={{
          mt: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Box
          sx={{
            typography: 'h4',
            width: '80%',
            textAlign: 'center',
            paddingBottom: '60px',
            borderBottom: '1px solid #9C9C9C',
          }}>
          Education and Experience
        </Box>
        <form
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Box
            sx={{
              width: '80%',
              paddingBottom: '60px',
              borderBottom: '1px solid #9C9C9C',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Box sx={{ width: '320px', mt: '50px', position: 'relative' }}>
              <Box
                sx={{
                  typography: 'body1',
                  width: 'fit-content',
                  position: 'absolute',
                  left: '-80px',
                  transform: 'translateX(-100%)',
                  color: theme.palette.primary.main,
                }}>
                Education
              </Box>

              {educationInfos.map((education, idx) => {
                return (
                  <Box
                    sx={{
                      mt: idx === 0 ? 0 : '30px',
                    }}
                    key={`degree-${idx}`}>
                    <TextField
                      className="textBox"
                      value={education.schoolName}
                      required
                      label="School Name"
                      onChange={handleEudcationSchoolNameChange(idx)}
                    />
                    <FormControl sx={{ mt: 2 }}>
                      <InputLabel id={`degree-label-${idx}`}>Degree</InputLabel>
                      <Select
                        className="select"
                        sx={{ minWidth: '150px' }}
                        id={`degree-${idx}`}
                        labelId={`degree-label-${idx}`}
                        label="Degree"
                        value={education.degree}
                        onChange={handleEducationDegreeChange(idx)}>
                        {degreeOptions.map((v) => (
                          <MenuItem key={`degree-${idx}-${v}`} value={v}>
                            {v}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      className="textBox"
                      value={education.city}
                      required
                      sx={{ mt: 2 }}
                      label="City"
                      onChange={handleEducationCityChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={education.state}
                      required
                      sx={{ mt: 2 }}
                      label="State"
                      onChange={handleEducationStateChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={education.country}
                      required
                      sx={{ mt: 2 }}
                      label="Country"
                      onChange={handleEducationCountryChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={education.major}
                      required
                      sx={{ mt: 2 }}
                      label="Major"
                      onChange={handleEducationMajorChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={education.minor}
                      sx={{ mt: 2 }}
                      label="Minor"
                      onChange={handleEducationMinorChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={
                        education.startDate
                          ? dfs.format(
                              Number(education.startDate),
                              'yyyy-MM-dd',
                            )
                          : ''
                      }
                      type="date"
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        max: dfs.format(new Date(), 'yyyy-MM-dd'),
                      }}
                      sx={{ mt: 2 }}
                      label="Start Date"
                      onChange={handleEducationStartDateChange(idx)}
                    />
                    {!education.currentlyEnrolled && education.startDate && (
                      <TextField
                        className="textBox"
                        value={
                          education.endDate
                            ? dfs.format(
                                Number(education.endDate),
                                'yyyy-MM-dd',
                              )
                            : ''
                        }
                        type="date"
                        required
                        inputProps={{
                          max: dfs.format(new Date(), 'yyy-MM-dd'),
                          min: dfs.format(
                            Number(education.startDate),
                            'yyyy-MM-dd',
                          ),
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ mt: 2 }}
                        label="End Date"
                        onChange={handleEducationEndDateChange(idx)}
                      />
                    )}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={education.currentlyEnrolled}
                            onChange={handleCurrentlyEnrolledChange(idx)}
                          />
                        }
                        label="Currently Enrolled"
                      />
                      {educationInfos.length > 1 && (
                        <Box
                          onClick={() => {
                            handleRemoveEducationInfoClick(idx);
                          }}
                          sx={{
                            typography: 'body1',
                            color: theme.palette.primary.main,
                          }}>
                          <u>Remove</u>
                        </Box>
                      )}
                    </Box>
                    {idx === educationInfos.length - 1 && (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mt: '5px',
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                        }}
                        onClick={handleNewEducationInfoClick}>
                        <AddCircleOutlineIcon />
                        <Box sx={{ typography: 'body1', ml: 1 }}>
                          Add New Education Experience
                        </Box>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Work Experience */}

          <Box
            sx={{
              width: '80%',
              paddingBottom: '60px',
              borderBottom: '1px solid #9C9C9C',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Box sx={{ width: '320px', mt: '50px', position: 'relative' }}>
              <Box
                sx={{
                  typography: 'body1',
                  width: 'fit-content',
                  position: 'absolute',
                  left: '-80px',
                  transform: 'translateX(-100%)',
                  color: theme.palette.primary.main,
                }}>
                Work Experience
              </Box>

              {workExperienceInfos.map((workExperience, idx) => {
                return (
                  <Box
                    sx={{
                      mt: idx === 0 ? 0 : '30px',
                    }}
                    key={`degree-${idx}`}>
                    <TextField
                      className="textBox"
                      value={workExperience.companyName}
                      required
                      label="Company"
                      onChange={handleWorkExperienceCompanyNameChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={workExperience.positionName}
                      required
                      sx={{ mt: 2 }}
                      label="Posistion"
                      onChange={handleWorkExperiencePositionChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={workExperience.type}
                      sx={{ mt: 2 }}
                      label="Type"
                      onChange={handleWorkExperienceTypeChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={workExperience.city}
                      required
                      sx={{ mt: 2 }}
                      label="City"
                      onChange={handleWorkExperienceCityChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={workExperience.state}
                      required
                      sx={{ mt: 2 }}
                      label="State"
                      onChange={handleWorkExperienceStateChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={workExperience.country}
                      required
                      sx={{ mt: 2 }}
                      label="Country"
                      onChange={handleWorkExperienceCountryChange(idx)}
                    />

                    <TextField
                      className="textBox"
                      sx={{ mt: '10px' }}
                      InputLabelProps={{
                        shrink: Boolean(workExperience.jobDescription),
                      }}
                      value={workExperience.jobDescription}
                      rows={5}
                      multiline
                      label="Job Description"
                      onChange={handleWorkExperienceJobDescriptionChange(idx)}
                    />
                    <TextField
                      className="textBox"
                      value={
                        workExperience.startDate
                          ? dfs.format(
                              Number(workExperience.startDate),
                              'yyyy-MM-dd',
                            )
                          : ''
                      }
                      type="date"
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        max: dfs.format(new Date(), 'yyyy-MM-dd'),
                      }}
                      sx={{ mt: 2 }}
                      label="Start Date"
                      onChange={handleWorkExperienceStartDateChange(idx)}
                    />
                    {!workExperience.currentlyEmployed &&
                      workExperience.startDate && (
                        <TextField
                          className="textBox"
                          value={
                            workExperience.endDate
                              ? dfs.format(
                                  Number(workExperience.endDate),
                                  'yyyy-MM-dd',
                                )
                              : ''
                          }
                          type="date"
                          required
                          inputProps={{
                            max: dfs.format(new Date(), 'yyy-MM-dd'),
                            min: dfs.format(
                              Number(workExperience.startDate),
                              'yyyy-MM-dd',
                            ),
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          sx={{ mt: 2 }}
                          label="End Date"
                          onChange={handleWorkExperienceEndDateChange(idx)}
                        />
                      )}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={workExperience.currentlyEmployed}
                            onChange={handleCurrentlyEmployedChange(idx)}
                          />
                        }
                        label="Currently Employed"
                      />
                      {workExperienceInfos.length > 1 && (
                        <Box
                          onClick={() => {
                            handleRemoveWorkExperienceInfoClick(idx);
                          }}
                          sx={{
                            typography: 'body1',
                            color: theme.palette.primary.main,
                          }}>
                          <u>Remove</u>
                        </Box>
                      )}
                    </Box>
                    {idx === workExperienceInfos.length - 1 && (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mt: '5px',
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                        }}
                        onClick={handleNewWorkExperienceInfoClick}>
                        <AddCircleOutlineIcon />
                        <Box sx={{ typography: 'body1', ml: 1 }}>
                          Add New Work Experience
                        </Box>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Button
            className="button"
            sx={{
              color: 'white',
              mt: '60px',
              typography: 'body1',
              textTransform: 'none',
            }}
            variant="contained"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const formEle = e.currentTarget.parentElement as HTMLFormElement;
              if (formEle.reportValidity()) {
                props.handleSaveClick({
                  educationInfos: educationInfos,
                  workExperienceInfos: workExperienceInfos,
                });
              }
            }}>
            Save
          </Button>
          <Button
            className="button"
            onClick={props.handleBackClick}
            variant="outlined"
            sx={{
              typography: 'body1',
              textTransform: 'none',
              mb: '100px',
              mt: 2,
            }}>
            Back
          </Button>
        </form>
      </Box>
    );
  };

export default CandidateEducationAndExperienceSection;
