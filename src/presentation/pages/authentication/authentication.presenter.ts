import { useState } from "react";

export const useAuthenticationPresenter = () => {
    const [form, setForm] = useState({
        registrationCode: "",
    });

    const onFormChanged = (field: keyof typeof form, value: string) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return { form, onFormChanged };
};
