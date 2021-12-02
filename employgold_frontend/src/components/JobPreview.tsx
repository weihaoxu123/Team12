import { useLocation } from 'react-router';
import { CircularProgress, Button } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

// TODO: define job type later

export default function JobPreview(props: any) {
  const { job } = props;
  const theme = useTheme();
  const location = useLocation();
  const isCandidate = location.pathname.split('/')[1] === 'candidate';
  const isEmployer = location.pathname.split('/')[1] === 'employer';

  return job ? (
    <Box
      px={6}
      py={2}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ typography: 'h4' }}>{job.title}</Box>
      <Box sx={{ typography: 'body1', opacity: 0.5, py: 0.5 }}>
        {job.company} - {job.location}
      </Box>

      <Box
        sx={{
          typography: 'body1',
          opacity: 0.5,
          display: 'flex',
          alignItems: 'center',
          py: 0.5,
          gap: 1,
        }}>
        <AccessTimeIcon />
        {job.date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Box>
      <Box
        sx={{
          typography: 'body1',
          opacity: 0.5,
          display: 'flex',
          alignItems: 'center',
          py: 0.5,
          gap: 1,
        }}>
        <WorkOutlineIcon /> {job.type}
      </Box>

      <Box sx={{ typography: 'body1', display: 'flex', py: 1, mt: 2 }}>
        {job.industries.map((industry: string) => (
          <Box
            key={industry}
            sx={{
              typography: 'body2',
              display: 'flex',
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: 5,
              color: theme.palette.primary.main,
              px: 1,
              py: 0,
              mr: 1,
            }}>
            {industry}
          </Box>
        ))}
      </Box>

      {isCandidate && (
        <Button
          variant="contained"
          sx={{
            typography: 'body1',
            color: '#fff',
            width: 'fit-content',
            textTransform: 'none',
            mt: 6,
          }}
          onClick={() => {
            window.open(job.link, '_blank');
          }}>
          Apply Now
        </Button>
      )}

      {isEmployer && (
        <Button
          variant="contained"
          sx={{
            typography: 'body1',
            color: '#fff',
            width: 'fit-content',
            textTransform: 'none',
            mt: 6,
          }}>
          Remove Job
        </Button>
      )}

      <Box mt={6} sx={{ typography: 'body1' }}>
        <Box sx={{ typography: 'h5' }}>Description</Box>
        <Box mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Box>

      <Box mt={6} sx={{ typography: 'body1' }}>
        <Box sx={{ typography: 'h5' }}>Responsibilities</Box>
        <Box mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Box>

      <Box mt={6} sx={{ typography: 'body1' }}>
        <Box sx={{ typography: 'h5' }}>Qualifications</Box>
        <Box mt={2}>
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Box>
        <Box mt={2}>
          2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Box>
        <Box mt={2}>
          3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Box>
        <Box mt={2}>
          4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt u
        </Box>
        <Box mt={2}>
          5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laborna aliqua.
        </Box>
        <Box mt={2}>
          6. Lorem ipsum dolor sit amectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CircularProgress />
    </Box>
  );
}
