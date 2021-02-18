const asyncMap = function (tasks, final) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    let cnt = 0;

    tasks.forEach((task, idx) => {
        task((data) => {
            result[idx] = data
            cnt++;
            if (cnt === tasks.length) {
                final(result);
            }
        })
    })
};

function asyncMap(tasks, final) {
    const promises = tasks.map((task) => new Promise(task));
    
    return Promise.all(promises).then((results) => final(results));
}