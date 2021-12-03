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

interface IVisionCareBenefitPlanPreferenceSelectionProps {
  visionCareBenefitPlanPreference: IVisionCareBenefitPlanPreference;
  handleVisionCareBenefitPlanPreferenceUpdate: (
    visionCareBenefitPlanPreference: IVisionCareBenefitPlanPreference,
  ) => void;
}

const CandidateVisionCareBenefitPlanPreferenceSelection: React.FC<IVisionCareBenefitPlanPreferenceSelectionProps> =
  (props) => {
    const [
      visionCareBenefitPlanPreference,
      setVisionCareBenefitPlanPreference,
    ] = useState(props.visionCareBenefitPlanPreference);

    const handleHasChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IVisionCareBenefitPlanPreference = {
          ...visionCareBenefitPlanPreference,
          has: value === e.target.checked,
        };
        setVisionCareBenefitPlanPreference(updatedState);
        props.handleVisionCareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleContributeChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IVisionCareBenefitPlanPreference = {
          ...visionCareBenefitPlanPreference,
          contributeOrMatch: value === e.target.checked,
        };
        setVisionCareBenefitPlanPreference(updatedState);
        props.handleVisionCareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IVisionCareBenefitPlanPreference = {
        ...visionCareBenefitPlanPreference,
        amount: e.target.valueAsNumber,
      };
      setVisionCareBenefitPlanPreference(updatedState);
      props.handleVisionCareBenefitPlanPreferenceUpdate(updatedState);
    };

    const handleRadioCheck =
      (candidateContributeAmount: string) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IVisionCareBenefitPlanPreference = {
          ...visionCareBenefitPlanPreference,
          candidateContributeAmount: e.target.checked
            ? candidateContributeAmount
            : visionCareBenefitPlanPreference.candidateContributeAmount,
        };
        setVisionCareBenefitPlanPreference(updatedState);
        props.handleVisionCareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IVisionCareBenefitPlanPreference = {
        ...visionCareBenefitPlanPreference,
        comments: e.target.value,
      };
      setVisionCareBenefitPlanPreference(updatedState);
      props.handleVisionCareBenefitPlanPreferenceUpdate(updatedState);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <FormControl>
          <FormLabel>
            Does/did the employer offer you a vision care benefit plan?*
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(true)}
                  checked={Boolean(visionCareBenefitPlanPreference.has)}
                />
              }
              label={'Yes'}
            />
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(false)}
                  checked={Boolean(!visionCareBenefitPlanPreference.has)}
                />
              }
              label={'No'}
            />
          </RadioGroup>
        </FormControl>

        {visionCareBenefitPlanPreference.has && (
          <FormControl>
            <FormLabel>
              If yes, does/did the employer contribute a certain amount?*
            </FormLabel>
            <RadioGroup row>
              <FormControlLabel
                control={
                  <Radio
                    onChange={handleContributeChange(true)}
                    checked={Boolean(
                      visionCareBenefitPlanPreference.contributeOrMatch,
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
                      !visionCareBenefitPlanPreference.contributeOrMatch,
                    )}
                  />
                }
                label={'No'}
              />
            </RadioGroup>
          </FormControl>
        )}

        {visionCareBenefitPlanPreference.has &&
          visionCareBenefitPlanPreference.contributeOrMatch && (
            <Box sx={{ mt: '10px' }}>
              If yes, what amount?
              <Input
                sx={{ width: '80px' }}
                onChange={handleInputChange}
                type={'number'}
                value={visionCareBenefitPlanPreference.amount || 0}
              />
              <Box>
                (number only, do not include dollar or percentage signs or
                decimal points)
              </Box>
            </Box>
          )}

        {visionCareBenefitPlanPreference.has &&
          visionCareBenefitPlanPreference.contributeOrMatch && (
            <Box sx={{ mt: '10px' }}>
              How much did you contribute to your benefits per month?
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    label="individual"
                    value={
                      visionCareBenefitPlanPreference.candidateContributeAmount
                    }
                    control={
                      <Radio
                        onChange={handleRadioCheck('individual')}
                        checked={
                          visionCareBenefitPlanPreference.candidateContributeAmount ===
                          'individual'
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="individual+1"
                    value={
                      visionCareBenefitPlanPreference.candidateContributeAmount
                    }
                    control={
                      <Radio
                        onChange={handleRadioCheck('individual+1')}
                        checked={
                          visionCareBenefitPlanPreference.candidateContributeAmount ===
                          'individual+1'
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="family"
                    control={
                      <Radio
                        onChange={handleRadioCheck('family')}
                        checked={
                          visionCareBenefitPlanPreference.candidateContributeAmount ===
                          'family'
                        }
                      />
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          )}

        <Box sx={{ mt: '10px' }}>Comments:</Box>
        <TextField
          sx={{ mt: '10px' }}
          value={visionCareBenefitPlanPreference.comments}
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

export default CandidateVisionCareBenefitPlanPreferenceSelection;
