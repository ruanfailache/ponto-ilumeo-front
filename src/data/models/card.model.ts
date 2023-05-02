import { TimeModel } from "@/data";

export interface CardModel {
    date: Date;
    isFinished: boolean;
    totalTime: Omit<TimeModel, "isRunning">;
}
