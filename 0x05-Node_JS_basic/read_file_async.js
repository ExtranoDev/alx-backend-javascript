#!/usr/bin/node
// Reading a file synchronously with Node JS

const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  data = data.split('\n');
  data.shift();
  data.pop();
  const proData = {};

  data.forEach((stud) => {
    const temp = stud.split(',');
    const tempKey = temp.slice(-1);
    if (tempKey in proData) {
      proData[tempKey].count += 1;
      proData[tempKey].names += `, ${temp[0]}`;
    } else {
      proData[tempKey] = { count: 1, names: temp[0] };
    }
  });
  const printer = [];
  for (const data in proData) {
    if (data) {
      printer.push(`Number of students in ${data}: ${proData[data].count}. List: ${proData[data].names}`);
    }
  }
  return [printer, data.length];
}

module.exports = countStudents;
