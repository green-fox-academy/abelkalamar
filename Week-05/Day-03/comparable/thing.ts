import { Comparable } from "./01_comparable_things";

class Thing implements Comparable {
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

    get getCompleted() {
        return this.completed;
    }

    compareTo(other: Thing) {
        if (this.completed > other.completed) {
            return -1;
        } else if (this.completed < other.completed) {
            return 1;
        } 
        return 0;
    }
}

export { Thing };
