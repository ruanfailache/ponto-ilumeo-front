import { CardModel, TimeModel } from "@/data";

export abstract class CardsRepository {
    abstract toogleChronometer(): Promise<TimeModel>;

    abstract getCurrentTime(): Promise<TimeModel>;

    abstract getPreviousCards(): Promise<CardModel[]>;
}
