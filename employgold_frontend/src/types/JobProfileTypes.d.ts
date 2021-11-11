interface ICompanyInfo {
  company: string;
  description: string;
}

interface IJobInfo {
  name: string;
  company: ICompanyInfo;
  type: string;
  location: string;
  postDate: Date;
  description: string;
  responsibilities: string;
}
