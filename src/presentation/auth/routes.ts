//Rutas Auth

import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {
    static get routes(): Router {
        //* Definir controlador de rutas
        const router = Router();

        //* instancias
        const authDatasource = new AuthDatasourceImpl();
        const authRepository = new AuthRepositoryImpl(authDatasource);
        //* crear instancia del controlador
        const controller = new AuthController(authRepository);

        //* Definir rutas principales del auth
        router.post("/login", controller.loginUser);
        router.post("/register", controller.registerUser);

        return router;
    }
}
