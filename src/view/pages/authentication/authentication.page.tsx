import { FC } from "react";

import { useAuthenticationPresenter } from "@/presentation/presenters";

import {
    TextField,
    Button,
    Typography,
    FontSize,
    FontWeight,
} from "@/view/components";

import style from "./authentication.module.css";

export const AuthenticationPage: FC = () => {
    const { state, controller } = useAuthenticationPresenter();

    const { form } = state;

    const { onFormChanged, onSubmit } = controller;

    return (
        <main className={style.page}>
            <form className={style.container} onSubmit={onSubmit}>
                <Typography as="h1" size={FontSize.LG} className={style.title}>
                    Ponto{" "}
                    <Typography as="span" weight={FontWeight.EXTRA_BOLD}>
                        Ilumeo
                    </Typography>
                </Typography>

                <TextField
                    labelText="Código do usuário"
                    value={form.registrationCode}
                    onChanged={(v) => onFormChanged("registrationCode", v)}
                />

                <Button>Confirmar</Button>
            </form>
        </main>
    );
};
