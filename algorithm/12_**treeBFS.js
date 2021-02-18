let bfs = function (node) {
    let result = [];
    result.push(node.value)
    // children이 있으면, 
    // 1. children의 모든 요소를 배열에 넣는다
    // 2. 배열의 첫번째부터 순회하면서, 재귀함수 실행
    let pushChild = function(node) {
        for (let child of node.children) {
            result.push(child.value);
        }
    }


    let recursion = function(node) {
        // base case
        if (!node.children) {
            return;
        }
        
        // recursive case
        if (node.children) {
            pushChild(node); // 자식 노드를 모두 배열에 넣는다
            node.children.forEach((el) => {
                if (el.children) {
                    pushChild(el)
                }
            })
        }


    }


    recursion(node)

    return result;
  };
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };

  /*
            1
       2    3    4
      5 6  9 10    13
     7  8     11    12
  */

 const root = new Node(1);
 root.addChild(new Node(2));
 root.addChild(new Node(3));
 root.addChild(new Node(4));
 root.children[0].addChild(new Node(5));
 root.children[0].addChild(new Node(6));
 root.children[0].children[0].addChild(new Node(7));
 root.children[0].children[1].addChild(new Node(8));
 root.children[1].addChild(new Node(9));
 root.children[1].addChild(new Node(10));
 root.children[1].children[1].addChild(new Node(11));
 root.children[1].children[1].addChild(new Node(12));
 root.children[2].addChild(new Node(13));

console.log(bfs(root)) 
 const expected = [1, 2, 3, 4, 5, 6, 9, 10, 13, 7, 8, 11, 12];