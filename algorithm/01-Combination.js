// // 중복이 허용되는 조합
// const getCombination = function (arr, selectNumber) {
//   const results = [];

//   const recursive = (acc, remain) => {
//     if (remain === 0) {
//       results.push(acc);
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       recursive(acc.concat(arr[i]), remain - 1);
//     }
//   };

//   recursive([], selectNumber);
//   return results;
// };

// const getCombination = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1); // 해당되는 fixed를 제외한 나머지 뒤
//     const combinations = getCombination(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다
//     const attached = combinations.map((combination) => [fixed, ...combination]); // 돌아온 조합에 떼 놓은 (fixed)값 붙이기
//     results.push(...attached);
//   });

//   return results;
// };

// let arr = ["A", "B", "C"];
// console.log(getCombination(arr, 3));
const population = "ABCDE";

function combination(population, pickNum) {
  const result = [];
  const aux = (str, lastIdx) => {
    // base case
    if (str.length === pickNum) {
      result.push(str);
      return;
    }
    // population = "ABCDE"
    // recursive case
    for (let idx = lastIdx + 1; idx < population.length; idx++) {
      aux(str + population[idx], idx);
    }
  };

  aux("", -1);
  console.log(result);
  return result;
}

combination(population, 3);
// result = [ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE]

// 조합의특징
// 무조건 작은애가 먼저 나온다 라는 원칙을 세운다!
// lastIdx 를 하나씩 옮겨줌으로써, 한번 방문했던 요소에는 다음 재귀에서 다시 방문하지 않는다
