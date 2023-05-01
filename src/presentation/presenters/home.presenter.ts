import { FormEventHandler, useEffect, useState } from "react";
import { PresenterHook } from "../helpers/presenter";
import { CardModel, TimeModel, UserModel } from "@/data";
import { useRepositoryContext } from "../context/repository.context";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATION_ROUTE_PATH } from "@/config/router/routes";

interface HomeState {
    isSubmissionInProgress: boolean;
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

    const [isSubmissionInProgress, setIsSubmissionInProgress] = useState(false);

    const [data, setData] = useState({
        cards: [] as CardModel[],
        user: {
            name: "",
            registrationCode: "",
        },
        time: {
            hours: 0,
            minutes: 0,
            isRunning: false,
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
                setData({
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
        state: {
            ...data,
            isSubmissionInProgress,
        },
        presenter: {
            onSubmit: async (event) => {
                event.preventDefault();
                setIsSubmissionInProgress(true);
                const currentTime = await repository.cards.toogleChronometer();
                setData((previousState) => ({
                    ...previousState,
                    time: currentTime,
                }));
                setIsSubmissionInProgress(false);
            },
        },
    };
};
