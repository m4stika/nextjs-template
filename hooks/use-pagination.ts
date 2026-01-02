import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomFamily } from "jotai-family";
import { OrderBy } from "@/lib/common";
import { Pagination } from "@/lib/state-config";

// Default pagination
const defaultPagination = (key: string): Pagination => ({
  key,
  pageNumber: 0,
  rowPerPage: 20,
});

// Atom family untuk setiap pagination berdasarkan key
const paginationFamily = atomFamily((key: string) =>
  atom(defaultPagination(key))
);

// Custom hook untuk menggunakan paginations
export function usePaginations(key: string) {
  // Atom untuk pagination berdasarkan key
  const paginationAtom = paginationFamily(key);

  // Getter untuk pagination
  const pagination = useAtomValue(paginationAtom);

  // Setter untuk pagination
  const setPagination = useSetAtom(paginationAtom);

  // Helpers untuk memperbarui field tertentu
  const setRowPerPage = (rowPerPage: number) => {
    setPagination((prev) => ({
      ...prev,
      rowPerPage,
      pageNumber: 0
    }));
  };

  const setPageNumber = (pageNumber: number) => {
    setPagination((prev) => ({
      ...prev,
      pageNumber,
    }));
  };

  const setOrderBy = (orderBy?: OrderBy) => {
    setPagination((prev) => ({
      ...prev,
      orderBy,
    }));
  };

  const setPeriod = (dateFrom: Date, dateTo: Date) => {
    setPagination((prev) => ({
      ...prev,
      dateFrom,
      dateTo,
    }));
  };

  const setAccountingPeriod = (period: string) => {
    setPagination((prev) => ({
      ...prev,
      period,
    }));
  };

  const setId = (SearchId: string | undefined) => {
    setPagination((prev) => ({
      ...prev,
      SearchId,
    }));
  };

  const setAccountId = (accountId: string) => {
    setPagination((prev) => ({
      ...prev,
      accountId,
    }));
  };

  const setBranch = (branchId: number | "NONE") => {
    setPagination((prev) => ({
      ...prev,
      branchId,
    }));
  };

  // const setVerificationStatus = (verificationStatus: VerificationStatus | "NONE") => {
  //   setPagination((prev) => ({
  //     ...prev,
  //     verificationStatus,
  //   }));
  // };
  //
  // const setAccountStatus = (accountStatus: AccountStatus | "NONE") => {
  //   setPagination((prev) => ({
  //     ...prev,
  //     accountStatus,
  //   }));
  // };
  //
  //
  // const setJournalGroup = (journalGroup: TJournalGroup | "NONE") => {
  //   setPagination((prev) => ({
  //     ...prev,
  //     journalGroup,
  //   }));
  // };
  //
  //
  // const setIsPayment = (isPayment: TransactionType) => {
  //   setPagination((prev) => ({
  //     ...prev,
  //     financeIsPayment: isPayment,
  //   }));
  // };
  //
  // const setAssetType = (assetType: string) => {
  //   setPagination((prev) => ({
  //     ...prev,
  //     assetType,
  //   }));
  // };
  //
  // const setDepreciationStatus = (depreciationStatus: TDepreciationStatus) => {
  //   setPagination((prev) => ({
  //     ...prev,
  //     depreciationStatus,
  //   }));
  // };

  return {
    pagination,
    setPagination,
    setRowPerPage,
    setPageNumber,
    setOrderBy,
    setPeriod,
    setAccountingPeriod,
    setId,
    setAccountId,
    setBranch
    // setVerificationStatus,
    // setAccountStatus,
    // setMemberStatus,
    // setJournalGroup,
    // setGroupBranch,
    // setIsPayment,
    // setAssetType,
    // setDepreciationStatus,
  };
}


