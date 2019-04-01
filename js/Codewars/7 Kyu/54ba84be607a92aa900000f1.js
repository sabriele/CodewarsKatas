/* Isograms (7 Kyu) */

// Original submission
function isIsogram(str) {
  let isogramArray = str.toLowerCase().split("");
  while (isogramArray.length !== 0) {
    for (let i = 0; i < isogramArray.length; i++) {
      for (let j = i + 1; j < isogramArray.length; j++) {
        if (isogramArray[i] !== isogramArray[j]) {
          continue;
        } else {
          return false;
        }
      }
    }
    return true;
  }
  return true;
}

// Experimenting with removal of curly braces in for- and if- loops
function isIsogram(str) {
  let isogramArray = str.toLowerCase().split("");
  if (isogramArray.length !== 0) {
    for (let i = 0; i < isogramArray.length; i++)
      for (let j = i + 1; j < isogramArray.length; j++)
        if (isogramArray[i] !== isogramArray[j]) continue;
        else return false;
    return true;
  } else return true;
}
