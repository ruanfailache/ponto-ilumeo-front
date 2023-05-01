import { UserModel } from "@/data";
import { UserRepository } from "@/domain";

const users: UserModel[] = [
    {
        name: "Ruan",
        registrationCode: "#45XXFMF",
    },
    {
        name: "Eliane",
        registrationCode: "#52FEFO9",
    },
    {
        name: "Subaru",
        registrationCode: "#R32GHL7",
    },
];

export class UserRepositoryImpl extends UserRepository {
    private user?: UserModel;

    async getCurrentUser() {
        if (!this.user) {
            throw "User not found";
        }

        return this.user;
    }

    async validateRegistrationCode(registrationCode: string) {
        const user = users.find(
            (user) => user.registrationCode === registrationCode
        );

        if (!user) {
            throw "Invalid registration code";
        }

        this.user = user;
    }
}
