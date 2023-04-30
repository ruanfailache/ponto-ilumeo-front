import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HOME_ROUTE_PATH } from "@/config/router/routes";

export const useAuthenticationPresenter = () => {
    const [form, setForm] = useState({
        registrationCode: "",
    });

    const navigate = useNavigate();

    const onFormChanged = (field: keyof typeof form, value: string) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        navigate(HOME_ROUTE_PATH);
    };

    return {
        state: {
            form,
        },
        controller: {
            onFormChanged,
            onSubmit,
        },
    };
};
