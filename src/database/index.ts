import {DataSource} from "typeorm";

const datasource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "database",
    username: "duque",
    password: "2312",
    database: 'rentx'
});

datasource.initialize().then(async () => {
    console.log("Database is running");
}).catch((erro) =>{
    console.log(erro);
});


