// Controladores de las rutas Auth

//* se define la logica usando abstracciones de dominio
//* en routes cuando se llame el new AuthController en routes
//* se crean instancias de AuthRepositoryImpl el cual usa un AuthDatasourceImpl

import { Request, Response } from "express";
import { AuthRepository, RegisterUserDto } from "../../domain";

export class AuthController {
    //* DI
    constructor(private readonly authRepository: AuthRepository) {}

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if (error) return res.status(400).json({ error });
        //* Usar el Repository para registrar el usuario
        this.authRepository
            .register(registerUserDto!)
            .then((user) => res.json(user))
            .catch((error) => res.status(500).json({ error }));
    };

    loginUser = (req: Request, res: Response) => {
        res.json("login controller");
    };
}
