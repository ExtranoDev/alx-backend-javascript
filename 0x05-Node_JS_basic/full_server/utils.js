#!/usr/bin/node
// accepts and validates database document

const fs = require('fs');

function readDatabase(path) {
  return new Promise ((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error(err));
      } else {
        data = data.split('\n');
        data.shift();
        data.pop();

        const proData = {};

        data.forEach((stud) => {
          const temp = stud.split(',');
          const tempKey = temp.slice(-1);
          if (tempKey in proData) {
            proData[tempKey].push(temp[0]);
          } else {
            proData[tempKey] = [temp[0]];
          }
        });
        resolve(proData);
      }
    });
  });    
}

module.exports = readDatabase;
