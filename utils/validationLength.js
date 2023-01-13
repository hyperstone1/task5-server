const { generateRandWord, generateRandNum } = require('./addRandSymb');

const validationLength = (users) => {
  const newUsers = users.map((user) => {
    if (user.name.length > 30) {
      user.name = user.name.substring(0, 30);
    }
    if (user.name.length < 10) {
      user.name = generateRandWord();
    }
    if (user.address.length > 35) {
      user.address = user.address.substring(0, 35);
    }
    if (user.address.length < 10) {
      user.address = generateRandWord();
    }
    if (user.phone.length > 25) {
      user.phone = user.phone.substring(0, 25);
    }
    if (user.phone.length < 10) {
      user.phone = generateRandNum();
    }

    return user;
  });
  return newUsers;
};

module.exports = { validationLength };
