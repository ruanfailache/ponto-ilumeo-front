import { CardsRepository } from "@/domain";

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const cards = [
    {
        date: new Date(Date.now() - 4 * DAY),
        time: {
            hours: 7,
            minutes: 30,
        },
    },
    {
        date: new Date(Date.now() - 3 * DAY),
        time: {
            hours: 9,
            minutes: 10,
        },
    },
    {
        date: new Date(Date.now() - 2 * DAY),
        time: {
            hours: 8,
            minutes: 20,
        },
    },
    {
        date: new Date(Date.now() - DAY),
        time: {
            hours: 8,
            minutes: 20,
        },
    },
];

export class CardsRepositoryImpl extends CardsRepository {
    private initialDate = new Date(Date.now());

    private isRunning = false;

    async toogleChronometer() {
        this.isRunning = !this.isRunning;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return this.getCurrentTime();
    }

    async getCurrentTime() {
        const currentDate = new Date(Date.now());

        return {
            isRunning: this.isRunning,
            hours: currentDate.getHours() - this.initialDate.getHours(),
            minutes: currentDate.getMinutes() - this.initialDate.getMinutes(),
        };
    }

    async getPreviousCards() {
        return cards;
    }
}
