import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { Campaign } from "src/campaign/campaign.entity";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: "Ak@172855",
    database: 'socially',
    entities: [Campaign],
    synchronize: true
    // dropSchema: true
}

export default config;
