function createCounter() {
  let count = 0;
  return {
    increment: () => {
      count++;
      return count;
    },
    get: () => {
      return count;
    }
  };
}
const mainfunc = createCounter();

console.log(mainfunc.increment()); 
console.log(mainfunc.increment());
console.log(mainfunc.get());
console.log(mainfunc.count);// undefined (we can't access count directly, becuase it is inside a scope)