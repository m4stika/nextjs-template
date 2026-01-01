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
