export type TabHeaderType = "General Details" | "Documents" | "Loans";

export type allUserListType = Array<{
  id: string | undefined | null;
  organisation: string | undefined | null;
  userName: string | undefined | null;
  phoneNumber: string | undefined | null;
  dateJoined: string | undefined | null;
  status: string | undefined | null;
  bank: string | undefined | null;
  accountBalance: string | undefined | null;
  educationLevel: string | undefined | null;
  employmentStatus: string | undefined | null;
  employementSector: string | undefined | null;
  officeEmail: string | undefined | null;
  guarantor: string | undefined | null;
  guarantorPhoneNo: string | undefined | null;
  guarantorRelationship: string | undefined | null;
  guarantorEmail: string | undefined | null;
}>;

export type userType = {
  id: string | undefined | null;
  organization?: string | undefined | null;
  userName?: string | undefined | null;
  phoneNumber?: string | undefined | null;
  dateJoined?: string | undefined | null;
  gender?: string | undefined | null;
  status?: string | undefined | null;
  bank?: string | undefined | null;
  accountBalance?: string | undefined | null;
  educationLevel?: string | undefined | null;
  employmentStatus?: string | undefined | null;
  employementSector?: string | undefined | null;
  officeEmail?: string | undefined | null;
  guarantor?: string | undefined | null;
  guarantorPhoneNo?: string | undefined | null;
  guarantorRelationship?: string | undefined | null;
  guarantorEmail?: string | undefined | null;
};

export type UpdateUserType = {
  id: string | undefined | null;
  status: string | undefined | null;
};
