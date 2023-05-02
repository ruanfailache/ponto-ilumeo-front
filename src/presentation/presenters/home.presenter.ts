import { FormEventHandler, useEffect, useState } from "react";
import { PresenterHook } from "../helpers/presenter";
import { CardModel, TimeModel, UserModel } from "@/data";
import { useRepositoryContext } from "../context/repository.context";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATION_ROUTE_PATH } from "@/config/router/routes";

interface HomeState {
    isSubmissionInProgress: boolean;
    totalTime: TimeModel;
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
        totalTime: {
            isFinished: true,
            hours: 0,
            minutes: 0,
        },
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const [totalTime, cards, user] = await Promise.all([
                    repository.cards.getCurrentTime(),
                    repository.cards.getPreviousCards(),
                    repository.user.getCurrentUser(),
                ]);
                setData({ user, cards, totalTime });
            } catch (err) {
                navigate(AUTHENTICATION_ROUTE_PATH);
            }
        };
        loadData();
        // TODO:  implements a web socket here instead of a time out
        const id = setInterval(loadData, 1000 * 60);

        return () => {
            clearInterval(id);
        };
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
                const currentTime = await repository.cards.toogle();
                setData((previousState) => ({
                    ...previousState,
                    time: currentTime,
                }));
                setIsSubmissionInProgress(false);
            },
        },
    };
};
