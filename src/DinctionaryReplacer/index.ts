function replacer(sentence:string, dict: Map<string, string>): string {
    if (dict.size === 0) {
        return ""
    }

    let regexp = /^\$[a-zA-Z]+\$$/;

    let words: string[] = sentence.split(' ')
    let keys: string[] = []

    for (let i = 0; i < words.length; i++) {
        if (regexp.test(words[i])) {
            keys.push(words[i].replace('$', '').replace('$', ''))
        }
    }

    for (let i = 0; i < keys.length; i++) {
        if (dict.has(keys[i])) {
            sentence = sentence.replace('$' +keys[i] + '$', dict.get(keys[i]) ?? '')
        }
    }

    return sentence
}

const sentence = replacer( "$temp$ here comes the name $name$", new Map([["temp", "temporary"], ["name", "John Doe"]]))
console.log(sentence)