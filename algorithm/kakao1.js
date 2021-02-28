function solution(n, record) {
  // n개의 서버 생성
  let server = {};
  for (let i = 1; i <= n; i++) {
    server[i] = [];
  }

  // record를 매핑해서 하나의 배열로 만든다 d
  record
    .map((el) => el.split(" "))
    .forEach((el) => {
      let currentServer = server[el[0]];
      let userName = el[1];

      if (!currentServer.includes(userName)) {
        currentServer.push(userName);
        if (currentServer.length === 6) {
          currentServer.shift();
        }
      }
    });

  let result = [];
  for (let num in server) {
    result = result.concat(server[num]);
  }

  return result;
}

let record = [
  "1 a",
  "1 b",
  "1 abc",
  "3 b",
  "3 a",
  "1 abcd",
  "1 abc",
  "1 aaa",
  "1 a",
  "1 z",
  "1 q",
  "3 k",
  "3 q",
  "3 z",
  "3 m",
  "3 b",
];

let result = ["sina", "hana", "robel", "abc", "lynn"];

solution(3, record);
