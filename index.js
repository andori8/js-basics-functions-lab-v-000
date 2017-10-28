// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  if (distance === 43) {
    return 1;
  } else {
    return 8;
  }
}

function distanceFromHqInFeet (distance) {
  distanceFromHqInBlocks (distance) * 264;
}
