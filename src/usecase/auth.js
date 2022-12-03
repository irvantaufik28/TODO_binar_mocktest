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
        return result
    }

    userData.pin = this.bycrpt.hashSync(userData.pin, 10);

    const user = await this.userRepo.register(userData);
    const token = this.generateToken(user)

    const resUser = await this.userRepo.getUserByPin(userData.pin);
    const userValue = {
        id: resUser.id,
        token: token
    }

    result.data = userValue;
    return result;
  }

  async login(userData) {
    let result = {
        isSuccess: false,
        statusCode: 404,
        reason: null,
        data: null,
      };


  }
}

module.exports = AuthUsecase;
