class ArrayError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

function task(arr) {
    if (arr.length == 0) throw new ArrayError("Empty Array");
}
