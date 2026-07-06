// function Myfunction(x,y){

//     console.log("hello world")
//     z = x+y;
//     return z;
// }

// let fun = Myfunction(3,5);
// console.log(fun);

// function Myvowel(str){
//     let count = 0;
//     for(const i of str){
//         if(
//             i ==="a" || i ==="e"||i ==="i"||i==="o"||i==="u" 
//         )
//     {
//         count++;
//     }
//     }
//     console.log(count)

// }
// Myvowel("helloworld");

// ARROW FUNCTION METHOD
// const Myvowel = (str) => {
//     let count = 0;
//     for(const i of str){
//         if(
//             i ==="a" || i ==="e"||i ==="i"||i==="o"||i==="u" 
//         )
//         {
//             count++;
//         }
//     }
//     console.log(count)
// }
// Myvowel("helloworld");  


// let arr = [10,20,42,30,56,11, 25 , 97 , 66 , 74]
// function greatestElement(arr){
//     let greatest = arr[0];
//     let smallest = arr[0];
//     for(let i of arr){
//         if(i > greatest){
//             greatest = i;
//         }
//         if(i < smallest){
//             smallest = i;
//         }
//     }
//     console.log("smallest =" + smallest);
//     console.log(`greatest is ${greatest}`);
// }
// greatestElement(arr);

// let arr = [10,20,42,30,56,11, 25 , 97 , 66 , 74]
// const greatestElement =(arr)=>{
//    let greatest = arr[0];
//     for(let i of arr){
//         greatest = i > greatest ? i : greatest;
//     }
//     console.log(greatest);
// }
// greatestElement(arr);

// REMOVE FIRST ELEMENT OF AN ARRAY
// let arr = [10,20,42,30,56,11, 25 , 97 , 66 , 74]
// function removefirstElement(arr){
//     remove = arr.shift();
//     console.log(remove);
//     console.log(arr);
// }
// removefirstElement(arr);

// REMOVE DUPLICATE ELEMENT OF AN ARRAY
// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < result.length; j++) {
//       if (arr[i] === result[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// [1, 2, 3, 4, 5]
// function myMyfunction(){
//     console.log("today is friday");

// }
// myMyfunction()


// let arr = [1,2,3,6,4,5,8,9,77,]
// arr.forEach(function printval(val){
//     console.log(val)
// })

// arr.forEach((val)=>{
//     console.log(val)
// })

// ARRAY FILTER METHOD 
// arr.filter((val)=>{
//     if(val%2===0){
//         console.log(val)
//     }
// })

 
// ARRAY MAP METHOD
//  let arr = [1,2,3,6,4,5,8,9,77,]
//    let newarr = arr.map((val)=>{
//     return val*val;
//     // console.log(val*2)
//     // console.log(val*3)
// })
// console.log(arr)
// console.log(newarr)


// let arr = [1,2,3,4,5,6,7,8,9]
// let newarr = arr.map((a) =>{
//     return a%2===0;
// })
// console.log(arr);
//   console.log(newarr); 
//   it returns answer in true or false


// let marks = [95,56,86,64,34,25,78]
// let newmarks = marks.filter((val)=>{
//    return val>=90;
// })
// console.log(marks);
// console.log(newmarks);



