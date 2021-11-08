import CandidateHome from '../views/CandidateHome';
import CandidateMatchResults from '../views/CandidateMatchResults';
import EmployerHome from '../views/EmployerHome';
import EmployerMatchResults from '../views/EmployerMatchResults';
import LandingPage from '../views/LandingPage';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import NotFound from '../views/NotFound';
export type IRoutes = {
  name: string;
  path: string;
  element: JSX.Element;
};

export const routes: IRoutes[] = [
  { name: 'Landing Page', path: '/', element: <LandingPage /> },
  {
    name: 'Candidate Home',

    path: '/candidate/home',
    element: <CandidateHome />,
  },
  {
    name: 'Matched Jobs',

    path: '/candidate/matches',
    element: <CandidateMatchResults />,
  },
  {
    name: 'Employer Home',

    path: '/employer/home',
    element: <EmployerHome />,
  },
  {
    name: 'Matched Candidates',

    path: '/employer/matches',
    element: <EmployerMatchResults />,
  },
  {
    name: 'Sign In',

    path: '/sign-in',
    element: <SignIn />,
  },
  { name: 'Sign Up', path: '/sign-up', element: <SignUp /> },
  { name: 'Not Found', path: '*', element: <NotFound /> },
];
