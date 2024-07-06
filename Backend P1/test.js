const UserRepository = require("./access/userRepository");
const { faker } = require('@faker-js/faker');
class App {
    constructor() {
    }

    async init() {
        try {
            let userRepository = new UserRepository();

            for (let i = 1; i <= 10; i++) {
                let user = {
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                    password: faker.internet.password(),
                };

                await userRepository.add(user);
            }

        } catch (error) {
            console.error("Erro na inicialização do User", error);
        }

    }
}

const app = new App();
app.init();