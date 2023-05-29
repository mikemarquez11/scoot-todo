export interface Todo {
    id: number;
    completed: boolean;
   description: string;
   dueDate: string;
   priority: Priority;
}

type Priority = 'all' | 'high' | 'medium' | 'low';

export const TODO_DATA: Todo[] = [
    {
        id: 1,
        completed: false,
        description: 'Learn Go',
        dueDate: '2023-07-31',
        priority: 'low'
    },
    {
        id: 2,
        completed: false,
        description: 'Get Groseries',
        dueDate: '2023-07-24',
        priority: 'low'
    },
    {
        id: 3,
        completed: false,
        description: 'Deliver Package',
        dueDate: '2023-08-04',
        priority: 'medium'
    },
    {
        id: 4,
        completed: false,
        description: 'Sell Fruits',
        dueDate: '2023-08-05',
        priority: 'high'
    },
    {
        id: 5,
        completed: false,
        description: 'Buy Vegetables',
        dueDate: '2023-08-06',
        priority: 'medium'
    },
];
