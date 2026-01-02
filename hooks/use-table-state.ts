
import { atom, useAtomValue, useSetAtom } from "jotai";
import { VerificationStatus } from "@/lib/common";

type TableState = {
  readyToProcess: boolean;
  verificationStatus?: VerificationStatus;
  itemSelected?: Record<string, unknown>;
  tableActive?: unknown;
  recordSelections?: unknown[];
};

const tableAtom = atom<TableState>({
  readyToProcess: false,
});

export function useTableState() {
  const tableState = useAtomValue(tableAtom);
  const setTableState = useSetAtom(tableAtom);

  return {
    readyToProcess: tableState.readyToProcess,
    setReadyToProcess: (readyToProcess: boolean) =>
      setTableState((prev) => ({ ...prev, readyToProcess })),
    verificationStatus: tableState.verificationStatus,
    setVerificationStatus: (verificationStatus: VerificationStatus | undefined) =>
      setTableState((prev) => ({ ...prev, verificationStatus })),
    itemSelected: tableState.itemSelected,
    setItemSelected: (itemSelected: Record<string, unknown> | undefined) =>
      setTableState((prev) => ({ ...prev, itemSelected })),
    tableActive: tableState.tableActive,
    setTableActive: (tableActive: unknown) =>
      setTableState((prev) => ({ ...prev, tableActive })),
    recordSelections: tableState.recordSelections,
    setRecordSelections: (recordSelections: unknown[]) =>
      setTableState((prev) => ({ ...prev, recordSelections })),
  };
}
