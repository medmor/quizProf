export class AppMapNode {
    constructor(
        public key: string,
        public name: string,
        public children: AppMapNode[]
    ) { }
}