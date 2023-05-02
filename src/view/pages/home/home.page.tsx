import { FC } from "react";
import { Button, FontSize, FontWeight, Typography } from "../../components";

import style from "./home.module.css";
import { useHomePresenter } from "@/presentation/presenters";

export const HomePage: FC = () => {
    const { state, presenter } = useHomePresenter();

    return (
        <div className={style.page}>
            <main className={style.container}>
                <header className={style.header}>
                    <Typography
                        as="h1"
                        size={FontSize.XS}
                        weight={FontWeight.BOLD}
                    >
                        Relógio de ponto
                    </Typography>

                    <div>
                        <Typography
                            as="strong"
                            size={FontSize.XS}
                            weight={FontWeight.BOLD}
                        >
                            {state.user.registrationCode}
                        </Typography>

                        <Typography
                            size={FontSize.XS}
                            weight={FontWeight.LIGHT}
                            className={style.headerUserName}
                        >
                            {state.user.name}
                        </Typography>
                    </div>
                </header>

                <form className={style.form} onSubmit={presenter.onSubmit}>
                    <div>
                        <Typography
                            as="strong"
                            size={FontSize.LG}
                            weight={FontWeight.BOLD}
                        >
                            {state.totalTime.hours}h {state.totalTime.minutes}m
                        </Typography>

                        <Typography
                            as="span"
                            size={FontSize.XS}
                            weight={FontWeight.BOLD}
                        >
                            Horas de hoje
                        </Typography>
                    </div>

                    <Button loading={state.isSubmissionInProgress}>
                        Hora de{" "}
                        {state.totalTime.isFinished ? "entrada" : "saída"}
                    </Button>
                </form>

                <Typography as="h2" size={FontSize.XS} weight={FontWeight.BOLD}>
                    Dias anteriores
                </Typography>

                <ul className={style.cardList}>
                    {state.cards.map((card, index) => (
                        <li key={index} className={style.card}>
                            <Typography
                                size={FontSize.XS}
                                weight={FontWeight.MEDIUM}
                            >
                                {card.date.toLocaleDateString()}
                            </Typography>

                            <Typography
                                size={FontSize.XS}
                                weight={FontWeight.BOLD}
                            >
                                {card.totalTime.hours}h {card.totalTime.minutes}
                                m
                            </Typography>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};
