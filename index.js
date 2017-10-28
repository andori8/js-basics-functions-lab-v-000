// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber > 42) {
    return streetNumber - 42;
  } else {
    return 42 - streetNumber;
  }
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  }
}
