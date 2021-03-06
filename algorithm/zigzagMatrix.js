function solution(n, r, c) {
  function Matrix(ary) {
    this.mtx = ary;
    this.height = ary.length;
    this.width = ary[0].length;
  }

  Matrix.prototype.toString = function () {
    var s = [];
    for (var i = 0; i < this.mtx.length; i++) s.push(this.mtx[i].join(","));
    return s.join("\n");
  };

  // returns a new matrix
  Matrix.prototype.transpose = function () {
    var transposed = [];
    for (var i = 0; i < this.width; i++) {
      transposed[i] = [];
      for (var j = 0; j < this.height; j++) {
        transposed[i][j] = this.mtx[j][i];
      }
    }
    return new Matrix(transposed);
  };

  function ZigZagMatrix(n) {
    this.height = n;
    this.width = n;

    this.mtx = [];
    for (var i = 0; i < n; i++) this.mtx[i] = [];

    var i = 1,
      j = 1;
    for (var e = 1; e < n * n; e++) {
      this.mtx[i - 1][j - 1] = e;
      if ((i + j) % 2 == 0) {
        // Even stripes
        if (j < n) j++;
        else i += 2;
        if (i > 1) i--;
      } else {
        // Odd stripes
        if (i < n) i++;
        else j += 2;
        if (j > 1) j--;
      }
    }
  }

  ZigZagMatrix.prototype = Matrix.prototype;

  let result = new ZigZagMatrix(n).mtx;
  return result[r - 1][c - 1];
}

console.log(solution(5, 3, 2));
