#!/usr/bin/node
// Students controller

const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    response.statusCode = 200;
    response.write('This is the list of our students');
    try {
      const db = process.argv[2];
      const studData = readDatabase(db);
      for (const [key, val] of studData) {
        val = val.split(',');
        const temp = `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`;
        response.end(temp);
      }
    } catch (err) {
      response.statusCode = 500;
      response.end('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 500;
    const major = request.params.major.toUpperCase();
    majorPar = ['CS', 'SWE'];
    if (majorPar.includes(major)) {
      try {
        const db = process.argv[2];
        const studData = readDatabase(db);
        response.statusCode = 200;
        response.end(`List: ${studData[major]}`);
      } catch (err) {
        response.end('Cannot load the database');
      }
    } else {
      response.end('Major parameter must be CS or SWE');
    }
  }
}
