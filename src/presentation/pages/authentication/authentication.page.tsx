import { FC } from "react";

import { TextField, Button } from "../../components";

import style from "./authentication.module.css";
import { useAuthenticationPresenter } from "./authentication.presenter";

export const AuthenticationPage: FC = () => {
    const { form, onFormChanged } = useAuthenticationPresenter();

    return (
        <main className={style.page}>
            <form className={style.container}>
                <h1 className={style.title}>
                    Ponto <strong>Ilumeo</strong>
                </h1>
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
