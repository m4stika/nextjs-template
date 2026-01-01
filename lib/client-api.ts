
"use client";

// type TParam = string[][] | Record<string, string> | string | URLSearchParams
type TParam = any
async function request<T>(
  url: string,
  config: RequestInit,
  params?: TParam,
  getFromBuffer: boolean = false
): Promise<ApiResponse<T>> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  const init: RequestInit = {
    credentials: "include",
    ...config,
  };

  // ^[/] = string start with "/"
  // [/]$ = string end with "/"
  const regex = /(^[/]|[/]$)/g;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
  const urlRegex = url.replace(regex, "");
  let fullUrl = `${baseUrl}/${urlRegex}`;
  // console.log("url", { fullUrl, env: process.env.NEXT_PUBLIC_API_URL, baseUrl })
  // if (params !== undefined || params !== null) {
  //   const initParams = new URLSearchParams(params);
  //   fullUrl += `/?${initParams}`;
  // }
  if (params) {
    const initParams = new URLSearchParams(params);
    fullUrl += `/?${initParams}`;
  }
  // console.log("URLSearchParams", fullUrl);


  const requestHttp = new Request(fullUrl, init);

  try {
    const response = await fetch(requestHttp);

    if (getFromBuffer) {
      const buffer = await response.arrayBuffer();
      return { status: "success", statusCode: 200, data: buffer as T };
    }
    return response.json().then(data => ({
      statusCode: response.status,
      ...data
    } as ApiResponse<T>))
    // return response.json();
    // return buffer.byteLength > 0 ? { status: "success", data: buffer } : response.json();
  } catch (error) {
    return {
      statusCode: 500,
      status: "error",
      message: "Something went wrong [Server API Disconnected]"
    } as ApiResponse<T>

    // router.replace(
    //   "/?message=Something went wrong [Server API Disconnected]&server_error_status=500"
    // );
  }
}
type ContentType = "multipart/form-data" | "application/json";
type RequestProps<T> = {
  url: string;
  data: T | FormData;
  config?: RequestInit;
  params?: TParam,
  contentType?: ContentType;
  getFromBuffer?: boolean;
};

const renderBodyFormat = <TData extends Record<string, unknown>>(data: TData, type: ContentType) => {
  const formats = {
    "application/json": () => JSON.stringify(data),
    "multipart/form-data": () => {
      const form = new FormData();
      Object.keys(data).forEach((key) => {
        const value = data[key];
        if (typeof value === "object") {
          form.append(key, (value as FileList)[0]);
        } else if (typeof value === "number") {
          form.append(key, (value as number).toString());
        } else form.append(key, value as any);
        // form.append(key, data[key]);
      });
      // console.log("form", form);
      return form;
    },
  };
  return formats[type]();
};

export const clientApi = {
  get: <TData>({ url, config, params, getFromBuffer }: Omit<RequestProps<TData>, "data">) => {
    const init = { method: "GET", ...config };
    return request<TData>(url, init, params, getFromBuffer);
  },

  post: <TData, TResponse>({
    url,
    data,
    config,
    params,
    contentType = "application/json",
  }: RequestProps<TData>) => {
    const body = renderBodyFormat<any>(data, contentType);
    const headers: HeadersInit =
      contentType === "application/json" ? { "Content-Type": contentType } : {}; // : { "Content-Disposition": `${contentType};boundary=--sdgsdfgsdf45345fgvsdfg` };

    const init: RequestInit = {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data),
      headers,
      body,
      // body: contentType === "application/json" ? JSON.stringify(data) : (data as FormData),
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

  patch: <TData, TResponse>({ url, data, config, params }: RequestProps<TData>) => {
    const init: RequestInit = {
      method: "PATCH",
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
