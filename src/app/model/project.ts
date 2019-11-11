import { Bag } from './bag';
import { Client } from './client';

export interface Project {
    name: string;
    bag?: Bag;
    client: Client;
}