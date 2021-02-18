const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    
    for (let i = 0; i<str.length; i++) {
        result.push(str[i]);
    }

    for (let i = 0; i<str.length; i++) {
        let temp = str[i];
        for (let j = 0; j<str.length; j++) {
            if (temp.indexOf(str[j]) === -1) {
                result.push(str[i]+str[j])
            }
        }
    }
    // return result;

    let isDuplicated = (arr, str) => {
        //str의 모든요소가 el에 있으면 true
        for (let el of arr) {
            if (el.length === str.length) {
                for (let i=0; i<str.length; i++) {
                    if (el.indexOf(str[i]) === -1) {
                        break;
                    }
                }
                //중복이 있다
                return true;
            }

        }
        // 중복이 없다
        return false;
    }
};

//[ 'abc', 'bc', 'bd' ] //   'cb'   


//이런 함수를 만들자
//str과, length를 입력받아서
//해당 길이만큼 중복없이 배열로 출력해주는 함수

// 만들고나면, i 가 str.length 가 될때까지 
// 함수를 실행시키면서 결과값을 누적 (concat)

// str을 순회하면서, 


let result = [];
for (let i=0; i<=str.length; i++) {
    let temp = '';
    if (temp.length === i) {
        result.push(temp)
        continue;
    }
    //temp의 길이가 i를 넘어가면 안된당
    for (let j = 0; j<str.length && temp.length; j++) {
        temp += 
    }

    // i 가 0일때
    // 빈 문자열
    

}


let printAll = (str, length) {

}



// 어떤 조건을 만족해야하냐
// 1. 길이가 같은 문자 중 자신을 포함하는게 없어야함 (순서 바뀐것 중복처리)
//  1-1. temp 문자열 안에서 중복검사
//  1-2. arr 내에서 중복검사 - 함수 만들어야될듯?

// 2. arr[i]는 알파벳 순서대로 정렬
// 3. arr은 사전식 순서로 정렬

  let output1 = powerSet('abc');
console.log(output1); // [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]

let output2 = powerSet('jjump');
console.log(output2); // ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]

let output = powerSet('ab');
console.log(output2); // ['', 'a', 'b', 'ab']