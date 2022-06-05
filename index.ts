export class FetchError extends Error {
  status: number;
  constructor(code: number, message?: string) {
    super(`${code}: ${message}`);
    this.name = "FetchError";
    this.status = code;
  }
}

export async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  if (response.ok && response.status === 200) {
    return await response.json();
  } else {
    throw new FetchError(response.status, response.statusText);
  }
}

export async function get<T>(
  path: string,
  requestInit: RequestInit = {}
): Promise<T> {
  requestInit.method = "get";
  return await http<T>(new Request(path, requestInit));
}

export async function post<T>(
  path: string,
  body: any,
  requestInit: RequestInit = {}
): Promise<T> {
  requestInit.method = "post";
  if (!requestInit.body && body) {
    requestInit.body = JSON.stringify(body);
  }
  return await http<T>(new Request(path, requestInit));
}

export async function put<T>(
  path: string,
  body: any,
  requestInit: RequestInit = {}
): Promise<T> {
  requestInit.method = "put";
  if (!requestInit.body && body) {
    requestInit.body = JSON.stringify(body);
  }
  return await http<T>(new Request(path, requestInit));
}
