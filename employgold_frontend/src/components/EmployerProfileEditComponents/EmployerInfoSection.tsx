import { useState, ChangeEventHandler, useEffect } from 'react';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useTheme,
} from '@mui/material';

declare type IEmployerProfileEditPageProps = {
  employerInfo: IEmployerInfo | null;
  handleSaveClick: (info: IEmployerInfo) => void;
};

const defaultEmployerInfo: IEmployerInfo = {
  companyName: '',
  position: '',
  nameTitle: '',
  legalFirstName: '',
  legalMiddleName: '',
  legalLastName: '',
  postNominalLetters: '',
  pronouns: '',
  email: '',
  alternativeEmail: '',
  mobileNumber: '',
  homeNumber: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

const nameTitles = ['Mr.', 'Mrs.', 'Miss.', 'Ms.', 'Dr.', 'Capt.', 'Prof.'];

const EmployerInfoSection: React.FC<IEmployerProfileEditPageProps> = (
  props,
) => {
  const theme = useTheme();

  const [employerInfo, setEmployerInfo] = useState(defaultEmployerInfo);
  const [emailError, setEmailError] = useState(false);
  const [alternativeEmailError, setAlternativeEmailError] = useState(false);
  const [mobilePhoneNumberError, setMobilePhoneNumberError] = useState(false);
  const [homePhoneNumberError, setHomePhoneNumberError] = useState(false);

  useEffect(() => {
    // console.info(props.employerInfo);
    if (props.employerInfo) {
      setEmployerInfo({ ...props.employerInfo });
    }
  }, [props.employerInfo]);

  const handleCompanyNameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      companyName: event.target.value,
    });
  };

  const handlePositionChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      position: event.target.value,
    });
  };

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      legalFirstName: event.target.value,
    });
  };

  const handleMiddleNameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      legalMiddleName: event.target.value,
    });
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      legalLastName: event.target.value,
    });
  };

  const handlePronounsChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      pronouns: event.target.value,
    });
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmployerInfo({
      ...employerInfo,
      email: event.target.value,
    });
  };

  const handleAlternativeEmailChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      alternativeEmail: event.target.value,
    });
  };

  const handleMobileNumberChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      mobileNumber: event.target.value,
    });
  };

  const handleHomeNumberChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmployerInfo({
      ...employerInfo,
      homeNumber: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        mt: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Box
        sx={{
          width: '80%',
          fontSize: 36,
          textAlign: 'center',
          paddingBottom: '60px',
          borderBottom: '1px solid #9C9C9C',
        }}>
        Employer Information
      </Box>
      <form
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Box
          sx={{
            width: '80%',
            paddingBottom: '60px',
            borderBottom: '1px solid #9C9C9C',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Box sx={{ width: '320px', mt: '50px', position: 'relative' }}>
            <Box
              sx={{
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
                fontSize: 16,
              }}>
              Basic Information
            </Box>

            <TextField
              className="textBox"
              onChange={handleCompanyNameChange}
              value={employerInfo.companyName}
              required
              label="Company Name"
            />
            <TextField
              className="textBox"
              sx={{ mt: 2 }}
              onChange={handlePositionChange}
              value={employerInfo.position}
              label="Position"
            />
            <TextField
              className="textBox"
              onChange={handleFirstNameChange}
              value={employerInfo.legalFirstName}
              sx={{ mt: 2 }}
              required
              label="Legal First Name"
            />
            <TextField
              className="textBox"
              onChange={handleMiddleNameChange}
              value={employerInfo.legalMiddleName}
              sx={{ mt: 2 }}
              label="Legal Middle Name"
            />
            <TextField
              className="textBox"
              onChange={handleLastNameChange}
              value={employerInfo.legalLastName}
              sx={{ mt: 2 }}
              required
              label="Legal Last Name"
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: '80%',
            paddingBottom: '60px',
            borderBottom: '1px solid #9C9C9C',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Box sx={{ width: '320px', mt: '50px', position: 'relative' }}>
            <Box
              sx={{
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
                fontSize: 16,
              }}>
              Contact
            </Box>
            <TextField
              className="textBox"
              type={'email'}
              required
              label="Email"
              error={emailError}
              onChange={handleEmailChange}
              value={employerInfo.email}
            />

            <TextField
              className="textBox"
              type={'tel'}
              sx={{ mt: 2 }}
              inputProps={{ pattern: '[0-9]{3}[0-9]{3}[0-9]{4}' }}
              placeholder="_ _ _ - _ _ _ - _ _ _ _"
              required
              label="Mobile Number"
              error={mobilePhoneNumberError}
              onChange={handleMobileNumberChange}
              value={employerInfo.mobileNumber}
            />
            <TextField
              className="textBox"
              type={'tel'}
              sx={{ mt: 2 }}
              placeholder="_ _ _ - _ _ _ - _ _ _ _"
              inputProps={{ pattern: '[0-9]{3}[0-9]{3}[0-9]{4}' }}
              label="Home Number"
              error={homePhoneNumberError}
              onChange={handleHomeNumberChange}
              value={employerInfo.homeNumber}
            />
          </Box>
        </Box>

        <Button
          className="button"
          sx={{
            typography: 'body1',
            textTransform: 'none',
            color: 'white',
            mt: '60px',
            mb: '100px',
          }}
          variant="contained"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const formEle = e.currentTarget.parentElement as HTMLFormElement;
            if (formEle.reportValidity()) {
              props.handleSaveClick(employerInfo);
            }
          }}>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default EmployerInfoSection;
