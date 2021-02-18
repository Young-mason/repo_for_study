// 정렬되어 있는 두 배열을 새로운 배열에 병합하여 재정렬하는 알고리즘
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// 각 배열 요소가 1개씩이 될때까지 반을 나누는 재귀함수를 구현한다
// 각 요소를 위에서 만든 merge 함수를 통해 다시 하나로 병합시킨다
const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

// TimeComplexity : O(n log n)
