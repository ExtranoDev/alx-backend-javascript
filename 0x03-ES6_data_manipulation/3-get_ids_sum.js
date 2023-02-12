// Create a function getStudentIdsSum
// returns the sum of all the student ids
export default function getStudentIdsSum(students) {
  return students.reduce((aV, student) => aV + student.id, 0);
}
