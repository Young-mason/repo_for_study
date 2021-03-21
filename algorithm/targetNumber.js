function solution(numbers, target) {
  let count = 0;

  let aux = (arr, acc) => {
    if (arr.length === 0) {
      if (acc === target) count++;
      return;
    }

    let current = arr.slice();
    let element = current.splice(0, 1)[0];

    aux(current, acc + element);
    aux(current, acc - element);
  };

  aux(numbers, 0);
  return count;
}
