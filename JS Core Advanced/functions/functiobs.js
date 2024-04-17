function task(length) {
    let sequence = Array(length).fill(0);
    return String.fromCharCode(...sequence.map((val) => Math.random() * 65535));
}
