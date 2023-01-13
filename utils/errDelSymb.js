function errDelSymb( nameRand, addressRand, cityRand, phoneRand, secondaryAddress) {
  let nameWithErr = [];
  let nameAddressError = [];
  let nameCityError = [];
  let phoneError = [];

  const placeName = Math.floor(Math.random() * (nameRand.length - 0));
  nameWithErr = nameRand.split('');
  nameWithErr.splice(placeName, 1);

  const placeAddress = Math.floor(Math.random() * (addressRand.length - 0));
  nameAddressError = addressRand.split('');
  nameAddressError.splice(placeAddress, 1);

  const placeCity = Math.floor(Math.random() * (cityRand.length - 0));
  nameCityError = cityRand.split('');
  nameCityError.splice(placeCity, 1);

  const placePhone = Math.floor(Math.random() * (phoneRand.length - 0));
  phoneError = phoneRand.split('');
  phoneError.splice(placePhone, 1);

  const user = {
    newName: nameWithErr.join(''),
    newAddress: nameAddressError.join(''),
    newCity: nameCityError.join(''),
    newPhone: phoneError.join(''),
  };

  return {
    newName: user.newName,
    newAddress: user.newAddress,
    newCity: user.newCity,
    newPhone: user.newPhone,
  };
}

module.exports = { errDelSymb };
