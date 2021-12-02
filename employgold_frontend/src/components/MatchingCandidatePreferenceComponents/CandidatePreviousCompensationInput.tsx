import React, { ChangeEvent, useState } from 'react';

import { Box, Input } from '@mui/material';

interface ICandidatePreviousCompensationInputProps {
  lastCompensationPackage: ICompensationPackage;
  handleLastCompensationPackageChange: (
    lastCompensationPackage: ICompensationPackage,
  ) => void;
}
const CandidatePreviousCompensationInput: React.FC<ICandidatePreviousCompensationInputProps> =
  (props) => {
    const [lastCompensationPackage, setLastCompensationPackage] = useState(
      props.lastCompensationPackage,
    );

    const handleInputChange =
      (inputType: string) => (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
          const updateState = {
            ...lastCompensationPackage,
            [inputType]: Number(e.target.value),
          };
          setLastCompensationPackage(updateState);
          props.handleLastCompensationPackageChange(updateState);
        }
      };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ fontWeight: 'bold' }}>
          The following answers will not be shared. They are for research and
          matching purposes only. The more information you share, the more we
          can advise employers to pay more fairly.
        </Box>
        <Box sx={{ mt: '40px' }}>What was your last compensation package?*</Box>
        <Box sx={{ mt: '10px' }}>
          Hourly rate: $
          <Input
            value={lastCompensationPackage?.hourly || 0}
            type="number"
            onChange={handleInputChange('hourly')}
          />
        </Box>
        <Box>or</Box>
        <Box>
          Base salary: $
          <Input
            value={lastCompensationPackage?.salary || 0}
            type="number"
            onChange={handleInputChange('salary')}
          />
        </Box>
        <Box>or</Box>
        <Box>
          Project/gig rate: $
          <Input
            value={lastCompensationPackage?.projectGigRate || 0}
            type="number"
            onChange={handleInputChange('projectGigRate')}
          />
        </Box>
        <Box>or</Box>
        <Box>
          Commission rate:
          <Input
            value={lastCompensationPackage?.commission || 0}
            type="number"
            onChange={handleInputChange('commission')}
          />
          %
        </Box>
        <Box sx={{ mt: '10px' }}>
          <Box>
            Target bonus:
            <Input
              value={lastCompensationPackage?.targetBonus}
              type="number"
              onChange={handleInputChange('targetBonus')}
            />
            %
          </Box>
          <Box>
            Actual bonus paid:
            <Input
              value={lastCompensationPackage?.actualBonus}
              type="number"
              onChange={handleInputChange('actualBonus')}
            />
            %
          </Box>
        </Box>
      </Box>
    );
  };

export default CandidatePreviousCompensationInput;
