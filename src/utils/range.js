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
