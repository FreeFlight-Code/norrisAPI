
//#filter - a filtered array returns a new array and doesn't change the original

var demoArray = [7, 14, 98, 5, 100]
const filtered = demoArray.filter( element => element < 50 )

//#reduce - takes function and starting number, starts at the starting number and performs the function on every value of the array
//it returns the total or accumulator

const reduced = demoArray.reduce( (total, current) => {
  return current + total;
}, 10)

console.log(demoArray) //	[ 7, 14, 98, 5, 100 ]
console.log(filtered)  //	[ 7, 14, 5 ]
console.log(reduced)   //	234