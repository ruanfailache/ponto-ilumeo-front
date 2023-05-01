import { Repositories } from "./repositories";

import { CardsRepositoryImpl, UserRepositoryImpl } from "@/data";

export const repositories: Repositories = {
    cards: new CardsRepositoryImpl(),
    user: new UserRepositoryImpl(),
};
