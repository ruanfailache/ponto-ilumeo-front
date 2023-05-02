import { CardModel, TimeModel } from "@/data";

export interface CardsRepository {
    toogle(): Promise<TimeModel>;

    getCurrentTime(): Promise<TimeModel>;

    getPreviousCards(): Promise<CardModel[]>;
}
