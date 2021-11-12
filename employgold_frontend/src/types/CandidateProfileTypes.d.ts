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
  startDate: string;
  endDate?: string;
  currentlyEnrolled: boolean;
}

interface IWorkExperienceInfo {
  companyName: string;
  positionName: string;
  type?: string;
  city: string;
  state: string;
  country: string;
  startDate: string;
  endDate?: string;
  currentlyEmployed: boolean;
  jobDescription: string;
}

interface IEducationAndExperienceInfo {
  educationInfos: IEducationInfo[];
  workExperienceInfos: IWorkExperienceInfo[];
}

declare type IDegreeOptions =
  | 'Associate'
  | 'Bachelor'
  | 'Master'
  | 'Doctoral'
  | 'Professional'
  | 'Specialist'
  | 'Certificate'
  | 'License'
  | '';

declare type INameTitle =
  | 'Mr.'
  | 'Mrs.'
  | 'Miss.'
  | 'Ms.'
  | 'Dr.'
  | 'Capt.'
  | 'Prof.'
  | '';
