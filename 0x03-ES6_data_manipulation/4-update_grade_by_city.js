// Create a function updateStudentGradeByCity
// returns an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      newGrades.filter((newGrade) => newGrade.studentId === student.id)
        /* eslint-disable array-callback-return */
        .map((newGrade) => {
          student.grade = newGrade.grade; // eslint-disable-line
        });
      if (!student.grade) student.grade = 'N/A'; // eslint-disable-line
      return student;
    });
}
