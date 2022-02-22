/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let endList: number[] = [];
    if (numbers.length != 0) {
        endList = [numbers[0], numbers[numbers.length - 1]];
    }
    return endList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((word: string): number => Number(word));
    const ints2 = ints.map((word2: number): number =>
        isNaN(word2) ? (word2 = 0) : word2
    );
    return ints2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts1 = amounts.map((amount: string): string =>
        amount[0] == "$" ? amount.slice(1) : amount
    );
    const amounts2 = amounts1.map((amount: string): number => Number(amount));
    const amounts3 = amounts2.map((word2: number): number =>
        isNaN(word2) ? (word2 = 0) : word2
    );
    return amounts3;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const yelling = messages.map((message: string): string =>
        message[message.length - 1] == "!" ? message.toUpperCase() : message
    );
    const notQuestion = yelling.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    );
    return notQuestion;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length != 0) {
        const colorList = colors.filter(
            (color: string): boolean =>
                color == "red" || color == "blue" || color == "green"
        );
        return colorList.length == colors.length;
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    const summate = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const math = addends.map(
        (addend: number): string => "+" + addend.toString()
    );
    const endString = summate.toString() + "=" + math.join("").slice(1);

    return endString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegative = values.findIndex(
        (value: number): boolean => value < 0
    );
    const values2 = values.map((value: number): number => value);
    if (firstNegative != -1) {
        const positives = values2.slice(0, firstNegative);
        const summation = positives.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        //const withSum = values2;
        values2.splice(firstNegative + 1, 0, summation);
        return values2;
    }
    const summation = values2.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const withSum = [...values2, summation];
    return withSum;
}
