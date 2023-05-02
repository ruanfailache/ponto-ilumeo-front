import { UserModel } from "@/data";

export interface UserRepository {
    getCurrentUser(): Promise<UserModel>;

    validateRegistrationCode(registrationCode: string): Promise<void>;
}
