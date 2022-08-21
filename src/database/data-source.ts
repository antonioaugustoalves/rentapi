import {DataSource} from "typeorm";
import "reflect-metadata";

const Appdatasource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "database",
    username: "duque",
    password: "2312",
    database: 'rentx',
    entities:[],
    migrations:["./src/database/migrations/*.ts"],
    migrationsTableName:"rentx_"
});

export function createConnection(host = "database"): Promise<DataSource> {
    return Appdatasource.setOptions({host}).initialize();
}

export default Appdatasource;




