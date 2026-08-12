// example 1:-

// const arr1 = [1,2,3]
// const arr2 = [...arr1,4,5,6]
// console.log(arr2);

// note 2:-  ...arr1 spreads element -> 1 , 2, 3 then 4, 5, 6, are added

// example -2 -> (copy of an array)

const original = [10, 20, 30];
const copy = [...original];
console.log(copy);
console.log(original);

// example 3:- (spread in an object)

// const user =
// {
//     name : "purna",
//     age:23
// }

// const updateUser=
// {
//     ...user,
//     city:"bhubaneswer"
// }

// console.log(updateUser)

// example 4 :- (override values)

// const user =
// {
//     name : "purna",
//     age:23,
//     city:"chandaka"
// }

// const updateUser=
// {
//     ...user,
//     age : 35,
//     city:"delhi"
// }

// console.log(updateUser)

// Example - 5 (spread in a function argument)

// function add(a,b,c)
// {
//     return a + b + c
// }

// const nums = [1,2,3]
// console.log(add(...nums))