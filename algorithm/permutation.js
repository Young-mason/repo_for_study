const population = "ABCDE";

function permutation(population, pickNum) {
  const result = [];

  const aux = (str, acc) => {
    // base case
    if (acc.length === pickNum) {
      result.push(acc);
      return;
    }

    // recursive case
    for (let idx = 0; idx < str.length; idx++) {
      let element = str[idx];
      let current = str.slice();
      current = current.slice(0, idx) + current.slice(idx + 1);
      aux(current, acc + element);
    }
  };

  aux(population, "");
  console.log(result);
  return result;
}

permutation(population, 3); // [1,2,3]

// 중복 순열

function permutation(population, pickNum) {
  const result = [];

  const aux = (str, acc) => {
    // base case
    if (acc.length === pickNum) {
      result.push(acc);
      return;
    }

    // recursive case
    for (let idx = 0; idx < str.length; idx++) {
      aux(str, acc + str[idx]);
    }
  };

  aux(population, "");
  return result;
}
