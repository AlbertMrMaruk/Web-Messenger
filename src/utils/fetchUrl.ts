enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHODS;
  data?: any;
  headers: { [str: string]: string };
  timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, "method">;

function queryStringify(data: {}) {
  const entries = Object.entries(data).map(([key, val]) => `${key}=${val}`);
  return `?${entries.join("&")}`;
}

class HTTPTransport {
  get = (url: string, options: OptionsWithoutMethod) => {
    const queryUrl = options.data
      ? `${url}${queryStringify(options.data)}`
      : url;
    return this.request(
      queryUrl,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  put = (url: string, options: OptionsWithoutMethod) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post = (url: string, options: OptionsWithoutMethod) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete = (url: string, options: OptionsWithoutMethod) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  request = (url: string, options: Options, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(options.method, url);

      if (options.headers)
        Object.entries(options.headers).forEach(([key, val]) =>
          xhr.setRequestHeader(key, val)
        );

      xhr.onload = () => resolve(xhr);

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      console.log(xhr.timeout);
      xhr.ontimeout = reject;

      if (options.method === METHODS.GET || !options.data) xhr.send();
      else xhr.send(options.data);
    });
  };
}
