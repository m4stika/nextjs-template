
export type User = {
  id: string
  username: string
  email: string
  name: string
  password: string
  Roles: string[]
  UserModule: Record<string, string>[]
}

export type Option = {
  value: string | number,
  label: string
  // [key: string]: string | number; // Semua properti lainnya bertipe string atau number
}
export type ParamsProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };
export type LoginMode = "LOGIN" | "REGISTER";
export type VisibleButton =
  | "new"
  | "edit"
  | "delete"
  | "copy"
  | "submit"
  | "submitAll"
  | "print"
  | "preview"
  | "info"
  | "refresh"
  | "filter"
  | "rollback"

export type FormMode =
  | "new"
  | "edit"
  | "copy"
  | "view"
  | "print"
  | "preview"
  | "info"
  | "reject"
  | "submit"
  | "submitAll"
  | "posting"
  | "rollback"

export type OrderBy = {
  id: string;
  sort: "asc" | "desc";
};

export const queryOptions = {
  // keepPreviousData: true,
  staleTime: 6000, //one minute
  gcTime: (1000 * 1800), // 30 menit
  retry: 1,
  refetchOnWindowFocus: false,
};

export const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const VerificationStatusConst = [
  "Open",
  "Submitted",
  "Released",
  "Approved",
  "Rejected",
  "Posted",
  "Closed",
] as const;
export type VerificationStatus = (typeof VerificationStatusConst)[number];

export const accountStatus = [
  "Active",
  "Non_Active",
  "Locked",
  "Resign",
  "Deleted"
] as const
export type AccountStatus = (typeof accountStatus)[number]

export enum JournalGroup {
  OPENING_BALANCE = "Saldo Awal", //SALDO AWAL
  CASH_IN = "Cash-In", // KAS / BANK IN
  CASH_OUT = "Cash-Out", // KAS/BANK OUT
  PAYROLL = "Penggajian", // Pembebanan Gaji/Upah
  DEPRECIATION = "Penyusutan Aktiva Tetap", // Penyusutan Aktiva Tetap
  OTHER = "Jurnal Umum", // JURNAL UMUM (OTHER TRANSACTION)
}
export const journalGroup = Object.keys(JournalGroup) as [TJournalGroup, ...TJournalGroup[]]
export type TJournalGroup = keyof typeof JournalGroup;

export enum DepreciationMethod {
  StraightLine = "Straight-Line",
  SumOfYearDigit = "Sum-Of-Year-Digit",
  DoubleDecliningBalance = "Double-Declining-Balance",
  NonDepreciable = "Non-Depreciable",
}
export const depreciationStatus = ["NONE", "ACTIVE", "CLOSED"] as const;
export type TDepreciationStatus = (typeof depreciationStatus)[number];

export type TransactionType = "PAYMENT" | "RECEIPT" | "ALL";
