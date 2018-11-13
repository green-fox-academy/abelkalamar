class Thing {
    private name: string;
    private completed: boolean;

    constructor(name: string) {
        this.name = name;
        this.completed = false;
    }

    public complete() {
        this.completed = true;
    }

    get getName() {
        return this.name;
    }

    get getCompleted () {
        return this.completed;
    }
}

export { Thing };
