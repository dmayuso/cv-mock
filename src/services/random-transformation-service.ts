const faker = require('faker');

const BRACKET_PATTERN = '\\[(.*?)\\]';

export class RandomTransformationService {

    private bracketRegexp: RegExp;

    constructor() {
        this.bracketRegexp = new RegExp(BRACKET_PATTERN);
        this.transform('r[string]'); // TODO remove example
        this.transform('r[number]');
        this.transform('r[boolean]');
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

            element = this.createRandomElement(value);
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
