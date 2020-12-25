
export class Quiz {
    constructor(
        public id: string,
        public level: string,
        public unit: string,
        public chapter: string,
        public question: string,
        public answer: string,
        public choices: string[]
    ) { }
}