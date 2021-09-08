import { IPet } from "./IPet";

export class Pet implements IPet {
    constructor(
        public id: number = 0,
        public name: string = '',
        public age: number = 0,
        public isAgeAproximated: boolean = false
    ) { }
}