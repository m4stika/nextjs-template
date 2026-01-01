
// API Response
type Paging = {
  totalRows: number;
  totalPages: number;
  rowPerPage: number;
  page: number;
  previous: number;
  next: number;
  hasMore: boolean;
  summary?: unknown;
};
type ErrorResponse = {
  status: "error";
  statusCode: number;
  errorType: "error" | "schema" | "unknown";
  message: string;
  issues?: unknown;
  tokenExpired: boolean;
};
type ApiResponse<T> =
  | {
    status: "success";
    statusCode: number;
    data: T;
    paging?: Paging;
  }
  | ErrorResponse;
