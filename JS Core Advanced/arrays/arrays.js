function task(arr) {
    return arr
    .filter((number) => number > 0 && number < 10)
    .reduce((acc, value) => acc + value);
}
