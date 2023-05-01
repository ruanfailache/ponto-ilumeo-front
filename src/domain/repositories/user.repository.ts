import { UserModel } from "@/data";

export abstract class UserRepository {
    abstract getCurrentUser(): Promise<UserModel>;

    abstract validateRegistrationCode(registrationCode: string): Promise<void>;
}
