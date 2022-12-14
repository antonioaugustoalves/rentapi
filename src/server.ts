import express from "express";
import {router} from "./routes"
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import Appdatasource, { createConnection } from "./database/data-source";

createConnection();
const app = express();
const port = 3333;


createConnection();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.get("/", (request, response) => {
    response.status(200).json({message:"OK"});
});

app.listen(port, () =>{
    console.log("Server is running on port and reload "+ port)
    console.log("Reload working...");
});



