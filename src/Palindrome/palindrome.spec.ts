import { extractPalindromes } from "./index";

describe("Palindromes", () => {
    it("should exctract palindromes of a very short sentence", () => {
        expect(extractPalindromes("")).toEqual([]);
        expect(extractPalindromes("AA")).toEqual(["AA"]);
        expect(extractPalindromes("A")).toEqual([]);
        expect(extractPalindromes("AB")).toEqual([]);
        expect(extractPalindromes("aa")).toEqual(["AA"]);
        expect(extractPalindromes("aba")).toEqual(["ABA"]);
        expect(extractPalindromes("abca")).toEqual([]);
        expect(extractPalindromes("Anna")).toEqual(["ANNA"]);
    });

    it("should extract palindromes of a sentence with several words", () => {
        expect(extractPalindromes("aa ")).toEqual(["AA"]);
        expect(extractPalindromes("aa bb")).toEqual(["AA", "BB"]);
        expect(extractPalindromes("aa bb aa")).toEqual(["AA", "BB"]);
    });
});