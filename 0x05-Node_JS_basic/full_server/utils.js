#!/usr/bin/node
// accepts and validates database document

const fs = require('fs');

function readDatabase(path) {
  return new Promise ((resolve, reject) => {
    try {
      data = fs.readFile(path, 'utf-8');
    } catch (err) {
      reject(err.message);
    }

    data = data.split('\n');
    data.shift();
    data.pop();
    const proData = {};

    data.forEach((stud) => {
      const temp = stud.split(',');
      const tempKey = temp.slice(-1);
      if (tempKey in proData) {
        proData[tempKey].names += `, ${temp[0]}`;
      } else {
        proData[tempKey] = { names: temp[0] };
      }
    });
    resolve(proData);
  });
}

module.exports = readDatabase;
