import { CardsRepository, UserRepository } from "@/domain";

export interface Repositories {
    cards: CardsRepository;
    user: UserRepository;
}
