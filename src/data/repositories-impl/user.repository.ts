import { UserModel } from "@/data";
import { UserRepository } from "@/domain";
import { RemoteRepository } from "../helpers/remote-repository";

export class UserRepositoryImpl
    extends RemoteRepository
    implements UserRepository
{
    async getCurrentUser() {
        const { status, data } = await this.request({
            method: "get",
            url: "/user",
        });

        if (status >= 500) {
            throw "Unknown error";
        }

        if (status >= 400) {
            throw "User is not authenticated";
        }

        return data as UserModel;
    }

    async validateRegistrationCode(registrationCode: string) {
        const { status, data } = await this.request({
            method: "post",
            url: "/auth",
            data: { registrationCode },
        });

        if (status >= 500) {
            throw "Unknown error";
        }

        if (status >= 400) {
            throw "Invalid registration code";
        }

        this.updateToken(data.accessToken);
    }
}
