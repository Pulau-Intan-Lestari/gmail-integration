export function onlyNumbers(str: string) {
    // to check if a string is only numbers
    let onlyNumbers = /^[0-9]+$/;

    // to check if a string contains any alphabetic characters
    let containsAlphabet = /[A-Za-z]/;

    if (onlyNumbers.test(str)) {
        return true
    } else if (containsAlphabet.test(str)) {
        return false
    } else {
        return false
    }
}

export function generateDigitCheck(): string {
    let randomNum = Math.floor(Math.random() * 100); // Generate number between 0 and 99
    return randomNum.toString().padStart(2, '0'); // Convert to string and pad start with '0' if necessary
}

export const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')
