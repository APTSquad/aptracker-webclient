import { Project } from './project';
import { Bag } from './bag';

export interface Client {
    id: number;
    name: string;
    projects: Project[];
    bag: Bag;
}
