/*

### 최대 공약수  (Greatest Common Divisor)

둘 이상의 공약수 중에서 최대인 수 


### 최소 공배수 (Least Common Multiple)

둘 이상의 공배수 중에서 최소인 수
두 수의 곱에서 최대 공약수로 나누어주면 최소공배수가 됨

*/

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

let LCM = (num1 * num2) / gcd;
