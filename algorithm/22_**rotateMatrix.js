const rotateMatrix = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    
    for (let i=0; i<matrix.length; i++) {
        let tempArr = [];
        for (let j=matrix.length-1; j>=0; j--) {
            tempArr.push(matrix[j][i])   
        }
        result.push(tempArr)
    }

    return result;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix)
// console.log(rotatedMatrix[0][0]); // --> 13
// console.log(rotatedMatrix[3][2]); // --> 8
/*
[1,2,3]  --> [7,4,1]
[4,5,6]  --> [8,5,2]
[7,8,9]  --> [9,6,3]
*/