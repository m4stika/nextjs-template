import { AccountStatus, OrderBy, TDepreciationStatus, TJournalGroup, TransactionType, VerificationStatus } from "./common";

export type Pagination = {
  key: string;
  pageNumber: number;
  rowPerPage: number;
  dateFrom?: Date;
  dateTo?: Date;
  period?: string;
  SearchId?: string;
  accountId?: string;
  verificationStatus?: VerificationStatus | "NONE";
  accountStatus?: AccountStatus | "NONE";
  memberStatus?: "MEMBER" | "KHUSUS" | "NONE";
  journalGroup?: TJournalGroup | "NONE";
  groupBranchId?: number | "NONE";
  financeIsPayment?: TransactionType;
  assetType?: string;
  depreciationStatus?: TDepreciationStatus;
  orderBy?: OrderBy;
};

export type TableState = {
  itemSelected?: Object
  tableActive?: unknown
}
