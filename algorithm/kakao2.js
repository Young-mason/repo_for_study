function solution(m, v) {
    var answer = 0;
    let tempArr = [m];
    let storage = [];
    let count = 0;


    for (let val of v) {
        for (let i=0; i<tempArr.length; i++) {
            // 쌓을 수 있다
            if (tempArr[i] >= val) {
                tempArr[i] = tempArr[i]-val;

                if (tempArr[i] === 0) {
                    // i번째 인덱스까지 모두 배열에서 제거
                    for (let j=0; j<=i; j++) {
                        storage.push(tempArr[0]);
                        tempArr.shift();
                    }
                    tempArr.push(m);
                }

                break;
            }
            // 쌓을 수 없다
            else {
                if (i === tempArr.length -1) {
                    tempArr.push(m);
                }
                continue;
            }
            
        }
    }

    count = storage.length + tempArr.length
    // tempArr에 m 초기값이 포함되어있다면 - 고고

    if (tempArr.indexOf(m) > -1) {
        count --;
    }
    console.log(storage)
    console.log(tempArr)
    return count;
    
}


console.log(solution(4, []))
// 6줄.. 