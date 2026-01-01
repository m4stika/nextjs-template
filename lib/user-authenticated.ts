
import { redirect } from "next/navigation";
import { apiServer } from "./server-api";

export default async function isAuthenticated(includeUnitRole?: boolean) {
  const responseApi = await apiServer.get<{ branchId: number }>({ url: "is-authenticated" });
  if (responseApi.status === "error") {
    let props = {};
    if (responseApi.statusCode === 401) {
      props = {
        server_error_status: responseApi.statusCode.toString(),
        message: "You are not authorized, please login to continue",
        authorized: "false",
      };
    } else {
      props = {
        server_error_status: responseApi.statusCode.toString(),
        message: responseApi.message,
      };
    }
    redirect(`?${new URLSearchParams(props).toString()}`);
  }
  if (includeUnitRole && responseApi.data.branchId !== 1) {
    redirect(`/error-page?${new URLSearchParams({
      server_error_status: '422',
      message: "you don't have permission to access this page",
    }).toString()}`);
  }
  return true;
}

