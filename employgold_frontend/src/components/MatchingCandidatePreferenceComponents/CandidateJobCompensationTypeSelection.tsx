import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface ICandidateJobCompensationTypeSelectionProps {
  compensationType?: string;
  handleCompensationTypeChange: (compensationType: string) => void;
}

const CandidateJobCompensationTypeSelection: React.FC<ICandidateJobCompensationTypeSelectionProps> =
  (props) => {
    const [compensationType, setCompensationType] = useState(
      props.compensationType || '',
    );

    const handleSelectChange = (e: SelectChangeEvent) => {
      if (e.target.value) {
        setCompensationType(e.target.value);
        props.handleCompensationTypeChange(e.target.value);
      }
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ fontSize: '18px' }}>Job Compensation Type</Box>
        <Box sx={{ mt: '10px' }}>Your Last Pay Was Paid:</Box>
        <FormControl sx={{ mt: '10px' }} fullWidth>
          <Select
            labelId="candidate-job-compensation-type-select"
            value={compensationType}
            onChange={handleSelectChange}>
            <MenuItem value="per hour">per hour</MenuItem>
            <MenuItem value="per project/gig">per project/gig</MenuItem>
            <MenuItem value="salary">salary</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  };

export default CandidateJobCompensationTypeSelection;
