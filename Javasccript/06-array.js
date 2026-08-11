// let arr =[12,23,45,49,78,56,96,74,63,]
// console.log(arr)
// console.log(arr.length)

// Loop of an array
//  let heros = ["iron man ","spiderman","thor","hulk","cpt America"]

//  for(let i=0; i<heros.length; i++){
//     console.log(heros[i])
//  }
// for (let i of heros){
//     console.log(i)
// }

// console.log(heros.push("black panther"));
// console.log(heros.push("doctor strange"));
// console.log(heros.push("vision"));
// console.log(heros)
// console.log(heros.shift("spiderman"));
// console.log(heros);

// let Myname = "my name is "
//  let name = prompt("enter your name")
//  console.log(name)
//  let months =["january","march","'april","may"]
//  months.splice(1,0,"february")
//  console.log(months)

// let students = [78,90,54,32,98,25,70]
//  let sum = 0;
//  for(let i of students){
//     sum = sum+i;
//  }
//  let avg = sum / students.length
//  console.log(`avg mark of students ${avg}`)

// let items = [789,543,590,432,489]
// let i = 0;
// for (let val of items){

//     // console.log(`value of index ${i} = ${val}`);
//     let offer = val / 10;
//     items [i] = items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++

// }

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.every((ele) => {
//   return ele >= 1;
// });
// console.log(result);

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    // getCount: function () {
    //   return count;
    // },
  };
}

let counter = createCounter();

counter.increment();
counter.increment();
// console.log(counter.getCount());

const num = [10, 20, 30, 40];

const total = num.reduce((sum, num) => {
  return sum + num;
});
console.log(total);

const products = [
  { name: "laptop", price: 50000 },
  { name: "mouse", price: 1000 },
  { name: "keyboard", price: 2000 },
];

const total = products;
console.log(total.products.name);
