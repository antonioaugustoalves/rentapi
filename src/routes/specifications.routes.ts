import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";

const specificationsRoutes = Router();
import {createSpecificationController} from "../modules/cars/useCases/createSpecification";
import {listSpecificationsController} from "../modules/cars/useCases/listSpecification"

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
    
});

specificationsRoutes.get("/", (request, response) => {
   return listSpecificationsController.handle(request, response);
})

export {specificationsRoutes}