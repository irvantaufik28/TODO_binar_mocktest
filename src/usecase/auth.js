class AuthUsecase {
  constructor(userRepo, token) {
    this.userRepo = userRepo;
    this.token = token;
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

    const userValue = {
      id: user.id,
      name: user.name,
      token: this.token(user),
    };
    result.isSuccess = true;
    result.statusCode = 200;
    result.data = userValue;
    return result;
  }
}

module.exports = AuthUsecase;
