function task(data, callbackFunction) {
    let promise = new Promise();
    callbackFunction(data, (val) => promise.resolve(val));
    return promise;
}
