

// record ["1 a","1 b","1 abc","3 b","3 a","1 abcd","1 abc","1 aaa","1 a","1 z","1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]
// result ["abc", "abcd", "aaa", "z", "q", "k", "q", "z", "m", "b"]


function solution (n, record) {
    var answer = [];

    //서버에는 5개 계정을 생성할 수 있음
    //record를 서버명과 이름으로 분리하여 배열로 만든다
    //ex UserList -> [[1, 'fracta']]
    // userList 를 순회하면서, 유저들을 서버 객체에 저장한다
    //   1: ['fractica', 'sina']
    //   2: ;- - -
    // 만약 value 배열에 이미 이름이 있다면, 패쓰
    // 만약 value 배열의 length가 5이면, 0번째 인덱스를 날리고 푸쉬한다
    
    // 전체 객체를 순회하면서 서버순으로 하나의 배열로 만든다

    const server = {};
    const userList = [];

    record.forEach((user) => {
        let v = user.split(" ")
        userList.push(v)
    })

    // console.log(userList)
    for (let i=0; i<n; i++) {
        server[i+1] = []
    }

    userList.forEach((user) => {
        let serverNum = user[0]
        let userName = user[1]
        
        if (server[serverNum].indexOf(userName) === -1) {
            server[serverNum].push(userName)    
            if (server[serverNum].length === 6) {
                server[serverNum].shift();
            }
        }
    })

    for (let s in server) {
        for (let user of server[s]) {
            answer.push(user)
        }
    }

    return answer
}

let record = ["1 fracta", "1 sina", "1 hana", "1 robel", "1 abc", "1 sina", "1 lynn"]
let result = ["sina", "hana", "robel", "abc", "lynn"]

console.log(solution(4, record))