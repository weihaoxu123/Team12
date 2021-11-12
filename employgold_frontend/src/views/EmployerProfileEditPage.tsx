import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';

import EmployerInfoSection from 'src/components/EmployerProfileEditComponents/EmployerInfoSection';

interface IEmployerProfileEditPageProps {}
interface IStepItem {
  label: string;
  element: JSX.Element;
}

export default function EmployerProfileEditPage(
  props: IEmployerProfileEditPageProps,
) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [employerInfo, setemployerInfo] = useState<IEmployerInfo | null>(null);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    //TODO: get employer info for user
    const ei = JSON.parse(localStorage.getItem('employerInfo') || 'null');
    setemployerInfo({ ...ei });
  }, []);

  const handleSaveEmployerInfo = async (info: IEmployerInfo) => {
    //TODO: upload info using api
    setemployerInfo(info);
    localStorage.setItem('employerInfo', JSON.stringify(info));
    navigate('/employer/profile');
  };

  const steps: IStepItem[] = [
    {
      label: 'Employer Infomation',
      element: (
        <EmployerInfoSection
          employerInfo={employerInfo}
          handleSaveClick={handleSaveEmployerInfo}
        />
      ),
    },
    // { label: 'References', element: <Box></Box> },
  ];

  return (
    <Box className="editPage">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          py: 2,
        }}>
        <Box
          sx={{
            typography: 'h3',
            fontFamily: 'Wire One',
            fontWeight: 700,
            cursor: 'pointer',
            ml: 8,
            color: theme.palette.primary.main,
          }}
          onClick={() => navigate('/')}>
          EmployGold
        </Box>
      </Box>
      {steps[activeStep].element}
    </Box>
  );
}
