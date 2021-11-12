interface IEmployerInfo {
  companyName: string;
  position: string;
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
