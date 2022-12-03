class AuthUsecase {
  constructor(userRepo, bycrpt, generateToken) {
    this.userRepo = userRepo;
    this.bycrpt = bycrpt;
    this.generateToken = generateToken;
  }

  async register(userData) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };
    if (userData.pin !== userData.confirmPin) {
      result.reason = 'pin and confirm Pin not match';
      return result;
    }

    userData.pin = this.bycrpt.hashSync(userData.pin, 10);

    const user = await this.userRepo.register(userData);

    const resUser = await this.userRepo.login(userData.pin);
    const userValue = {
      id: resUser.id,
      token: this.generateToken(user),
    };
    result.isSuccess = true;
    result.data = userValue;

    return result;
  }

  async login(pin) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const user = await this.userRepo.login(pin);
    if (user === null) {
      result.reason = 'user not available';
      return result;
    }
    if (!this.bycrpt.compareSync(pin, user.pin)) {
      result.reason = 'incorect pin';
      return result;
    }

    const userValue = {
      id: user.id,
      name: user.name,
      token: this.generateToken(user),
    };
    result.isSuccess = true;
    result.statusCode = 200;
    result.data = userValue;
  }
}

module.exports = AuthUsecase;
