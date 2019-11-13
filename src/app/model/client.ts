import { Project } from './project';
import { Bag } from './bag';

export interface Client {
    name: string;
    projects: Project[];
    bag: Bag;
}
