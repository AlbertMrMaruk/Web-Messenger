export function last(list) {
  if (Array.isArray(list)) {
    return list.at(-1);
  }
}
export function first(lis) {
  if (Array.isArray(lis)) {
    return lis.at(0);
  }
}
export function rangeRight(start, end, step) {
  return range(start, end, step, true);
}

export function range(start, end, step, isRight) {
  const arr = [];
  if (!end) {
    end = start;
    start = 0;
  }
  if (end < 0 && !step && step !== 0) {
    step = -1;
  } else if (!step && step !== 0) {
    step = 1;
  } else if (step === 0) {
    return new Array(end - 1).fill(start);
  }
  if (end === 0 && start === 0) {
    return [];
  }
  console.log(start, end, step);
  if (!isRight) {
    for (let i = start; end > 0 ? i < end : i > end; i += step) {
      arr.push(i);
    }
  } else {
    console.log("mm");
    for (
      let i = end - step;
      end > 0 ? i > start - step : i < start - step;
      i -= step
    ) {
      console.log(i);
      arr.push(i);
    }
  }
  return arr;
}

function isLength(value) {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
}

function isNil(value) {
  return value === null || value === undefined;
}

function isArrayLike(value) {
  return !isNil(value) && typeof value !== "function" && isLength(value.length);
}

function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}

function getTag(value) {
  if (value === null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

const objectProto = Object.prototype;
function isPrototype(value) {
  const ctor = value && value.constructor;
  const proto = (typeof ctor === "function" && ctor.prototype) || objectProto;

  return value === proto;
}

function isArguments(value) {
  return isObjectLike(value) && getTag(value) === "[object Arguments]";
}
export function isEmpty(value) {
  if (value === null) {
    return true;
  }

  if (
    isArrayLike(value) &&
    (Array.isArray(value) ||
      typeof value === "string" ||
      typeof value.splice === "function" ||
      isBuffer(value) ||
      isTypedArray(value) ||
      isArguments(value))
  ) {
    return !value.length;
  }

  const tag = getTag(value);
  if (tag === "[object Map]" || tag === "[object Set]") {
    return !value.size;
  }

  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}
