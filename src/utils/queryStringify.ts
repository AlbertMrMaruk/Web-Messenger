type StringIndexed = Record<string, any>;

function queryStringify(data: StringIndexed): string | never {
  if (!isPlainObject(data)) {
    throw new Error("input must be an object");
  }
  const entries = Object.entries(data).map(([key, val]) => {
    if (isPlainObject(val)) {
      return queryObject(val, key);
    }
    if (isArray(val)) {
      return queryArray(val, key);
    }
    return `${key}=${val}`;
  });
  console.log(entries.join("&"));
  return `${entries.join("&")}`;
}

function queryObject(data: StringIndexed, keyMain: string): string | never {
  const entries = Object.entries(data).map(([key, val]) => {
    if (isArray(val)) {
      return queryArray(val, `${keyMain}[${key}]`);
    }
    if (isPlainObject(val)) {
      return queryObject(val, `${keyMain}[${key}]`);
    }
    return `${keyMain}[${key}]=${val}`;
  });
  return entries.join("&");
}

function queryArray(data: [], keyMain: string): string | never {
  const entries = data.map((val, key) => {
    if (isArray(val)) {
      return queryArray(val, `${keyMain}[${key}]`);
    }
    if (isPlainObject(val)) {
      return queryObject(val, `${keyMain}[${key}]`);
    }
    return `${keyMain}[${key}]=${val}`;
  });
  return entries.join("&");
}

type PlainObject<T = any> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

export default queryStringify;
