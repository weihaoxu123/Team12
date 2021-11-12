import { useState } from 'react';

import { Avatar, Box, Button, TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

interface ICandidatePublicProfileSectionProps {
  publicProfile: IPublicProfileInfo | null;
  handleSaveClick: (info: IPublicProfileInfo) => void;
  handleBackClick: () => void;
}

const defaultPublicProfile: IPublicProfileInfo = {
  avatarLink: '',
  headline: '',
  headlineSummary: '',
};

const CandidatePublicProfileSection: React.FC<ICandidatePublicProfileSectionProps> =
  (props) => {
    const [publicProfile, setPublicProfile] = useState(
      props.publicProfile || defaultPublicProfile,
    );

    const handleHeadlineChange: ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      setPublicProfile({
        ...publicProfile,
        headline: event.target.value,
      });
    };

    const handleHeadlineSummaryChange: ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      setPublicProfile({
        ...publicProfile,
        headlineSummary: event.target.value,
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
          Public Profile
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
              mt: '50px',
              width: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar
              sx={{
                width: '300px',
                height: '300px',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}>
              Upload Avatar
            </Avatar>
            <TextField
              className="textBox"
              sx={{ mt: '50px' }}
              defaultValue={publicProfile.headline}
              required
              label="Headline"
              onChange={handleHeadlineChange}
            />

            <TextField
              className="textBox"
              sx={{ mt: '30px' }}
              InputLabelProps={{
                shrink: Boolean(publicProfile.headlineSummary),
              }}
              defaultValue={publicProfile.headlineSummary}
              rows={5}
              multiline
              required
              label="Headline Summary"
              onChange={handleHeadlineSummaryChange}
            />
          </Box>

          <Button
            className="button"
            sx={{
              typography: 'body1',
              color: 'white',
              mt: '60px',
              textTransform: 'none',
            }}
            variant="contained"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const formEle = e.currentTarget.parentElement as HTMLFormElement;
              if (formEle.reportValidity()) {
                props.handleSaveClick(publicProfile);
              }
            }}>
            Save
          </Button>
          <Button
            className="button"
            onClick={props.handleBackClick}
            variant="outlined"
            sx={{
              typography: 'body1',
              mb: '100px',
              mt: 2,
              textTransform: 'none',
            }}>
            Back
          </Button>
        </form>
      </Box>
    );
  };

export default CandidatePublicProfileSection;
