const addRandSymb = (nameRand, addressRand, cityRand, phoneRand) => {
  let nameWithErr = [];
  let nameAddressError = [];
  let nameCityError = [];
  let phoneError = [];
  const placeName = Math.floor(Math.random() * (nameRand.length - 0));
  const substr = String.fromCharCode(getRandomInt(1072, 1103));
  if (nameWithErr.length > 0) {
    nameWithErr.splice(placeName, 0, substr);
  } else {
    nameWithErr = nameRand.split('');
    nameWithErr.splice(placeName, 0, substr);
  }

  const placeAddress = Math.floor(Math.random() * (addressRand.length - 0));
  const substrAddress = String.fromCharCode(getRandomInt(1072, 1103));
  if (nameAddressError.length > 0) {
    nameAddressError.splice(placeName, 0, substr);
  } else {
    nameAddressError = addressRand.split('');
    nameAddressError.splice(placeAddress, 0, substrAddress);
  }

  const placeCity = Math.floor(Math.random() * (cityRand.length - 0));
  const substrCity = String.fromCharCode(getRandomInt(1072, 1103));
  if (nameCityError.length > 0) {
    nameCityError.splice(placeName, 0, substr);
  } else {
    nameCityError = cityRand.split('');
    nameCityError.splice(placeCity, 0, substrCity);
  }

  const placePhone = Math.floor(Math.random() * (phoneRand.length - 0));
  const substrPhone = String.fromCharCode(getRandomInt(48, 57));
  if (phoneError.length > 0) {
    phoneError.splice(placeName, 0, substrPhone);
  } else {
    phoneError = phoneRand.split('');
    phoneError.splice(placePhone, 0, substrPhone);
  }

  const newName = nameWithErr.join('');
  const newAddress = nameAddressError.join('');
  const newCity = nameCityError.join('');
  const newPhone = phoneError.join('');

  return { newName, newAddress, newCity, newPhone };
};

function generateRandWord() {
  const randWord = [];
  [...Array(10)].map((item) => {
    randWord.push(String.fromCharCode(getRandomInt(1072, 1103)));
  });
  return randWord.join('');
}
function generateRandNum() {
  const randNum = [];
  [...Array(10)].map((item) => {
    randNum.push(String.fromCharCode(getRandomInt(48, 57)));
  });
  return randNum.join('');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { addRandSymb, generateRandWord, generateRandNum };
