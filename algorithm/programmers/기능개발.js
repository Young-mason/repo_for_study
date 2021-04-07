function solution(progresses, speeds) {
  let queue = progresses.map((el, i) => {
    let day = 0;
    while (el < 100) {
      el += speeds[i];
      day += 1;
    }

    return day;
  });

  let result = [];
  let dayCount = 1;

  let i = 0;
  let j = i + 1;
  while (queue.length !== 0) {
    if (queue[i] >= queue[j]) {
      j++;
      continue;
    } else {
      result.push(j);
      queue = queue.slice(j);
      j = i + 1;
    }
  }

  return result;
}
