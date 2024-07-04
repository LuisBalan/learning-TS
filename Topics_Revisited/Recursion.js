function Fibonacci(n) {
    // base case: when n = 0 or n = 1, return n
    if (n === 0 || n === 1) {
        return n;
    }
    ;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
;
console.log(Fibonacci(3));
console.log(Fibonacci(5));
console.log(Fibonacci(8));
