import shuffle from 'lodash.shuffle';
import { dogData } from '../constants/dogData';

export type FactType = {
    id: number,
    fact: string
}

export const fetchFacts = (n: number) => {
    return Promise.resolve(dogData).then((facts) => shuffle(facts).slice(0, n));
}