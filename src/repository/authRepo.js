const { User } = require('../models');

class AuthRepo {
  constructor() {
    this.UserModel = User;
  }

  async login(pin) {
    const user = await this.UserModel.findOne({
      where: { pin },
    });
    return user;
  }
}

module.exports = AuthRepo;
