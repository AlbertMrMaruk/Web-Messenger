export function rangeRight(
  start: number,
  end?: number,
  step?: number
): number[] {
  return range(start, end, step, true);
}

export function range(
  start: number,
  end?: number,
  step?: number,
  isRight?: boolean
): number[] {
  const arr: number[] = [];
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
  if (!isRight) {
    for (let i: number = start; end > 0 ? i < end : i > end; i += step) {
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
