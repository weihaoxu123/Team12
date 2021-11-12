import React, { ChangeEvent, KeyboardEventHandler } from 'react';
import { useState } from 'react';

import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

interface ICandidateJobPreferenceSectionProps {
  jobPreferenceInfo: IJobPreferenceInfo | null;
  handleSaveClick: (info: IJobPreferenceInfo) => void;
  handleBackClick: () => void;
}

const defaultJobPreferenceInfo: IJobPreferenceInfo = {
  annualSalary: '',
  jobReportToCEO: false,
  continuousImprovementCulture: false,
  workLocation: [],
  authorizationToWorkUS: false,
  visaSponsorship: false,
  femaleDiversity: false,
};

const CandidateJobPreferenceSection: React.FC<ICandidateJobPreferenceSectionProps> =
  (props) => {
    const [jobPreferenceInfo, setJobPreferenceInfo] = useState(
      props.jobPreferenceInfo || defaultJobPreferenceInfo,
    );

    const handleAnnualSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
      jobPreferenceInfo.annualSalary = event.target.value;
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
      });
    };

    const hanldeJobLocationEnter: KeyboardEventHandler<HTMLInputElement> = (
      event,
    ) => {
      if (event.key === 'Enter') {
        const inputEle = event.target as HTMLInputElement;
        const value = inputEle.value;
        inputEle.value = '';
        jobPreferenceInfo.workLocation.push(value);
        setJobPreferenceInfo({
          ...jobPreferenceInfo,
        });
      }
    };

    const handleChipDelete = (idx: number) => (event: any) => {
      jobPreferenceInfo.workLocation.splice(idx, 1);
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
      });
    };

    const handleReportToCEOChange = (event: ChangeEvent<HTMLInputElement>) => {
      jobPreferenceInfo.jobReportToCEO = !jobPreferenceInfo.jobReportToCEO;
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
      });
    };

    const handleContinuousImprovementCultureChange = (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      jobPreferenceInfo.continuousImprovementCulture =
        !jobPreferenceInfo.continuousImprovementCulture;
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
      });
    };

    const handleAuthorizationToWorkUSChange = (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      jobPreferenceInfo.authorizationToWorkUS =
        !jobPreferenceInfo.authorizationToWorkUS;
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
      });
    };

    const handleVisaSponsorshipChange = (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      jobPreferenceInfo.visaSponsorship = !jobPreferenceInfo.visaSponsorship;
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
      });
    };

    const handleFemaleDiversityChange = (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      jobPreferenceInfo.femaleDiversity = !jobPreferenceInfo.femaleDiversity;
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
      });
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
          Job Preferences
        </Box>
        <form
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Box
            sx={{
              mt: '50px',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <TextField
              className="textBox"
              type={'number'}
              onChange={handleAnnualSalaryChange}
              value={jobPreferenceInfo.annualSalary}
              label="Desired Annual Salary (in K)"
            />

            <Box
              sx={{
                width: '300px',
                mt: 4,
                typography: 'body1',
              }}>
              Enter Your Desired Job Locations
              <TextField
                className="textBox"
                sx={{ mt: 1 }}
                label={`Press 'Enter' for next location `}
                onKeyDown={hanldeJobLocationEnter}
              />
              <Paper
                variant="outlined"
                sx={{
                  mt: 2,
                  minHeight: '50px',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}>
                {jobPreferenceInfo.workLocation.map((v, idx) => {
                  return (
                    <ListItem
                      key={`chip-item-${idx}`}
                      sx={{ width: 'fit-content' }}>
                      <Chip
                        onDelete={handleChipDelete(idx)}
                        key={`chip-key-${idx}`}
                        label={v}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
            </Box>

            <FormControl
              sx={{
                width: '100%',
                mt: 4,
                typography: 'body1',
              }}>
              <FormLabel>Want Job Reports To CEO?</FormLabel>
              <RadioGroup onChange={handleReportToCEOChange} row>
                <FormControlLabel
                  control={<Radio checked={jobPreferenceInfo.jobReportToCEO} />}
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Radio checked={!jobPreferenceInfo.jobReportToCEO} />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>

            <FormControl
              sx={{
                width: '100%',
                mt: 4,
                typography: 'body1',
              }}>
              <FormLabel>
                Want Company Has a Continuous Improvement Culture?
              </FormLabel>
              <RadioGroup
                onChange={handleContinuousImprovementCultureChange}
                row>
                <FormControlLabel
                  control={
                    <Radio
                      checked={jobPreferenceInfo.continuousImprovementCulture}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={!jobPreferenceInfo.continuousImprovementCulture}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>

            <FormControl
              sx={{
                width: '100%',
                mt: 4,
                typography: 'body1',
              }}>
              <FormLabel>
                Do You Have a Valid Authorization to Work in U.S?
              </FormLabel>
              <RadioGroup onChange={handleAuthorizationToWorkUSChange} row>
                <FormControlLabel
                  control={
                    <Radio checked={jobPreferenceInfo.authorizationToWorkUS} />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Radio checked={!jobPreferenceInfo.authorizationToWorkUS} />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>

            <FormControl
              sx={{
                width: '100%',
                mt: 4,
                typography: 'body1',
              }}>
              <FormLabel>
                Do You Require a Visa Sponsorship in The Future?
              </FormLabel>
              <RadioGroup onChange={handleVisaSponsorshipChange} row>
                <FormControlLabel
                  control={
                    <Radio checked={jobPreferenceInfo.visaSponsorship} />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Radio checked={!jobPreferenceInfo.visaSponsorship} />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>

            <FormControl
              sx={{
                width: '100%',
                mt: 4,
                typography: 'body1',
              }}>
              <FormLabel>Do You Want a Female Diversity?</FormLabel>
              <RadioGroup onChange={handleFemaleDiversityChange} row>
                <FormControlLabel
                  control={
                    <Radio checked={jobPreferenceInfo.femaleDiversity} />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Radio checked={!jobPreferenceInfo.femaleDiversity} />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Button
            className="button"
            sx={{
              typography: 'body1',
              textTransform: 'none',
              color: 'white',
              mt: '60px',
            }}
            variant="contained"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const formEle = e.currentTarget.parentElement as HTMLFormElement;
              if (formEle.reportValidity()) {
                props.handleSaveClick(jobPreferenceInfo);
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

export default CandidateJobPreferenceSection;
