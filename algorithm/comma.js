// 3자리수 마다 콤마 찍기
function pointer(num) {
  let result = "";
  let str = num.toString();

  let i = 0;
  let remainder = str.length % 3;

  while (i < str.length) {
    if (i % 3 === remainder && i !== 0) result += ",";
    result += str[i];
    i++;
  }

  return result;
}
