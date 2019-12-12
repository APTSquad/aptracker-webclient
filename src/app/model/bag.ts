import { User } from './user';

export interface Bag {
    id: number;
    name: string;
    responsible?: User;
}
