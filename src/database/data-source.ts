import {DataSource} from "typeorm";
import "reflect-metadata";

const Appdatasource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "duque",
    password: "2312",
    database: 'rentx',
    entities:[],
    migrations:["./src/database/migrations/*.ts"]
});

export function createConnection(host = "database"): Promise<DataSource> {
    return Appdatasource.setOptions({host}).initialize();
}

export default Appdatasource;




