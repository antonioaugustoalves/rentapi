import {DataSource} from "typeorm";
import "reflect-metadata"

const datasource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "database",
    username: "duque",
    password: "2312",
    database: 'rentx',
    entities:[],
    migrations:["./src/database/migrations/*.ts"]
});

datasource.initialize().then(async () => {
    console.log("Database is running");
}).catch((erro) =>{
    console.log(erro);
});


