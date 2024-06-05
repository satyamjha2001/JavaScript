// Without memoization
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// With memoization
function memoizedFibonacci() {
  const cache = {};
  //   console.log(typeof cache);
  return function fib(n) {
    //   if(cache[n]!==undefined) or if(n in cache)
    if (cache.hasOwnProperty(n)) {
      return cache[n];
    }
    if (n <= 1) {
      cache[n] = n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
  };
}

const fib = memoizedFibonacci();

console.log(fibonacci(2)); // Slow
console.log(fib(3)); // Fast
