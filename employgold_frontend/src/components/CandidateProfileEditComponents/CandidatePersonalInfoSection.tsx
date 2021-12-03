import { useState, ChangeEventHandler, useEffect, ChangeEvent } from 'react';

import {
  Box,
  Button,
  FormControl,
  Input,
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

const pronouns = ['She/Her', 'He/Him', 'They/Them', 'Other'];

const CandidatePersonalInfoSection: React.FC<ICandidateProfileEditPageProps> = (
  props,
) => {
  const theme = useTheme();

  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [emailError, setEmailError] = useState(false);
  const [alternativeEmailError, setAlternativeEmailError] = useState(false);
  const [mobilePhoneNumberError, setMobilePhoneNumberError] = useState(false);
  const [homePhoneNumberError, setHomePhoneNumberError] = useState(false);

  useEffect(() => {
    // console.info(props.personalInfo);
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

  const handlePronounsChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (!pronouns.includes(value)) {
      alert('Error Selection');
      return;
    }
    setPersonalInfo({
      ...personalInfo,
      pronouns: value,
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

  const handlePronounsOtherChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({
      ...personalInfo,
      pronouns: event.target.value,
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
          typography: 'h4',
          width: '80%',
          textAlign: 'center',
          paddingBottom: '60px',
          borderBottom: '1px solid #9C9C9C',
        }}>
        Personal Information
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
                typography: 'body1',
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
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
              sx={{ mt: 2 }}
              required
              label="Legal First Name"
            />
            <TextField
              className="textBox"
              onChange={handleMiddleNameChange}
              value={personalInfo.legalMiddleName}
              sx={{ mt: 2 }}
              label="Legal Middle Name"
            />
            <TextField
              className="textBox"
              onChange={handleLastNameChange}
              value={personalInfo.legalLastName}
              sx={{ mt: 2 }}
              required
              label="Legal Last Name"
            />
            <TextField
              className="textBox"
              onChange={handlePostNominalLettersChange}
              value={personalInfo.postNominalLetters}
              sx={{ mt: 2 }}
              label="Post Nominal Letters (If any)"
            />

            <FormControl sx={{ mt: 2, display: 'block' }}>
              <InputLabel id="pronouns-label">Pronouns</InputLabel>
              <Select
                className="select"
                sx={{ minWidth: '80px' }}
                id="pronouns-label"
                labelId="pronouns-label-label"
                label="Pronouns"
                value={
                  pronouns.includes(personalInfo.pronouns || '') ||
                  personalInfo.pronouns === 'Other'
                    ? personalInfo.pronouns
                    : 'Other'
                }
                onChange={handlePronounsChange}>
                {pronouns.map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {(!pronouns.includes(personalInfo.pronouns || '') ||
              personalInfo.pronouns === 'Other') && (
              <Box sx={{ mt: 2 }}>
                <TextField
                  variant="outlined"
                  value={personalInfo.pronouns}
                  onChange={handlePronounsOtherChange}
                />
              </Box>
            )}
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
                typography: 'body1',
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
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
              value={personalInfo.email}
            />
            <TextField
              className="textBox"
              type={'email'}
              sx={{ mt: 2 }}
              required
              label="Alternative Email"
              error={alternativeEmailError}
              onChange={handleAlternativeEmailChange}
              value={personalInfo.alternativeEmail}
            />
            <TextField
              className="textBox"
              type={'tel'}
              sx={{ mt: 2 }}
              inputProps={{ pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' }}
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
              sx={{ mt: 2 }}
              placeholder="_ _ _ - _ _ _ - _ _ _ _"
              inputProps={{ pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' }}
              label="Home Number"
              error={homePhoneNumberError}
              onChange={handleHomeNumberChange}
              value={personalInfo.homeNumber}
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
                typography: 'body1',
                width: 'fit-content',
                position: 'absolute',
                left: '-80px',
                transform: 'translateX(-100%)',
                color: theme.palette.primary.main,
              }}>
              Home Address
            </Box>
            <TextField
              className="textBox"
              onChange={handleAddressLine1Change}
              value={personalInfo.addressLine1}
              label="Address Line 1"
              required
            />
            <TextField
              className="textBox"
              sx={{ mt: 2 }}
              onChange={handleAddressLine2Change}
              value={personalInfo.addressLine2}
              label="Address Line 2"
            />
            <TextField
              className="textBox"
              sx={{ mt: 2 }}
              onChange={handleCityChange}
              value={personalInfo.city}
              label="City"
              required
            />
            <TextField
              className="textBox"
              sx={{ mt: 2 }}
              onChange={handleStateChange}
              value={personalInfo.state}
              label="State"
              required
            />
            <TextField
              className="textBox"
              sx={{ mt: 2 }}
              onChange={handleCountryChange}
              value={personalInfo.country}
              label="Country"
              required
            />
            <TextField
              className="textBox"
              sx={{ mt: 2 }}
              type={'number'}
              onChange={handleZipCodeChange}
              value={personalInfo.zipCode}
              label="Zipcode"
              required
            />
          </Box>
        </Box>

        <Button
          className="button"
          sx={{
            typography: 'body1',
            color: 'white',
            mt: '60px',
            mb: '100px',
            textTransform: 'none',
          }}
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

export default CandidatePersonalInfoSection;
