import { Project } from './project';
import { Bag } from './bag';

export interface Article {
    id: number;
    name: string;
    project?: Project;
    bag?: Bag;
    isCommon?: boolean;
    isActive?: boolean;
}