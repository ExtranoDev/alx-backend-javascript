export default function createIteratorObject(report) {
  const reportObj = Object.values(report.allEmployees);
  return reportObj.flat();
}
