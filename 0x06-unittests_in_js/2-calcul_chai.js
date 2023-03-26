#!/usr/bin/node
// Basic number processing function


function calculateNumber(type, a, b) {
  const types = ['SUM', 'SUBTRACT', 'DIVIDE'];
  if (types.includes(type)){
    a = Math.round(a);
    b = Math.round(b);
    switch (type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'DIVIDE':
        if (b === 0) return 'Error';
        return a / b;
      default:
        break;
    }  
  }
}

module.exports = calculateNumber;
