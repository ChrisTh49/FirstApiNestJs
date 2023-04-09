export enum TaskStatus {
    'IN_PROGRESS' = 'In Progress',
    'DONE' = 'Done',
    'PENDING' = 'Pending'
};

export class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
};