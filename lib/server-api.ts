import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// type TParam = string[][] | Record<string, string> | string | URLSearchParams
type TParam = any

type RequestProps<T> = {
  url: string;
  data: T;
  config?: RequestInit;
  params?: TParam
};

async function request<T>(url: string, config: RequestInit, params?: TParam): Promise<ApiResponse<T>> {
  const regex = /(^[/]|[/]$)/g;
  const baseUrl = process.env.API_URL;
  const urlRegex = url.replace(regex, "");
  const baseUrlRegex = baseUrl?.replace(regex, "");
  let fullUrl = `${baseUrlRegex}/${urlRegex}`;

  if (params !== undefined || params !== null) {
    const initParams = new URLSearchParams(params);
    fullUrl += `/?${initParams}`;
  }

  // get server-cookie for authentication
  const tokenCookie = (await cookies()).getAll()
    .filter((cookie) => ["accessToken", "refreshToken"].includes(cookie.name))
    .map(({ name, value }) => `${name}=${value}`)
    .join(";");
  //  const strCookies = tokenCookie?.map(({ name, value }) => `${name}=${value}`).join(";");
  const init: RequestInit = {
    credentials: "include",
    headers: {
      Cookie: tokenCookie,
      // Authorization: strCookies,
    },
    ...config,
  };

  try {
    const requestHttp = new Request(fullUrl, init);
    const response = await fetch(requestHttp);
    return response.json().then(data => ({
      statusCode: response.status,
      ...data
    } as ApiResponse<T>))
    // return response.json();
  } catch (error) {
    // if (response.status === 401) {
    // `/error-page?message=You are not authorized, please log-in first&pathname=${urlRegex}&authorized=false`
    redirect(`/error-page?message=Something went wrong [Server API Disconnected]&server_error_status=500`);

    // const props = { server_error_status: "401" };
    // redirect(`?${new URLSearchParams(props).toString()}`);
    // }
  }
}

export const apiServer = {
  get: <TData>({ url, config, params }: Omit<RequestProps<TData>, "data">) => {
    const init = { method: "GET", ...config };
    return request<TData>(url, init, params);
  },

  post: <TData, TResponse>({ url, data, config, params }: RequestProps<TData>) => {
    const init: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      ...config,
    };
    return request<TResponse>(url, init, params);
  },

  put: <TData, TResponse>({ url, data, config, params }: RequestProps<TData>) => {
    const init: RequestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      ...config,
    };
    return request<TResponse>(url, init, params);
  },

  delete: <TData>(url: string, config?: RequestInit) => {
    const init = { method: "DELETE", ...config };
    return request<TData>(url, init);
  },
};
