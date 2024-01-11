// implementa el Autrepository

import { UserEntity, RegisterUserDto, AuthRepository, AuthDatasource } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
    //* implementa el datasource el que tiene las reglas
    constructor(private readonly authDatasource: AuthDatasource) {}

    async login(email: string, password: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto);
    }
}
