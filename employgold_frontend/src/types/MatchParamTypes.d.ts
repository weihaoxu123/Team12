interface IJobPreferenceInfo {
  jobType: string;
  jobCompensationType: string;
  minimumBaseCompensation: ICompensation;
  lowEndCompensation: ICompensation;
  highEndCompensation: ICompensation;
  lastCompensationPackage: ICompensationPackage;
  retirementPlanPreference: IRetirementPlanPreference;
  medicalHealthcareBenefitPlanPreference: IMedicalHealthcareBenefitPlanPreference;
  dentalCareBenefitPlanPreference: IDentalCareBenefitPlanPreference;
  visionCareBenefitPlanPreference: IVisionCareBenefitPlanPreference;
  vacationSickDaysHolidayPTOPreference: IVacationSickDaysHolidayPTOPreference;
  spendingAllowancePreference: ISpendingAllowancePreference;
  tuitionBenefitPreference: ITuitionBenefitPreference;
  companyVehiclePreference: ICompanyVehiclePreference;
  otherBenefitsAndPerks?: string;
  nonNegotiableGeneralPreference: IGeneralMatchingPreference;
  negotiableGeneralPreference: IGeneralMatchingPreference;
}

interface ICompensation {
  salary?: number;
  hourly?: number;
}

interface ICompensationPackage {
  hourly?: number;
  salary?: number;
  projectGigRate?: number;
  commission?: number;
  targetBonus: number;
  actualBonus: number;
}

interface IRetirementPlanPreference {
  has: boolean;
  contributeOrMatch?: boolean;
  retirementMatchContribution?: number;
  comments?: string;
}

interface IMedicalHealthcareBenefitPlanPreference {
  has: boolean;
  contributeOrMatch?: boolean;
  amount?: number;
  candidateContributeAmount?: string;
  comments?: string;
}

interface IDentalCareBenefitPlanPreference {
  has: boolean;
  contributeOrMatch?: boolean;
  amount?: number;
  candidateContributeAmount?: string;
  comments?: string;
}

interface IVisionCareBenefitPlanPreference {
  has: boolean;
  contributeOrMatch?: boolean;
  amount?: number;
  candidateContributeAmount?: string;
  comments?: string;
}

interface IVacationSickDaysHolidayPTOPreference {
  vacations: number;
  sickDays: number;
  holidays: number;
  PTO?: number;
}

interface ISpendingAllowancePreference {
  has: boolean;
  amount?: number;
  rationale?: string;
  comments?: string;
}

interface ITuitionBenefitPreference {
  has: boolean;
  amount?: number;
}

interface ICompanyVehiclePreference {
  hasCompanyVehicle: boolean;
  hasPersonalUseCompanyVehicle: boolean;
  personalUseCompanyVehicleComments?: string;
  hasVehicleAllowance: boolean;
  vehicleAllowanceAmount?: number;
}

interface IGeneralMatchingPreference {
  type: string[];
  size: string[];
  revenue: string[];
  financialStage: string[];
  compensationAndBenefits: string[];
  techStack: string[];
  otherTechStack: string[];
  mission: string[];
  diversityEquityInclusionBelonging: string[];
  culture: string[];
  assessments: string[];
  organizationStructure: string[];
  schedule: string[];
  location: string[];
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
