require("dotenv").config();

enum Environments {
    local_environment = 'local',
    prod_environment = 'prod'
}

class Environment {
    private environment: String;
    constructor(environment: String) {
        this.environment = environment;
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        }else {
            return 5000;
        }
    }

    getDBURL(): string {
        if (this.environment === Environments.prod_environment) {
            return process.env.PROD_DATABASE_URL;
        } else {
            return process.env.LOC_DATABASE_URL;
        }
    }
}

export default new Environment(Environments.local_environment);