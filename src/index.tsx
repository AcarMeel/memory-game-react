import kawaiiOne from './assets/kawaii-1.svg';
import kawaiiTwo from './assets/kawaii-2.svg';
import kawaiiThree from './assets/kawaii-3.svg';
import kawaiiFour from './assets/kawaii-4.svg';
import kawaiiFive from './assets/kawaii-5.svg';
import kawaiiSix from './assets/kawaii-6.svg';
import foodOne from './assets/food-1.svg';
import foodTwo from './assets/food-2.svg';
import foodThree from './assets/food-3.svg';
import foodFour from './assets/food-4.svg';
import foodFive from './assets/food-5.svg';
import foodSix from './assets/food-6.svg';
import foodSeven from './assets/food-7.svg';
import foodEight from './assets/food-8.svg';
import foodNine from './assets/food-9.svg';

export interface IMatchList {
    id: string,
    url: string,
    isFlipped: boolean
}

export const listOne: Array<IMatchList> = [
    {
        id: '1',
        url: kawaiiOne,
        isFlipped: false
    },
    {
        id: '2',
        url: kawaiiTwo,
        isFlipped: false
    },
    {
        id: '3',
        url: kawaiiThree,
        isFlipped: false
    },
    {
        id: '4',
        url: kawaiiFour,
        isFlipped: false
    },
    {
        id: '5',
        url: kawaiiFive,
        isFlipped: false
    },
    {
        id: '6',
        url: kawaiiSix,
        isFlipped: false
    }
];

export const listTwo: Array<IMatchList> = [
    {
        id: '7',
        url: foodOne,
        isFlipped: false
    },
    {
        id: '8',
        url: foodTwo,
        isFlipped: false
    },
    {
        id: '9',
        url: foodThree,
        isFlipped: false
    },
    {
        id: '10',
        url: foodFour,
        isFlipped: false
    },
    {
        id: '11',
        url: foodFive,
        isFlipped: false
    },
    {
        id: '12',
        url: foodSix,
        isFlipped: false
    },
    {
        id: '13',
        url: foodSeven,
        isFlipped: false
    },
    {
        id: '14',
        url: foodEight,
        isFlipped: false
    },
    {
        id: '15',
        url: foodNine,
        isFlipped: false
    }
]