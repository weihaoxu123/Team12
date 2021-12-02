import React, { ChangeEvent, useState } from 'react';

import { Box, Input } from '@mui/material';

interface ICandidateLowEndHighEndCompensationInputProps {
  lowEndCompensation: ICompensation;
  highEndCompensation: ICompensation;
  handleLowEndCompensationChange: (lowEndCompensation: ICompensation) => void;
  handleHighEndCompensationChange: (highEndCompensation: ICompensation) => void;
}

const CandidateLowEndHighEndCompensationInput: React.FC<ICandidateLowEndHighEndCompensationInputProps> =
  (props) => {
    const [lowEndCompensation, setLowEndCompensation] = useState(
      props.lowEndCompensation,
    );
    const [highEndCompensation, setHighEndCompensation] = useState(
      props.highEndCompensation,
    );

    const handleLowEndChange =
      (inputType: 'hourly' | 'salary') =>
      (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
          const updateState = {
            ...lowEndCompensation,
            [inputType]: Number(e.target.value),
          };
          setLowEndCompensation(updateState);
          props.handleLowEndCompensationChange(updateState);
        }
      };

    const handleHighEndChange =
      (inputType: 'hourly' | 'salary') =>
      (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
          const updateState = {
            ...highEndCompensation,
            [inputType]: Number(e.target.value),
          };
          setHighEndCompensation(updateState);
          props.handleHighEndCompensationChange(updateState);
        }
      };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ fontSize: '18px' }}>
          Based on your experience, the market in your location, and your
          previous compensation, what do you feel is a realistic compensation
          range for you in this role?*
        </Box>
        <Box sx={{ mt: '20px' }}>
          Low end base salary $
          <Input
            type="number"
            value={lowEndCompensation?.salary || 0}
            onChange={handleLowEndChange('salary')}
          />
        </Box>
        <Box>-or-</Box>
        <Box>
          low end hourly rate $
          <Input
            type="number"
            value={lowEndCompensation?.hourly || 0}
            onChange={handleLowEndChange('hourly')}
          />
        </Box>
        <Box>(Must be in this format: 46000–no commas or dollar signs)</Box>

        <Box sx={{ mt: '20px' }}>
          High end base salary $
          <Input
            type="number"
            value={highEndCompensation?.salary || 0}
            onChange={handleHighEndChange('salary')}
          />
        </Box>
        <Box>-or-</Box>
        <Box>
          high end hourly rate $
          <Input
            type="number"
            value={highEndCompensation?.hourly || 0}
            onChange={handleHighEndChange('hourly')}
          />
        </Box>
        <Box>(Must be in this format: 50000–no commas, or dollar signs)</Box>
      </Box>
    );
  };

export default CandidateLowEndHighEndCompensationInput;
