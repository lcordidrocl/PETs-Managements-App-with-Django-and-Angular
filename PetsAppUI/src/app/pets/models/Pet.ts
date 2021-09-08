import { IPet } from "./IPet";

export class Pet implements IPet {
    constructor(
        public Id: number = 0,
        public Name: string = '',
        public Age: number = 0,
        public IsAgeAproximated: boolean = false
    ) { }
}