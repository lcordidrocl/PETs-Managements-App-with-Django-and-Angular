import { IPet } from "./IPet";

export class Pet implements IPet {
    constructor(
        public id: number = 0,
        public name: string = '',
        public birthDate: string ='',
        public isAgeAproximated: boolean = false,
        public age: number = 0
    ) { }
}