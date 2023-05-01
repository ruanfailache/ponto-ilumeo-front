import { CardModel, TimeModel } from "@/data";

export abstract class CardsRepository {
    abstract startTime(): Promise<void>;

    abstract getCurrentTime(): Promise<TimeModel>;

    abstract getPreviousCards(): Promise<CardModel[]>;
}
