class AuthUsecase {
  constructor(userRepo, bycrpt) {
    this.userRepo = userRepo;
    this.bycrpt = bycrpt;
  }

  async register(userData) {
    let result = {
      isSuccess: true,
      statusCode: 201,
      reason: null,
      data: null,
    };

    const user = await this.userRepo.register(userData);
    result.data = user;
    return result;
  }
}

module.exports = AuthUsecase;
