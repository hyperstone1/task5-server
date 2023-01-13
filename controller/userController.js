const { faker } = require('@faker-js/faker');
const { errDelSymb } = require('../utils/errDelSymb');
const { addRandSymb } = require('../utils/addRandSymb');
const { errShiftSymb } = require('../utils/errShiftSymb');
const { validationLength } = require('../utils/validationLength');
const { COUNT_PER_PAGE, INIT_COUNT } = require('../constants');

class UserController {
  async getUsers(req, res) {
    const users = [];
    const { locale, errProb, seed, page } = req.body;
    faker.setLocale(locale);

    const isInitialPage = page === 1;
    const seedParam = isInitialPage ? seed : seed + page;
    faker.seed(seedParam);

    let counterId = isInitialPage ? 0 : 10 * page;
    const lengthOfIteration = isInitialPage ? INIT_COUNT : COUNT_PER_PAGE;

    try {
      [...Array(lengthOfIteration)].map((item) => {
        const d = Math.random();
        let randomName = faker.name.fullName();
        let randomAddress = faker.address.streetAddress();
        let randomCity = faker.address.city();
        let randomPhone = '';
        let secondaryAddress = '';
        // let userWithErr = {};
        ++counterId;
        if (locale === 'ru') {
          randomPhone = faker.phone.number('+7 ###-####-###');
        }
        if (locale === 'en') {
          randomPhone = faker.phone.number('+1 ### ###-####');
        }
        if (locale === 'sk') {
          randomPhone = faker.phone.number('+421 ### ######');
        }
        if (d < 0.5) {
          secondaryAddress = faker.address.secondaryAddress();
        } else {
          secondaryAddress = '';
        }
        if (errProb > 0) {
          const userWithErr = generateInvalid(
            errProb,
            randomName,
            randomAddress,
            randomCity,
            randomPhone,
            secondaryAddress,
          );
          randomName = userWithErr.nameRand;
          randomAddress = userWithErr.addressRand;
          randomCity = userWithErr.cityRand;
          randomPhone = userWithErr.phoneRand;
        }

        users.push({
          number: counterId,
          id: faker.datatype.uuid().slice(0, 18),
          name: randomName,
          address: ` ${randomCity},${randomAddress}, ${secondaryAddress}`,
          phone: randomPhone,
        });
      });
      const newUsers = validationLength(users);

      res.json(newUsers);
    } catch (error) {
      res.json(error);
    }
  }
}

function generateInvalid(
  errProb,
  randomName,
  randomAddress,
  randomCity,
  randomPhone,
  secondaryAddress,
) {
  if (errProb % 1 === 0) {
    const invalidData = getRandomError(
      errProb,
      randomName,
      randomAddress,
      randomCity,
      randomPhone,
      secondaryAddress,
    );
    return invalidData;
  } else {
    const invalidData = getRandomError(
      errProb,
      randomName,
      randomAddress,
      randomCity,
      randomPhone,
      secondaryAddress,
    );
    return invalidData;
  }
}

function getRandomError(
  errProb,
  randomName,
  randomAddress,
  randomCity,
  randomPhone,
  secondaryAddress,
) {
  let nameRand = randomName;
  let addressRand = randomAddress;
  let cityRand = randomCity;
  let phoneRand = randomPhone;
  const probability = Math.random();
  const isErrProb = errProb % 1 !== 0 && probability < 0.5 ? errProb + 0.5 : errProb;
  const newProb = isErrProb % 1 !== 0 ? isErrProb - 0.5 : isErrProb;

  for (let i = 0; i < newProb; i++) {
    const prob = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (prob === 1) {
      const { newName, newAddress, newCity, newPhone } = addRandSymb(
        nameRand,
        addressRand,
        cityRand,
        phoneRand,
        secondaryAddress,
      );
      nameRand = newName;
      addressRand = newAddress;
      cityRand = newCity;
      phoneRand = newPhone;
    }

    if (prob === 2) {
      const { newName, newAddress, newCity, newPhone } = errDelSymb(
        nameRand,
        addressRand,
        cityRand,
        phoneRand,
        secondaryAddress,
      );
      nameRand = newName;
      addressRand = newAddress;
      cityRand = newCity;
      phoneRand = newPhone;
    }

    if (prob === 3) {
      const { newName, newAddress, newCity, newPhone } = errShiftSymb(
        nameRand,
        addressRand,
        cityRand,
        phoneRand,
        secondaryAddress,
      );
      nameRand = newName;
      addressRand = newAddress;
      cityRand = newCity;
      phoneRand = newPhone;
    }
  }
  return { nameRand, addressRand, cityRand, phoneRand };
}

module.exports = new UserController();
