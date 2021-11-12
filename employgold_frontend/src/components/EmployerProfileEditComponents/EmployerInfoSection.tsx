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

declare type ICandidateProfileEditPageProps = {
  personalInfo: IPersonalInfo | null;
  handleSaveClick: (info: IPersonalInfo) => void;
};

const defaultPersonalInfo: IPersonalInfo = {
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

const EmployerInfoSection: React.FC<ICandidateProfileEditPageProps> = (
  props,
) => {
  const theme = useTheme();

  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [emailError, setEmailError] = useState(false);
  const [alternativeEmailError, setAlternativeEmailError] = useState(false);
  const [mobilePhoneNumberError, setMobilePhoneNumberError] = useState(false);
  const [homePhoneNumberError, setHomePhoneNumberError] = useState(false);

  useEffect(() => {
    console.info(props.personalInfo);
    if (props.personalInfo) {
      setPersonalInfo({ ...props.personalInfo });
    }
  }, [props.personalInfo]);

  const handleNameTitleSelect = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (!nameTitles.includes(value)) {
      alert('Error Selection');
      return;
    }
    setPersonalInfo({ ...personalInfo, nameTitle: value as INameTitle });
  };

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      legalFirstName: event.target.value,
    });
  };

  const handleMiddleNameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      legalMiddleName: event.target.value,
    });
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      legalLastName: event.target.value,
    });
  };

  const handlePostNominalLettersChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      postNominalLetters: event.target.value,
    });
  };

  const handlePronounsChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      pronouns: event.target.value,
    });
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonalInfo({
      ...personalInfo,
      email: event.target.value,
    });
  };

  const handleAlternativeEmailChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      alternativeEmail: event.target.value,
    });
  };

  const handleMobileNumberChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      mobileNumber: event.target.value,
    });
  };

  const handleHomeNumberChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      homeNumber: event.target.value,
    });
  };

  const handleAddressLine1Change: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      addressLine1: event.target.value,
    });
  };

  const handleAddressLine2Change: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPersonalInfo({
      ...personalInfo,
      addressLine2: event.target.value,
    });
  };

  const handleCityChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonalInfo({
      ...personalInfo,
      city: event.target.value,
    });
  };

  const handleStateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonalInfo({
      ...personalInfo,
      state: event.target.value,
    });
  };

  const handleCountryChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonalInfo({
      ...personalInfo,
      country: event.target.value,
    });
  };

  const handleZipCodeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonalInfo({
      ...personalInfo,
      zipCode: event.target.value,
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

            <FormControl sx={{ display: 'block' }}>
              <InputLabel id="name-title-label">Title</InputLabel>
              <Select
                className="select"
                sx={{ minWidth: '80px' }}
                id="name-title"
                labelId="name-title-label"
                label="Title"
                value={personalInfo.nameTitle}
                onChange={handleNameTitleSelect}>
                {nameTitles.map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              className="textBox"
              onChange={handleFirstNameChange}
              value={personalInfo.legalFirstName}
              sx={{ mt: '10px' }}
              required
              label="Legal First Name"
            />
            <TextField
              className="textBox"
              onChange={handleMiddleNameChange}
              value={personalInfo.legalMiddleName}
              sx={{ mt: '10px' }}
              label="Legal Middle Name"
            />
            <TextField
              className="textBox"
              onChange={handleLastNameChange}
              value={personalInfo.legalLastName}
              sx={{ mt: '10px' }}
              required
              label="Legal Last Name"
            />
            <TextField
              className="textBox"
              onChange={handlePostNominalLettersChange}
              value={personalInfo.postNominalLetters}
              sx={{ mt: '10px' }}
              label="Post Nominal Letters (If any)"
            />
            <TextField
              className="textBox"
              onChange={handlePronounsChange}
              value={personalInfo.pronouns}
              sx={{ mt: '10px' }}
              label="Pronouns"
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
              sx={{ mt: '10px' }}
              required
              label="Email"
              error={emailError}
              onChange={handleEmailChange}
              value={personalInfo.email}
            />
            <TextField
              className="textBox"
              type={'email'}
              sx={{ mt: '10px' }}
              required
              label="Alternative Email"
              error={alternativeEmailError}
              onChange={handleAlternativeEmailChange}
              value={personalInfo.alternativeEmail}
            />
            <TextField
              className="textBox"
              type={'tel'}
              sx={{ mt: '10px' }}
              inputProps={{ pattern: '[0-9]{3}[0-9]{3}[0-9]{4}' }}
              placeholder="_ _ _ - _ _ _ - _ _ _ _"
              required
              label="Mobile Number"
              error={mobilePhoneNumberError}
              onChange={handleMobileNumberChange}
              value={personalInfo.mobileNumber}
            />
            <TextField
              className="textBox"
              type={'tel'}
              sx={{ mt: '10px' }}
              placeholder="_ _ _ - _ _ _ - _ _ _ _"
              inputProps={{ pattern: '[0-9]{3}[0-9]{3}[0-9]{4}' }}
              label="Home Number"
              error={homePhoneNumberError}
              onChange={handleHomeNumberChange}
              value={personalInfo.homeNumber}
            />
          </Box>
        </Box>

        <Button
          sx={{ color: 'white', mt: '60px', mb: '100px', width: '300px' }}
          variant="contained"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const formEle = e.currentTarget.parentElement as HTMLFormElement;
            if (formEle.reportValidity()) {
              props.handleSaveClick(personalInfo);
            }
          }}>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default EmployerInfoSection;
