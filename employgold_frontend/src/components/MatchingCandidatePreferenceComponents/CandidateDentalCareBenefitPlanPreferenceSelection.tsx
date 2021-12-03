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

interface IDentalCareBenefitPlanPreferenceProps {
  dentalCareBenefitPlanPreference: IDentalCareBenefitPlanPreference;
  handleDentalCareBenefitPlanPreferenceUpdate: (
    dentalCareBenefitPlanPreference: IDentalCareBenefitPlanPreference,
  ) => void;
}

const CanidateDentalCareBenefitPlanPreferenceSelection: React.FC<IDentalCareBenefitPlanPreferenceProps> =
  (props) => {
    const [
      dentalCareBenefitPlanPreference,
      setDentalCareBenefitPlanPreference,
    ] = useState(props.dentalCareBenefitPlanPreference);

    const handleHasChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IDentalCareBenefitPlanPreference = {
          ...dentalCareBenefitPlanPreference,
          has: value === e.target.checked,
        };
        setDentalCareBenefitPlanPreference(updatedState);
        props.handleDentalCareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleContributeChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IDentalCareBenefitPlanPreference = {
          ...dentalCareBenefitPlanPreference,
          contributeOrMatch: value === e.target.checked,
        };
        setDentalCareBenefitPlanPreference(updatedState);
        props.handleDentalCareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IDentalCareBenefitPlanPreference = {
        ...dentalCareBenefitPlanPreference,
        amount: e.target.valueAsNumber,
      };
      setDentalCareBenefitPlanPreference(updatedState);
      props.handleDentalCareBenefitPlanPreferenceUpdate(updatedState);
    };

    const handleRadioCheck =
      (candidateContributeAmount: string) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IDentalCareBenefitPlanPreference = {
          ...dentalCareBenefitPlanPreference,
          candidateContributeAmount: e.target.checked
            ? candidateContributeAmount
            : dentalCareBenefitPlanPreference.candidateContributeAmount,
        };
        setDentalCareBenefitPlanPreference(updatedState);
        props.handleDentalCareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IDentalCareBenefitPlanPreference = {
        ...dentalCareBenefitPlanPreference,
        comments: e.target.value,
      };
      setDentalCareBenefitPlanPreference(updatedState);
      props.handleDentalCareBenefitPlanPreferenceUpdate(updatedState);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <FormControl>
          <FormLabel>
            Does/did the employer offer you a dental care benefit plan?*
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(true)}
                  checked={Boolean(dentalCareBenefitPlanPreference.has)}
                />
              }
              label={'Yes'}
            />
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(false)}
                  checked={Boolean(!dentalCareBenefitPlanPreference.has)}
                />
              }
              label={'No'}
            />
          </RadioGroup>
        </FormControl>

        {dentalCareBenefitPlanPreference.has && (
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
                      dentalCareBenefitPlanPreference.contributeOrMatch,
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
                      !dentalCareBenefitPlanPreference.contributeOrMatch,
                    )}
                  />
                }
                label={'No'}
              />
            </RadioGroup>
          </FormControl>
        )}

        {dentalCareBenefitPlanPreference.has &&
          dentalCareBenefitPlanPreference.contributeOrMatch && (
            <Box sx={{ mt: '10px' }}>
              If yes, what amount?
              <Input
                sx={{ width: '80px' }}
                onChange={handleInputChange}
                type={'number'}
                value={dentalCareBenefitPlanPreference.amount || 0}
              />
              <Box>
                (number only, do not include dollar or percentage signs or
                decimal points)
              </Box>
            </Box>
          )}

        {dentalCareBenefitPlanPreference.has &&
          dentalCareBenefitPlanPreference.contributeOrMatch && (
            <Box sx={{ mt: '10px' }}>
              How much did you contribute to your benefits per month?
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    label="individual"
                    value={
                      dentalCareBenefitPlanPreference.candidateContributeAmount
                    }
                    control={
                      <Radio
                        onChange={handleRadioCheck('individual')}
                        checked={
                          dentalCareBenefitPlanPreference.candidateContributeAmount ===
                          'individual'
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="individual+1"
                    value={
                      dentalCareBenefitPlanPreference.candidateContributeAmount
                    }
                    control={
                      <Radio
                        onChange={handleRadioCheck('individual+1')}
                        checked={
                          dentalCareBenefitPlanPreference.candidateContributeAmount ===
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
                          dentalCareBenefitPlanPreference.candidateContributeAmount ===
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
          value={dentalCareBenefitPlanPreference.comments}
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

export default CanidateDentalCareBenefitPlanPreferenceSelection;
