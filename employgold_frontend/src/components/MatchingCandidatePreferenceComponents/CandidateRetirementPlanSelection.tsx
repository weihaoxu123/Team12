import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

interface ICandidateRetirementPlanSelectionProps {
  retirementPlanPreference: IRetirementPlanPreference;
  handleRetirementPlanPreferenceUpdate: (
    retirementPlanPreference: IRetirementPlanPreference,
  ) => void;
}

const CandidateRetirementPlanSelection: React.FC<ICandidateRetirementPlanSelectionProps> =
  (props) => {
    const [retirementPlanPreference, setRetirementPlanPreference] = useState(
      props.retirementPlanPreference,
    );

    const handleHasChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IRetirementPlanPreference = {
          ...retirementPlanPreference,
          has: value === e.target.checked,
        };
        setRetirementPlanPreference(updatedState);
        props.handleRetirementPlanPreferenceUpdate(updatedState);
      };

    const handleContributeChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IRetirementPlanPreference = {
          ...retirementPlanPreference,
          contributeOrMatch: value === e.target.checked,
        };
        setRetirementPlanPreference(updatedState);
        props.handleRetirementPlanPreferenceUpdate(updatedState);
      };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IRetirementPlanPreference = {
        ...retirementPlanPreference,
        retirementMatchContribution: e.target.valueAsNumber,
      };
      setRetirementPlanPreference(updatedState);
      props.handleRetirementPlanPreferenceUpdate(updatedState);
    };

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IRetirementPlanPreference = {
        ...retirementPlanPreference,
        comments: e.target.value,
      };
      setRetirementPlanPreference(updatedState);
      props.handleRetirementPlanPreferenceUpdate(updatedState);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <FormControl>
          <FormLabel>
            Does/did the employer offer you a retirement plan?*
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(true)}
                  checked={Boolean(retirementPlanPreference.has)}
                />
              }
              label={'Yes'}
            />
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(false)}
                  checked={Boolean(!retirementPlanPreference.has)}
                />
              }
              label={'No'}
            />
          </RadioGroup>
        </FormControl>

        {retirementPlanPreference.has && (
          <FormControl>
            <FormLabel>
              If yes, does/did the employer contribute or match a certain
              amount?
            </FormLabel>
            <RadioGroup row>
              <FormControlLabel
                control={
                  <Radio
                    onChange={handleContributeChange(true)}
                    checked={Boolean(
                      retirementPlanPreference.contributeOrMatch,
                    )}
                  />
                }
                label={'Yes'}
              />
              <FormControlLabel
                control={
                  <Radio
                    onChange={handleContributeChange(false)}
                    checked={Boolean(
                      !retirementPlanPreference.contributeOrMatch,
                    )}
                  />
                }
                label={'No'}
              />
            </RadioGroup>
          </FormControl>
        )}

        {retirementPlanPreference.has &&
          retirementPlanPreference.contributeOrMatch && (
            <Box sx={{ mt: '10px' }}>
              If yes, what % was the employer retirement match contribution?*{' '}
              <Input
                sx={{ width: '80px' }}
                onChange={handleInputChange}
                type={'number'}
                value={
                  retirementPlanPreference.retirementMatchContribution || 0
                }
              />
              <Box>
                (number only, do not include dollar or percentage signs or
                decimal points)
              </Box>
            </Box>
          )}

        <Box sx={{ mt: '10px' }}>Comments:</Box>
        <TextField
          sx={{ mt: '10px' }}
          value={retirementPlanPreference.comments}
          fullWidth
          variant="outlined"
          type="text"
          onChange={handleCommentChange}
          multiline
          rows={4}
        />
      </Box>
    );
  };

export default CandidateRetirementPlanSelection;
