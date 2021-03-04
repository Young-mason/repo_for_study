function solution(next_student) {
  let arr = [null, ...next_student];
  let result = 0;
  let idx = 0;

  for (let i = 1; i < arr.length; i++) {
    let visited = {};
    let count = 0;
    let current = i; // 1
    let next = arr[i]; // 6

    while (true) {
      // 배열에 중복된 게 있거나 0인경우 break;

      if (visited[current] || current === 0) {
        break;
      }

      visited[current] = true;
      count++; // 3

      current = next;
      next = arr[current];
    }

    if (count >= result) {
      result = count;
      idx = i;
    }
  }

  return idx;
}

let arr = [6, 10, 8, 5, 8, 10, 5, 1, 6, 7];
console.log(solution(arr));
//[5, 9, 13, 1, 0, 0, 11, 1, 7, 12, 9, 9, 2] -> 3
// [6, 10, 8, 5, 8, 10, 5, 1, 6, 7] -> 9;
