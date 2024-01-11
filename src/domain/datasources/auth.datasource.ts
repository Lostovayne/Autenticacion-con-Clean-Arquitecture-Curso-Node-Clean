import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AuthDatasource {
    abstract login(email: string, password: string): Promise<UserEntity>;
    // en vez de mandar directamente los datos email...etc , se manda una instancia del Dto
    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
