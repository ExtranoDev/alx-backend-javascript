export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = false;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
