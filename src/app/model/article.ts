import { Project } from './project';
import { Bag } from './bag';

export interface Article {
    name: string;
    project?: Project;
    bag?: Bag;
}