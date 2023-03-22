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
  const pro_data = new Object();
  
  data.forEach((stud) => {
    const temp = stud.split(',');
    const temp_key = temp.slice(-1);
    if (temp_key in pro_data) {
      pro_data[temp_key].count += 1;
      pro_data[temp_key].names += `, ${temp[0]}`;
    } else {
      pro_data[temp_key] = {'count': 1, 'names': temp[0]};
    }
  });
  
  console.log(`Number of students: ${data.length}`);
  for (const field in pro_data) {
    console.log(`Number of students in ${field}: ${pro_data[field].count}. List: ${pro_data[field].names}`);
  }
}

module.exports = countStudents;
