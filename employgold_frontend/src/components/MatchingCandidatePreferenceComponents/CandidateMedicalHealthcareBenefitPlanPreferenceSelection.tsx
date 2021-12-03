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

interface ICanidateMedicalHealthcareBenefitPlanPreferenceSelectionProps {
  medicalHealthcareBenefitPlanPreference: IMedicalHealthcareBenefitPlanPreference;
  handleMedicalHealthcareBenefitPlanPreferenceUpdate: (
    medicalHealthcareBenefitPlanPreference: IMedicalHealthcareBenefitPlanPreference,
  ) => void;
}

const CandidateMedicalHealthcareBenefitPlanPreferenceSelection: React.FC<ICanidateMedicalHealthcareBenefitPlanPreferenceSelectionProps> =
  (props) => {
    const [
      medicalHealthcareBenefitPlanPreference,
      setMedicalHealthcareBenefitPlanPreference,
    ] = useState(props.medicalHealthcareBenefitPlanPreference);

    const handleHasChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IMedicalHealthcareBenefitPlanPreference = {
          ...medicalHealthcareBenefitPlanPreference,
          has: value === e.target.checked,
        };
        setMedicalHealthcareBenefitPlanPreference(updatedState);
        props.handleMedicalHealthcareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleContributeChange =
      (value: boolean) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IMedicalHealthcareBenefitPlanPreference = {
          ...medicalHealthcareBenefitPlanPreference,
          contributeOrMatch: value === e.target.checked,
        };
        setMedicalHealthcareBenefitPlanPreference(updatedState);
        props.handleMedicalHealthcareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IMedicalHealthcareBenefitPlanPreference = {
        ...medicalHealthcareBenefitPlanPreference,
        amount: e.target.valueAsNumber,
      };
      setMedicalHealthcareBenefitPlanPreference(updatedState);
      props.handleMedicalHealthcareBenefitPlanPreferenceUpdate(updatedState);
    };

    const handleRadioCheck =
      (candidateContributeAmount: string) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const updatedState: IMedicalHealthcareBenefitPlanPreference = {
          ...medicalHealthcareBenefitPlanPreference,
          candidateContributeAmount: e.target.checked
            ? candidateContributeAmount
            : medicalHealthcareBenefitPlanPreference.candidateContributeAmount,
        };
        setMedicalHealthcareBenefitPlanPreference(updatedState);
        props.handleMedicalHealthcareBenefitPlanPreferenceUpdate(updatedState);
      };

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedState: IMedicalHealthcareBenefitPlanPreference = {
        ...medicalHealthcareBenefitPlanPreference,
        comments: e.target.value,
      };
      setMedicalHealthcareBenefitPlanPreference(updatedState);
      props.handleMedicalHealthcareBenefitPlanPreferenceUpdate(updatedState);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <FormControl>
          <FormLabel>
            Does/did the employer offer you a medical/healthcare benefit plan?*
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(true)}
                  checked={Boolean(medicalHealthcareBenefitPlanPreference.has)}
                />
              }
              label={'Yes'}
            />
            <FormControlLabel
              control={
                <Radio
                  onChange={handleHasChange(false)}
                  checked={Boolean(!medicalHealthcareBenefitPlanPreference.has)}
                />
              }
              label={'No'}
            />
          </RadioGroup>
        </FormControl>

        {medicalHealthcareBenefitPlanPreference.has && (
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
                      medicalHealthcareBenefitPlanPreference.contributeOrMatch,
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
                      !medicalHealthcareBenefitPlanPreference.contributeOrMatch,
                    )}
                  />
                }
                label={'No'}
              />
            </RadioGroup>
          </FormControl>
        )}

        {medicalHealthcareBenefitPlanPreference.has &&
          medicalHealthcareBenefitPlanPreference.contributeOrMatch && (
            <Box sx={{ mt: '10px' }}>
              If yes, what amount?
              <Input
                sx={{ width: '80px' }}
                onChange={handleInputChange}
                type={'number'}
                value={medicalHealthcareBenefitPlanPreference.amount || 0}
              />
              <Box>
                (number only, do not include dollar or percentage signs or
                decimal points)
              </Box>
            </Box>
          )}

        {medicalHealthcareBenefitPlanPreference.has &&
          medicalHealthcareBenefitPlanPreference.contributeOrMatch && (
            <Box sx={{ mt: '10px' }}>
              How much did you contribute to your benefits per month?
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    label="individual"
                    value={
                      medicalHealthcareBenefitPlanPreference.candidateContributeAmount
                    }
                    control={
                      <Radio
                        onChange={handleRadioCheck('individual')}
                        checked={
                          medicalHealthcareBenefitPlanPreference.candidateContributeAmount ===
                          'individual'
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="individual+1"
                    value={
                      medicalHealthcareBenefitPlanPreference.candidateContributeAmount
                    }
                    control={
                      <Radio
                        onChange={handleRadioCheck('individual+1')}
                        checked={
                          medicalHealthcareBenefitPlanPreference.candidateContributeAmount ===
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
                          medicalHealthcareBenefitPlanPreference.candidateContributeAmount ===
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
          value={medicalHealthcareBenefitPlanPreference.comments}
          sx={{ mt: '10px' }}
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

export default CandidateMedicalHealthcareBenefitPlanPreferenceSelection;
