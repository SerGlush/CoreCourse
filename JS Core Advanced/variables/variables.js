function task() {
    const one = 1;
    let two = 2;
    var three = 3;
}

// const и let не виден за рамками своего блока (а значит и функции) 
console.log(one);
console.log(two);

// var виден вне блока, но не виден вне функции
console.log(three);
