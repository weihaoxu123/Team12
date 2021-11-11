interface IPersonalInfo {
  nameTitle: INameTitle;
  legalFirstName: string;
  legalMiddleName?: string;
  legalLastName: string;
  postNominalLetters?: string;
  pronouns?: string;

  email: string;
  alternativeEmail: string;
  mobileNumber: string;
  homeNumber?: string;

  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

interface IPublicProfileInfo {
  avatarLink?: string;
  headline: string;
  headlineSummary: string;
}

interface IEducationInfo {
  schoolName: string;
  degree: IDegreeOptions;
  city: string;
  state: string;
  country: string;
  major: string;
  minor?: string;
  startDate: Date;
  endDate?: Date;
  currentlyEnrolled: boolean;
}

interface IWorkExperienceInfo {
  companyName: string;
  positionName: string;
  type?: string;
  city: string;
  state: string;
  country: string;
  startDate: Date;
  endDate?: Date;
  currentlyEnrolled: boolean;
  jobDescription: string;
}

interface IJobPreferenceInfo {
  annualSalary: string;
  jobReportToCEO: boolean;
  continuousImprovementCulture: boolean;
  workLocation: string[];
  authorizationToWorkUS: boolean;
  visaSponsorship: boolean;
  femaleDiversity: boolean;
}

interface ICareerDevAssessmentsInfo {
  learningStyleVARKResult: ILearningStyleVARKResult;
  workingGeniusResult: IWorkingGeniusResult;
}

interface ILearningStyleVARKResult {
  visual: string;
  aural: string;
  readWrite: string;
  kinesthetic: string;
  learningPreference: string;
}

interface IWorkingGeniusResult {
  genius: IWorkingGeniusTypes[];
  competency: IWorkingGeniusTypes[];
  frustration: IWorkingGeniusTypes[];
  skills: string[];
}

declare type IWorkingGeniusTypes =
  | 'Wonder'
  | 'Invention'
  | 'Discernment'
  | 'Galvanizing'
  | 'Enablement'
  | 'Tenacity';

declare type IDegreeOptions =
  | 'Associate'
  | 'Bachelor'
  | 'Master'
  | 'Doctoral'
  | 'Professional'
  | 'Specialist'
  | 'Certificate'
  | 'License ';

declare type INameTitle =
  | 'Mr.'
  | 'Mrs.'
  | 'Miss.'
  | 'Ms.'
  | 'Dr.'
  | 'Capt.'
  | 'Prof.'
  | '';
