const binarySearch = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = parseInt((right+left) / 2);
        if (arr[middle] === target) {
            return middle
        }
        if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}


let output = binarySearch([3, 6, 7, 8, 9, 21, 31, 32], 31);

console.log(output); // --> 2





// 배열의 길이를 반을 나눈다
// 반을 나눈 인덱스를 조회했을 때 
// 타겟보다 클경우,slice로 해당인덱스부터 끝까지 추출한후 재귀.. 어떻게 인덱스를 계속 누적해나가지? 


// 타겟보다 작을경우, slice로 0부터 해당인덱스까지 추출한 후 재귀ㅣ
// 타겟과 같으면 해당 인덱스 리턴 



// const binarySearch = function (arr, target) {
//     let index = 0;

//     if (!arr.includes(target)) {
//         return -1
//     }

//     const recursion = (arr, target) => {
//         let divider = Math.floor(arr.length/2)

//         // base case
//         if (arr[divider] === target) {
//             index = index + divider;
//             return;
//         }
    
//         // recursive case
//         if (arr[divider] < target) {
//             index = index + divider;
//             recursion(arr.splice(divider), target)
//         }
        
//         if (arr[divider] > target) {
//             recursion(arr.splice(0,divider), target)
//         }
//     }
//     recursion(arr, target)

//     return index;

// };

