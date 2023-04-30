import { FC } from "react";

import {
    TextField,
    Button,
    Typography,
    FontSize,
    FontWeight,
} from "../../components";

import style from "./authentication.module.css";
import { useAuthenticationPresenter } from "./authentication.presenter";

export const AuthenticationPage: FC = () => {
    const { form, onFormChanged } = useAuthenticationPresenter();

    return (
        <main className={style.page}>
            <form className={style.container}>
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
