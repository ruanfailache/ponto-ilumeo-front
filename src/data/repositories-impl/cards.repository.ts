import { CardsRepository } from "@/domain";
import { CardModel } from "..";
import { RemoteRepository } from "../helpers/remote-repository";

export class CardsRepositoryImpl
    extends RemoteRepository
    implements CardsRepository
{
    private initialDate = new Date(Date.now());

    private isFinished = false;

    async toogle() {
        await this.request({
            method: "patch",
            url: this.isFinished ? "/cards/create" : "/cards/finish",
        });

        return this.getCurrentTime();
    }

    async getCurrentTime() {
        const currentDate = new Date(Date.now());

        const { data } = await this.request({
            method: "get",
            url: "/cards/today",
        });

        const card = data as CardModel;

        this.isFinished = card.isFinished;

        return {
            isFinished: this.isFinished,
            hours: currentDate.getHours() - this.initialDate.getHours(),
            minutes: currentDate.getMinutes() - this.initialDate.getMinutes(),
        };
    }

    async getPreviousCards() {
        const { data } = await this.request({
            method: "get",
            url: "/cards/previous",
        });

        return data.map((card: CardModel) => {
            const date2Str = card.date.toString();
            const parsedDateStr = Date.parse(date2Str);
            return {
                ...card,
                date: new Date(parsedDateStr),
            };
        });
    }
}
