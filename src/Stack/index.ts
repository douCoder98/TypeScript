export class Stack<T> {
    private size = 0;
    private elements: T[] = [];

    isEmpty(): boolean {
        return this.size === 0;
    }

    push(value: T): void {
        if (this.size === 3) throw new Error("Stack is full");
        this.elements[this.size++] = value;
    }

    pop(): T {
        if (this.isEmpty()) throw new Error("Stack is empty");
        return this.elements[--this.size];
    }
}