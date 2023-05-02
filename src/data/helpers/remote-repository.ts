import axios, { AxiosRequestConfig } from "axios";

let accessToken: string;

export class RemoteRepository {
    protected updateToken(token: string) {
        accessToken = token;
    }

    protected getRequestHeader(): AxiosRequestConfig["headers"] {
        let Authorization = "Bearer";

        if (accessToken !== undefined) {
            Authorization += ` ${accessToken}`;
        }

        return {
            Authorization,
        };
    }

    protected async request<T>(params: {
        url: string;
        method: "get" | "post" | "patch";
        data?: T;
    }) {
        return axios({
            url: params.url,
            method: params.method,
            data: params.data,
            baseURL: "http://localhost:3000/api",
            headers: this.getRequestHeader(),
        });
    }
}
