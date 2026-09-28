export interface RegistrationData {
  registrationId: string;
  fullName: string;
  mobileNumber: string;
  email?: string | null;
  location: string;
  age?: number | null;
  occupation: string;
  organization?: string | null;
  interest: string;
  registrationDate: string;
  status: string;
}

