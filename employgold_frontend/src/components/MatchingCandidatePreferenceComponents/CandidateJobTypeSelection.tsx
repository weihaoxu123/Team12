import React, { useState } from 'react';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { JobTypeOptions } from 'src/options';

interface ICandidateJobTypeSelectionProps {
  jobType: string;
  handleCandidateJobTypeChange: (jobType: string) => void;
}

const CandidateJobTypeSelection: React.FC<ICandidateJobTypeSelectionProps> = (
  props,
) => {
  const [jobType, setJobType] = useState(props.jobType);

  const handleSelectChange = (e: SelectChangeEvent) => {
    if (e.target.value) {
      setJobType(e.target.value);
      props.handleCandidateJobTypeChange(e.target.value);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ fontSize: '18px' }}>Job Type</Box>
      <Box sx={{ mt: '10px' }}>You desire:</Box>
      <FormControl sx={{ mt: '10px' }} fullWidth>
        <Select
          labelId="candidate-job-compensation-type-select"
          value={jobType}
          onChange={handleSelectChange}>
          {JobTypeOptions.map((v) => (
            <MenuItem value={v}>{v}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CandidateJobTypeSelection;
