// returnFirstTwoDrivers()
// should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (drivers) {
  if (drivers.length >= 2) {
    return [drivers[0], drivers[1]];
  } else {
    return "there is less than two drivers";
  }
};

//  returnLastTwoDrivers()
// should return an array of the last two drivers
const returnLastTwoDrivers = function (drivers) {
  if (drivers.length >= 2) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
  } else {
    return "there is less than two drivers";
  }
};

// selectingDrivers
// 1) has the `returnFirstTwoDrivers` function to as its first element
// 2) has the `returnLastTwoDrivers` function to as its last element
// 3) allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()
// 1) returns a function
// 2) should multiply a given value using the created multiplier
const createFareMultiplier = function (multiplier) {
  const fareMultiplier = (fare) => fare * multiplier;
  return fareMultiplier;
};

// fareDoubler()
// 1) is a function
// 2) doubles fares
const fareDoubler = createFareMultiplier(2);

// fareTripler()
// 1) is a function
// 2) triples fares
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers(arrayOfDrivers, function)
// 1) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// 2) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const selectDifferentDrivers = function (drivers, callback) {
  return callback(drivers);
};
