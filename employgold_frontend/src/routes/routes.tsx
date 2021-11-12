import CandidateMatchResults from '../views/CandidateMatchResults';
import CandidateProfile from 'src/views/CandidateProfile';
import CandidateProfileEditPage from '../views/CandidateProfileEditPage';
import CandidateProfilePreviewPage from 'src/views/CandidateProfilePreviewPage';
import EmployerMatchResults from '../views/EmployerMatchResults';
import EmployerProfile from 'src/views/EmployerProfile';
import EmployerJobs from 'src/views/EmployerJobs';
import LandingPage from '../views/LandingPage';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import NotFound from '../views/NotFound';

import EmployerProfileEditPage from 'src/views/EmployerProfileEditPage';
export type IRoutes = {
  name: string;
  path: string;
  element: JSX.Element;
};

export const routes: IRoutes[] = [
  { name: 'Landing Page', path: '/', element: <LandingPage /> },
  {
    name: 'Matched Jobs',
    path: '/candidate/matches',
    element: <CandidateMatchResults />,
  },
  {
    name: 'Matched Jobs',
    path: '/candidate/profile',
    element: <CandidateProfile />,
  },
  {
    name: 'Candidate Profile Edit',
    path: '/candidate/profile/edit',
    element: <CandidateProfileEditPage />,
  },
  {
    name: 'Candidate Profile Preview',
    path: '/candidate/profile/preview',
    element: <CandidateProfilePreviewPage />,
  },
  {
    name: 'Matched Candidates',
    path: '/employer/matches',
    element: <EmployerMatchResults />,
  },
  {
    name: 'Employer Profile',
    path: '/employer/profile',
    element: <EmployerProfile />,
  },
  {
    name: 'Candidate Profile Edit',
    path: '/employer/profile/edit',
    element: <EmployerProfileEditPage />,
  },
  {
    name: 'Employer Jobs',
    path: '/employer/jobs',
    element: <EmployerJobs />,
  },
  {
    name: 'Sign In',
    path: '/sign-in',
    element: <SignIn />,
  },
  { name: 'Sign Up', path: '/sign-up', element: <SignUp /> },
  { name: 'Not Found', path: '*', element: <NotFound /> },
];
