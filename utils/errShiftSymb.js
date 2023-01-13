const errShiftSymb = (nameRand, addressRand, cityRand, phoneRand, secondaryAddress) => {
  let nameWithErr = [];
  let addressWithErr = [];
  let cityWithErr = [];
  let phoneWithErr = [];

  let resultName = [];
  let resultAddress = [];
  let resultCity = [];
  let resultPhone = [];

  const placeName = Math.floor(Math.random() * (nameRand.length - 0));
  nameWithErr = nameRand.split('');
  nameWithErr.splice(placeName, 2, nameRand[placeName + 1], nameRand[placeName]);
  resultName = nameWithErr;

  const placeAddress = Math.floor(Math.random() * (addressRand.length - 0));
  addressWithErr = addressRand.split('');
  addressWithErr.splice(placeAddress, 2, addressRand[placeAddress + 1], addressRand[placeAddress]);
  resultAddress = addressWithErr;

  const placeCity = Math.floor(Math.random() * (cityRand.length - 0));
  cityWithErr = cityRand.split('');
  cityWithErr.splice(placeCity, 2, cityRand[placeCity + 1], cityRand[placeCity]);
  resultCity = cityWithErr;

  const placePhone = Math.floor(Math.random() * (phoneRand.length - 0));
  phoneWithErr = phoneRand.split('');
  phoneWithErr.splice(placePhone, 2, phoneRand[placePhone + 1], phoneRand[placePhone]);
  resultPhone = phoneWithErr;

  const user = {
    newName: resultName.join(''),
    newAddress: resultAddress.join(''),
    newCity: resultCity.join(''),
    newPhone: resultPhone.join(''),
  };
  return {
    newName: user.newName,
    newAddress: user.newAddress,
    newCity: user.newCity,
    newPhone: user.newPhone,
  };
};

module.exports = { errShiftSymb };
