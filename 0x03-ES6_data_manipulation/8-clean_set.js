// function named cleanSet
// returns a string of all the set values
// start with a specific string
export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string' || !(set instanceof Set)) return '';
  const cleanString = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      cleanString.push(value.slice(startString.length));
    }
  });
  return cleanString.join('-');
}
