import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HOME_ROUTE_PATH } from "@/config/router/routes";
import { PresenterHook } from "../helpers/presenter";
import { useRepositoryContext } from "../context/repository.context";
import { toast } from "react-toastify";

interface AuthenticationForm {
    registrationCode: string;
}

interface AuthenticationState {
    form: AuthenticationForm;
}

interface AuthenticationPresenter {
    onFormChanged(field: keyof AuthenticationForm, value: string): void;
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export const useAuthenticationPresenter: PresenterHook<
    AuthenticationState,
    AuthenticationPresenter
> = () => {
    const repositories = useRepositoryContext();

    const [form, setForm] = useState<AuthenticationForm>({
        registrationCode: "",
    });

    const navigate = useNavigate();

    return {
        state: {
            form,
        },
        presenter: {
            onFormChanged: (field, value) => {
                setForm((prevState) => ({
                    ...prevState,
                    [field]: value,
                }));
            },

            onSubmit: async (event) => {
                event.preventDefault();

                try {
                    await repositories.user.validateRegistrationCode(
                        form.registrationCode
                    );
                    navigate(HOME_ROUTE_PATH);
                } catch (err) {
                    toast.warn("Invalid registration code provided");
                }
            },
        },
    };
};
