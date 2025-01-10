//Code written without tests
/* function palindrome(sentence:string): string[] {
    
    let words: string[] = sentence.toUpperCase().split(' ')

    let palindromes: string[] = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 1) {
            if (words[i].split('').reverse().join('') == words[i].split('').join('')) {
                palindromes.push(words[i])
            }
        }
    }

    let palindromes_set = new Set(palindromes)

    palindromes = Array.from(palindromes_set)

    return palindromes
}

const palindromes = palindrome("Le radar a vu Anna avec un kayak et un autre radar")
console.log(palindromes) */

//Code written with tests (TDD)
const SPACE = " ";
const EMPTY_CHAR = "";

export const extractPalindromes = (sentence: string) =>
    getWordsFromSentence(sentence.toUpperCase())
        .filter(isPalindrome)
        .filter(unique);

const getWordsFromSentence = (sentence: string) => sentence.split(SPACE);

const isPalindrome = (word: string) =>
    word.length > 1 && [...word].reverse().join(EMPTY_CHAR) === word;

const unique = (word: string, index: number, array: string[]) =>
    array.indexOf(word) === index;