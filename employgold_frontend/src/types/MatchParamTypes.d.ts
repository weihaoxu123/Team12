interface IJobPreferenceInfo {
  annualSalary: string;
  jobReportToCEO: boolean;
  continuousImprovementCulture: boolean;
  workLocation: string[];
  authorizationToWorkUS: boolean;
  visaSponsorship: boolean;
  femaleDiversity: boolean;
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
