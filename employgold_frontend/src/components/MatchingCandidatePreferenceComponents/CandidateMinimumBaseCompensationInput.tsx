import { Box, Input } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';

interface ICandidateMinimumBaseCompensationInputProps {
  minimumBaseCompensation: ICompensation;
  handleMinimumBaseCompensationChange: (
    minimumBaseCompensation: ICompensation,
  ) => void;
}

const CandidateMinimumBaseCompensationInput: React.FC<ICandidateMinimumBaseCompensationInputProps> =
  (props) => {
    const [minimumBaseCompensation, setMinimumBaseCompensation] = useState(
      props.minimumBaseCompensation,
    );

    const handleInputChange =
      (inputType: 'hourly' | 'salary') =>
      (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
          const updateState = {
            ...minimumBaseCompensation,
            [inputType]: Number(e.target.value),
          };
          setMinimumBaseCompensation(updateState);
          props.handleMinimumBaseCompensationChange(updateState);
        }
      };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ fontSize: '18px' }}>
          What is the minimum base compensation you would consider for this
          role? <br />
          <br />
          (This answer will not be shared—it is only used for matching and
          research only).*
        </Box>
        $
        <Input
          sx={{ mt: '20px' }}
          type="number"
          onChange={handleInputChange('hourly')}
          value={minimumBaseCompensation?.hourly || 0}
        />
        Hourly rate <br />
        (Must be in this format: 15.00 – no commas, or dollar signs)
        <br />
        or
        <br />$
        <Input
          type="number"
          value={minimumBaseCompensation?.salary || 0}
          onChange={handleInputChange('salary')}
        />
        Salary <br /> (Must be in this format: 42000 – no decimal points,
        commas, or dollar signs)
      </Box>
    );
  };

export default CandidateMinimumBaseCompensationInput;
