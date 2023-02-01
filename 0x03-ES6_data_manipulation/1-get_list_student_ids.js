export default function getListStudentIds(args) {
  if (Array.isArray(args)) {
    return args.map((arg) => arg.id);
  }
  return [];
}
