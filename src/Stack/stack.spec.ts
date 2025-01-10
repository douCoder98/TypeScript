import { Stack } from "./index";

describe("Stack", () => {
    it("Stack is empty", () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toEqual(true);
    });

    it("When push stack, stack is NOT empty", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.isEmpty()).toEqual(false);
    });

    it("When push and pop, stack is empty", () => {
        const stack = new Stack();
        stack.push(1);
        stack.pop();
        expect(stack.isEmpty()).toEqual(true);
    });

    it("When push twice and pop once, stack is NOT empty", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.pop();
        expect(stack.isEmpty()).toEqual(false);
    });

    it("When pop empty stack, throw error", () => {
        const stack = new Stack();
        expect(() => stack.pop()).toThrowError("Stack is empty");
    });

    it("When pop, return pushed value", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.pop()).toEqual(1);
        stack.push(5);
        expect(stack.pop()).toEqual(5);
    });

    it("When push twice and pop twice, return pushed values", () => {
        const stack = new Stack();
        stack.push(4);
        stack.push(99);
        stack.pop();
        expect(stack.pop()).toEqual(4);
    });

    it("Throw error when stack is full", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(() => stack.push(4)).toThrowError("Stack is full");
    });
});