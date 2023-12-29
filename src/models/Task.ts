export class Task {
    id: number = 0;
    description: string;
    completed: boolean = false;
    canceled: boolean = false;

    constructor(description: string) {
        this.description = description;
    }
}