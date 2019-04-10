const faker = require('faker');

const BRACKET_PATTERN = '\\[(.*?)\\]';

export class RandomTransformationService {

    private bracketRegexp: RegExp;

    constructor() {
        this.bracketRegexp = new RegExp(BRACKET_PATTERN);
        this.transform('r[string]'); // TODO remove example
        this.transform('r[number]');
        this.transform('r[boolean]');
        this.transform('this is a mixed example, r[string] is the random string');
    }

    transform(element: string): any {
        if (!this.bracketRegexp.test(element)) {
            return element;
        }
        const bracketMatch = this.bracketRegexp.exec(element);
        if (bracketMatch && !!bracketMatch.length) {
            const command = element.charAt(element.indexOf(bracketMatch[0]) - 1);
            const value = bracketMatch[1];
            console.log('command -> ' + command + ', value ->' + value);
            element = element.slice(0, element.indexOf(bracketMatch[0]) - 1) +
                element.slice(element.indexOf(bracketMatch[0]), element.length);
            element = element.replace(bracketMatch[0], this.createRandomElement(value));
        }
        console.log('random -> ' + element);
        return element;
    }

    createRandomElement(element: string) {
        let random = element;
        switch (element) {
            case 'string':
                random = faker.random.word();
                break;
            case 'number':
                random = faker.random.number();
                break;
            case 'boolean':
                random = faker.random.boolean();
                break;
        }
        return random;
    }

}
