import { Bag } from './bag';
import { Client } from './client';
import { Article } from './article';

export interface Project {
    name: string;
    bag?: Bag;
    client?: Client;
    articles?: Article[];
}
