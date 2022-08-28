import shuffle from 'lodash.shuffle';
import { data } from "../constants/data";

export type CharType = {
    name: string
    alignment: string;
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number,
    total: number
}

export const fetchChar = (): Promise<CharType> => {
    const [character] = shuffle(data);
    return Promise.resolve(character);
};
