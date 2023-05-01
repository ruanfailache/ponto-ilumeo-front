import { FC } from "react";

import { useAuthenticationPresenter } from "@/presentation/presenters";

import {
    TextField,
    Button,
    Typography,
    FontSize,
    FontWeight,
    Toast,
} from "@/view/components";

import style from "./authentication.module.css";

export const AuthenticationPage: FC = () => {
    const { state, presenter } = useAuthenticationPresenter();

    return (
        <main className={style.page}>
            <form className={style.container} onSubmit={presenter.onSubmit}>
                <Typography as="h1" size={FontSize.LG} className={style.title}>
                    Ponto{" "}
                    <Typography as="span" weight={FontWeight.EXTRA_BOLD}>
                        Ilumeo
                    </Typography>
                </Typography>

                <TextField
                    labelText="Código do usuário"
                    value={state.form.registrationCode}
                    onChanged={(registrationCode) =>
                        presenter.onFormChanged(
                            "registrationCode",
                            registrationCode
                        )
                    }
                />

                <Button>Confirmar</Button>

                <Toast />
            </form>
        </main>
    );
};
