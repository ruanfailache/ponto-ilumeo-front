import { FC } from "react";
import { Button } from "../../components";

import style from "./home.module.css";

export const HomePage: FC = () => {
    return (
        <div className={style.page}>
            <main className={style.container}>
                <header className={style.header}>
                    <strong className={style.typographyHeadlineSmall}>
                        Relógio de ponto
                    </strong>
                    <div>
                        <strong className={style.typographyHeadlineSmall}>
                            #45XXFMF
                        </strong>
                        <p className={style.headerUserName}>Usuário</p>
                    </div>
                </header>

                <form className={style.form}>
                    <div>
                        <strong className={style.hour}>0h 00m</strong>
                        <span className={style.typographyHeadlineSmall}>
                            Horas de hoje
                        </span>
                    </div>

                    <Button>Hora de entrada</Button>
                </form>

                <strong className={style.typographyHeadlineSmall}>
                    Dias anteriores
                </strong>

                <ul className={style.cardList}>
                    {Array(18)
                        .fill("")
                        .map((_) => (
                            <li className={style.card}>
                                <p>05/11/23</p>
                                <strong>7h 30m</strong>
                            </li>
                        ))}
                </ul>
            </main>
        </div>
    );
};
