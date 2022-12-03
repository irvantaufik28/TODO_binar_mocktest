const { User } = require('../models')

class AuthRepo {
    constructor() {
        this.UserModel = User;
    }

    async register(userData) {
        const user = await this.UserModel.create(userData)
        return user
    }
    
    async login(pin) {
        const user = await this.UserModel.findOne({
            where: { pin },
        })
        return user
    }
}

module.exports = AuthRepo;