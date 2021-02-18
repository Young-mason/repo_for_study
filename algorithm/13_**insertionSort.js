const findSortedIndexAndInsert = function (arr, target) {
    let i = 0;
    while (target > arr[i]) { i++ }
    arr.splice(i, 0, target)
    return arr
};

const callbackAndfindSortedIndexAndInsert = function (arr, target, callback) {
    let i = 0;
    while (callback(target) > callback(arr[i])) { i++ }
    arr.splice(i, 0, target)
    return arr
}


const insertionSort = function (arr, callback) {
    // TODO: 여기에 코드를 작성합니다.
    let sortedArr = [];

    if (callback) {
        var mappedArr = arr.map((el) => {
            return callback(el)
        })
        while (arr.length !== 1) {
            if (mappedArr[0] < mappedArr[1]) {
                callbackAndfindSortedIndexAndInsert(sortedArr, arr[0], callback)
                arr.splice(0, 1)
            } else {
                callbackAndfindSortedIndexAndInsert(sortedArr, arr[1], callback)
                arr.splice(1, 1)
            }
        }
        callbackAndfindSortedIndexAndInsert(sortedArr, arr[0], callback)
    } else {
        while (arr.length !== 1) {
            if (mappedArr[0] < mappedArr[1]) {
                findSortedIndexAndInsert(sortedArr, arr[0])
                arr.splice(0, 1)
            } else {
                findSortedIndexAndInsert(sortedArr, arr[1])
                arr.splice(1, 1)
            }
        }
        findSortedIndexAndInsert(sortedArr, arr[0])
    }


    return sortedArr
    // 1. arr[i], arr[i+1] 비교해서 더 작은거를 넣는다
    // 2. 넣을때, 본인의 위치를 잘 찾아줘야함
    //  2.1. sortedArr 을 순회하면서 자기보다 큰수가 나오기 전 인덱스에 넣는다
    //  2.2. 이걸 함수로 만들자.  arr, number를 받아서 자기보다 큰수가 나오기 전 인덱스에 넣어주는 함수

}

let callback = function (item) { item * item }
let output = insertionSort([-10, -11, 2, 29], callback);
console.log(output)