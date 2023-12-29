export class Task {
    static currentCount: number = 0
    id: number = 0;
    description: string;
    completed: boolean = false;
    canceled: boolean = false;

    constructor(description: string) {
        this.description = description;
        this.id = Task.currentCount;
        Task.currentCount++;
    }
}