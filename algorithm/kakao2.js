function solution(m, v) {
  let board = [v[0]];

  let queue = v.slice(1);
  let start = 0;
  while (queue.length > 0) {
    // board의 요소는 m 이하여야 한다.
    let current = queue.shift();
    for (let i = start; i < board.length; i++) {
      if (board[i] + current <= m) {
        board[i] += current;
        if (board[i] === m) {
          start = i;
        }
        break;
      } else if (i === board.length - 1) {
        board.push(current);
        if (current === m) {
          start = i + 1;
        }
        break;
      } else {
        continue;
      }
    }
    // console.log(board);
  }
  console.log(board);
  console.log(board.length);
  return board.length;
}
// solution(4, [2, 3, 1]); // 2
// [2]
// [2, 3]
// [3, 3]

solution(5, [3, 5]); // 3
// [3]
// [3, 2]
// [3, 2, 3]
// [4, 2, 3]
