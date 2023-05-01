import { FormEventHandler, useEffect, useState } from "react";
import { PresenterHook } from "../helpers/presenter";
import { CardModel, TimeModel, UserModel } from "@/data";
import { useRepositoryContext } from "../context/repository.context";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATION_ROUTE_PATH } from "@/config/router/routes";

interface HomeState {
    time: TimeModel;
    user: UserModel;
    cards: CardModel[];
}

interface HomePresenter {
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export const useHomePresenter: PresenterHook<HomeState, HomePresenter> = () => {
    const repository = useRepositoryContext();

    const navigate = useNavigate();

    const [state, setState] = useState<HomeState>({
        cards: [],
        user: {
            name: "",
            registrationCode: "",
        },
        time: {
            hours: 0,
            minutes: 0,
        },
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const [currentTime, cards, user] = await Promise.all([
                    repository.cards.getCurrentTime(),
                    repository.cards.getPreviousCards(),
                    repository.user.getCurrentUser(),
                ]);
                setState({
                    user,
                    cards,
                    time: currentTime,
                });
            } catch (err) {
                navigate(AUTHENTICATION_ROUTE_PATH);
            }
        };
        loadData();
    }, [navigate, repository]);

    return {
        state: state,
        presenter: {
            onSubmit: (event) => {
                event.preventDefault();
                repository.cards.startTime();
            },
        },
    };
};
