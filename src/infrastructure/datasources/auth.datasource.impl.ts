// implementar el AuthDatasource

import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
    async login(email: string, password: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        // desestructuracion de la instancia de RegisterUserDto
        const { name, email, password } = registerUserDto;

        try {
            // 1 . verificar si el correo existe

            //2 . Hash del password
            //3 Mapear la respuesta a nuestra entidad

            return new UserEntity("1", name, email, password, ["ADMIN_ROLE"]);
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }
}
