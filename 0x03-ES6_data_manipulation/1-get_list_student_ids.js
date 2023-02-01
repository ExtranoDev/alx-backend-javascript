export default function getListStudentIds(args) {
  if (Array.isArray(args)) {
    const ids = [];
    for (const arg of args) {
      ids.push(arg.id);
    }
    return ids;
  }
  return [];
}
