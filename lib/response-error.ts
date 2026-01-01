class ResponseError extends Error {
  data: unknown;
  status: number;
  constructor(message: string, data: unknown, status?: number) {
    super(message);
    this.name = "ResponseError";
    this.data = data;
    this.status = status!;
  }
}

export type ErrorProps = Error & { status: number };
export { ResponseError };
