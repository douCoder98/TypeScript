export function writeNumberToLcd(number: number): string {
    const lcdDigits = [
        [" _ ", "| |", "|_|"], // 0
        ["   ", "  |", "  |"], // 1
        [" _ ", " _|", "|_ "], // 2
        [" _ ", " _|", " _|"], // 3
        ["   ", "|_|", "  |"], // 4
        [" _ ", "|_ ", " _|"], // 5
        [" _ ", "|_ ", "|_|"], // 6
        [" _ ", "  |", "  |"], // 7
        [" _ ", "|_|", "|_|"], // 8
        [" _ ", "|_|", " _|"]  // 9
    ];

    const digits = number.toString().split('').map(Number);
    const lcdRepresentation = ["", "", ""];

    digits.forEach(digit => {
        lcdRepresentation[0] += lcdDigits[digit][0] + " ";
        lcdRepresentation[1] += lcdDigits[digit][1] + " ";
        lcdRepresentation[2] += lcdDigits[digit][2] + " ";
    });

    return lcdRepresentation.join('\n');
}

console.log(writeNumberToLcd(123));