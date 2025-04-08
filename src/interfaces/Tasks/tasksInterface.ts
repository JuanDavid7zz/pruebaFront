export interface tasksMainInterface {
    data:tasksInterface[]
}


export interface tasksInterface {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}