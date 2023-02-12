// function named cleanSet
// returns a string of all the set values
// start with a specific string
export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const cleanString = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      cleanString.push(value.split(startString)[1]);
    }
  });
  return cleanString.reduce((aV, cV) => `${aV}-${cV}`);
}
