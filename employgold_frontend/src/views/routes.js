import CandidateHome from "./CandidateHome";
import CandidateMatchResults from "./CandidateMatchResults";
import EmployerHome from "./EmployerHome";
import EmployerMatchResults from "./EmployerMatchResults";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotFound from "./NotFound";

export const routes = [
  { name: "Landing Page", exact: true, path: "/", element: <LandingPage /> },
  {
    name: "Candidate Home",
    exact: true,
    path: "/candidate/home",
    element: <CandidateHome />,
  },
  {
    name: "Matched Jobs",
    exact: true,
    path: "/candidate/matches",
    element: <CandidateMatchResults />,
  },
  {
    name: "Employer Home",
    exact: true,
    path: "/employer/home",
    element: <EmployerHome />,
  },
  {
    name: "Matched Candidates",
    exact: true,
    path: "/employer/matches",
    element: <EmployerMatchResults />,
  },
  {
    name: "Sign In",
    exact: true,
    path: "/sign-in",
    element: <SignIn />,
  },
  { name: "Sign Up", exact: true, path: "/sign-up", element: <SignUp /> },
  { name: "Not Found", exact: false, path: "*", element: <NotFound /> },
];
