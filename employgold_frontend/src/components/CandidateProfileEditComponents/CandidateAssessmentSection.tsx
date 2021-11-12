import React, { ChangeEvent } from 'react';
import { useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  useTheme,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HandymanIcon from '@mui/icons-material/Handyman';

interface ICandidateAssessmentSectionProps {
  careerDevAssessmentInfo: ICareerDevAssessmentsInfo | null;
  handleSaveClick: (info: ICareerDevAssessmentsInfo) => void;
  handleBackClick: () => void;
}

const defaultCareerDevAssessmentInfo: ICareerDevAssessmentsInfo = {
  learningStyleVARKResult: {
    visual: '',
    aural: '',
    readWrite: '',
    kinesthetic: '',
  },
  workingGeniusResult: {
    genius: [],
    competency: [],
    frustration: [],
    skills: [],
  },
};

const workingGeniusTypes: IWorkingGeniusTypes[] = [
  'Wonder',
  'Invention',
  'Discernment',
  'Galvanizing',
  'Enablement',
  'Tenacity',
];
const CandidateAssessmentSection: React.FC<ICandidateAssessmentSectionProps> = (
  props,
) => {
  const theme = useTheme();
  const [careerDevAssessmentInfo, setCareerDevAssessmentInfo] = useState(
    props.careerDevAssessmentInfo || defaultCareerDevAssessmentInfo,
  );

  const handleWorkingGeniusChange = (
    event: SelectChangeEvent<IWorkingGeniusTypes[]>,
  ) => {
    careerDevAssessmentInfo.workingGeniusResult.genius = event.target
      .value as IWorkingGeniusTypes[];
    setCareerDevAssessmentInfo({ ...careerDevAssessmentInfo });
  };

  const handleWorkingCompetencyChange = (
    event: SelectChangeEvent<IWorkingGeniusTypes[]>,
  ) => {
    careerDevAssessmentInfo.workingGeniusResult.competency = event.target
      .value as IWorkingGeniusTypes[];
    setCareerDevAssessmentInfo({ ...careerDevAssessmentInfo });
  };

  const handleWorkingFrustrationChange = (
    event: SelectChangeEvent<IWorkingGeniusTypes[]>,
  ) => {
    careerDevAssessmentInfo.workingGeniusResult.frustration = event.target
      .value as IWorkingGeniusTypes[];
    setCareerDevAssessmentInfo({ ...careerDevAssessmentInfo });
  };

  const handleVARKVisualChange = (event: ChangeEvent<HTMLInputElement>) => {
    careerDevAssessmentInfo.learningStyleVARKResult.visual = event.target.value;
    setCareerDevAssessmentInfo({ ...careerDevAssessmentInfo });
  };

  const handleVARKAuralChange = (event: ChangeEvent<HTMLInputElement>) => {
    careerDevAssessmentInfo.learningStyleVARKResult.aural = event.target.value;
    setCareerDevAssessmentInfo({ ...careerDevAssessmentInfo });
  };

  const handleVARKReadWriteChange = (event: ChangeEvent<HTMLInputElement>) => {
    careerDevAssessmentInfo.learningStyleVARKResult.readWrite =
      event.target.value;
    setCareerDevAssessmentInfo({ ...careerDevAssessmentInfo });
  };

  const handleVARKKinestheticChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    careerDevAssessmentInfo.learningStyleVARKResult.kinesthetic =
      event.target.value;
    setCareerDevAssessmentInfo({ ...careerDevAssessmentInfo });
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
        Public Profile
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
          <Box sx={{ width: '300px', mt: '50px', position: 'relative' }}>
            <Box
              sx={{
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
                typography: 'body1',
              }}>
              Learning Style (VARK)
            </Box>
            Take this free assessment to see your learning style preferences.
            <br />
            <br />
            You need to type your results to submit the results.
            <Box
              onClick={() => {
                window.open(
                  'https://vark-learn.com/the-vark-questionnaire/',
                  '_blank',
                );
              }}
              sx={{
                mt: '15px',
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.primary.main,
                cursor: 'pointer',
              }}>
              <AddCircleOutlineIcon />
              <Box sx={{ typography: 'body1', ml: 1 }}>
                Take learning style test
              </Box>
            </Box>
            <TextField
              className="textBox"
              value={careerDevAssessmentInfo.learningStyleVARKResult.visual}
              onChange={handleVARKVisualChange}
              sx={{ mt: 2 }}
              label="Visual"
            />
            <TextField
              className="textBox"
              value={careerDevAssessmentInfo.learningStyleVARKResult.aural}
              sx={{ mt: 2 }}
              onChange={handleVARKAuralChange}
              label="Aural"
            />
            <TextField
              className="textBox"
              value={careerDevAssessmentInfo.learningStyleVARKResult.readWrite}
              sx={{ mt: 2 }}
              onChange={handleVARKReadWriteChange}
              label="Read/Write"
            />
            <TextField
              className="textBox"
              value={
                careerDevAssessmentInfo.learningStyleVARKResult.kinesthetic
              }
              onChange={handleVARKKinestheticChange}
              sx={{ mt: 2 }}
              label="Kinesthetic"
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: '80%',
            paddingBottom: '60px',
            borderBottom: '1px solid #9C9C9C',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Box
            sx={{
              width: '300px',
              mt: '50px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Box
              sx={{
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                top: 0,
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
                typography: 'body1',
              }}>
              Job Matching Assessments
            </Box>
            <HandymanIcon
              sx={{ width: '100px', height: '100px', mb: '30px' }}
            />
            We are working on find assessments for a better matching.
          </Box>
        </Box>

        <Box
          sx={{
            width: '80%',
            paddingBottom: '60px',
            borderBottom: '1px solid #9C9C9C',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Box sx={{ width: '300px', mt: '50px', position: 'relative' }}>
            <Box
              sx={{
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
                typography: 'body1',
              }}>
              Working Genius
            </Box>
            Take this Working Genius assessment to see your working genius for
            your own reference.
            <br />
            <br />
            You need to upload your report to submit the results.
            <Box
              onClick={() => {
                window.open('https://www.workinggenius.com/', '_blank');
              }}
              sx={{
                mt: '15px',
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.primary.main,
                cursor: 'pointer',
              }}>
              <AddCircleOutlineIcon />
              <Box sx={{ typography: 'body1', ml: 1 }}>
                Take Working Genius test
              </Box>
            </Box>
            <FormControl sx={{ mt: 2, width: '300px' }}>
              <InputLabel id="working-genius-checkbox-label">
                Working Genius
              </InputLabel>
              <Select
                labelId="working-genius-checkbox-label"
                id="working-genius-checkbox"
                multiple
                onChange={handleWorkingGeniusChange}
                value={careerDevAssessmentInfo.workingGeniusResult.genius}
                renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label="Working Genius" />}>
                {workingGeniusTypes.map((v) => (
                  <MenuItem key={v} value={v}>
                    <Checkbox
                      checked={
                        careerDevAssessmentInfo.workingGeniusResult.genius.indexOf(
                          v,
                        ) > -1
                      }
                    />
                    <ListItemText primary={v} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 2, width: '300px' }}>
              <InputLabel id="working-competency-checkbox-label">
                Working Competency
              </InputLabel>
              <Select
                labelId="working-competency-checkbox-label"
                id="working-competency-checkbox"
                multiple
                onChange={handleWorkingCompetencyChange}
                value={careerDevAssessmentInfo.workingGeniusResult.competency}
                renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label="Working Competency" />}>
                {workingGeniusTypes.map((v) => (
                  <MenuItem key={v} value={v}>
                    <Checkbox
                      checked={
                        careerDevAssessmentInfo.workingGeniusResult.competency.indexOf(
                          v,
                        ) > -1
                      }
                    />
                    <ListItemText primary={v} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 2, width: '300px' }}>
              <InputLabel id="working-frustration-checkbox-label">
                Working Frustration
              </InputLabel>
              <Select
                labelId="working-frustration-checkbox-label"
                id="working-frustration-checkbox"
                multiple
                onChange={handleWorkingFrustrationChange}
                value={careerDevAssessmentInfo.workingGeniusResult.frustration}
                renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label="Working Frustration" />}>
                {workingGeniusTypes.map((v) => (
                  <MenuItem key={v} value={v}>
                    <Checkbox
                      checked={
                        careerDevAssessmentInfo.workingGeniusResult.frustration.indexOf(
                          v,
                        ) > -1
                      }
                    />
                    <ListItemText primary={v} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Button
          className="button"
          sx={{
            typography: 'body1',
            textTransform: 'none',
            color: 'white',
            mt: '60px',
            width: '300px',
          }}
          variant="contained"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const formEle = e.currentTarget.parentElement as HTMLFormElement;
            if (formEle.reportValidity()) {
              props.handleSaveClick(careerDevAssessmentInfo);
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
            mt: 2,
            width: '300px',
            mb: '100px',
          }}>
          Back
        </Button>
      </form>
    </Box>
  );
};

export default CandidateAssessmentSection;
