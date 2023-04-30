import { FC } from "react";
import { Button, FontSize, FontWeight, Typography } from "../../components";

import style from "./home.module.css";

interface HomePageComponent extends FC {
    Header: FC;
    Form: FC;
    List: FC;
}

export const HomePage: HomePageComponent = () => {
    return (
        <div className={style.page}>
            <main className={style.container}>
                <HomePage.Header />
                <HomePage.Form />
                <HomePage.List />
            </main>
        </div>
    );
};

HomePage.Header = () => {
    return (
        <header className={style.header}>
            <Typography as="h1" size={FontSize.XS} weight={FontWeight.BOLD}>
                Relógio de ponto
            </Typography>

            <div>
                <Typography
                    as="strong"
                    size={FontSize.XS}
                    weight={FontWeight.BOLD}
                >
                    #45XXFMF
                </Typography>

                <Typography
                    size={FontSize.XS}
                    weight={FontWeight.LIGHT}
                    className={style.headerUserName}
                >
                    Usuário
                </Typography>
            </div>
        </header>
    );
};

HomePage.Form = () => {
    return (
        <form className={style.form}>
            <div>
                <Typography
                    as="strong"
                    size={FontSize.LG}
                    weight={FontWeight.BOLD}
                >
                    0h 00m
                </Typography>

                <Typography
                    as="span"
                    size={FontSize.XS}
                    weight={FontWeight.BOLD}
                >
                    Horas de hoje
                </Typography>
            </div>

            <Button>Hora de entrada</Button>
        </form>
    );
};

HomePage.List = () => {
    return (
        <>
            <Typography as="h2" size={FontSize.XS} weight={FontWeight.BOLD}>
                Dias anteriores
            </Typography>

            <ul className={style.cardList}>
                {Array(8)
                    .fill("")
                    .map(() => (
                        <li className={style.card}>
                            <Typography
                                size={FontSize.XS}
                                weight={FontWeight.MEDIUM}
                            >
                                30/04/23
                            </Typography>

                            <Typography
                                size={FontSize.XS}
                                weight={FontWeight.BOLD}
                            >
                                7h 30m
                            </Typography>
                        </li>
                    ))}
            </ul>
        </>
    );
};
