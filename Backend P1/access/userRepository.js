const { User } = require("../data/dbContext");

class UserRepository {
    constructor() {
    }
    async add(req) {
        await User.create(req);
    }

    async getById(id) {
        const user = await User.findOne({
            where: { id },
        });
        return address;
    }

    getAll() {
        return User.findAll();
    }

    async update(req) {
        const { id } = req.params;
        const { body } = req;

        await User.update(body, {
            where: { id },
            returning: true,
        });
    }

    async delete(id) {
        //const { id } = req;
        await User.destroy({
            where: { id },
            returning: true,
        });
    }
}

module.exports = UserRepository;