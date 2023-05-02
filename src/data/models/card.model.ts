import { TimeModel } from "@/data";

export interface CardModel {
    date: Date;
    isFinished: boolean;
    time: Omit<TimeModel, "isRunning">;
}
