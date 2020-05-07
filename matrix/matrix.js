export class Matrix {
  constructor(unformattedRowsAndColumns = '') {
    this.matrixArray = this.rowColumnFormatter(unformattedRowsAndColumns);
    this.columnsArray = this.columnFormatter(this.matrixArray);
  }

  rowColumnFormatter(incomingMatrix = this.matrixArray) {
    let transformedMatrix = [];
      transformedMatrix = incomingMatrix.split('\n').map(e => e.split(' '));
      transformedMatrix = transformedMatrix.map(arr => {
        return arr.map(e => Number(e))
      })
    
    return transformedMatrix
  }

  columnFormatter(currentArray){
    let columnsArray = [];
    for (let j = 0; j < currentArray[0].length; j++) {
      for (let i = 0; i < currentArray.length; i++) {
        if (currentArray[i][j] !== undefined) columnsArray.push(Number(currentArray[i][j]));
      }
    }
    let columnsArray2d = []
    for (let n = 0; n <= columnsArray.length; n =+ currentArray.length) {
      columnsArray2d.push(columnsArray.splice(0, currentArray.length))
    }

    return columnsArray2d;
  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    return this.columnsArray;
  }

}