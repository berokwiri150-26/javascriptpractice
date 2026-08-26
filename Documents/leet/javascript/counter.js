
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    let integer = n
    return function() {
        return n++;
};
};

// This n++ allows the counter function to return the current value of n and then increment it by 1
// for the next call. The closure created by the inner function allows it to remember the value of n between calls.
