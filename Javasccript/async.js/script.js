// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("three")
// },5000);
// console.log("four"
// )
// console.log("five")

// function sum (a,b){
//     console.log(a+b)

// }
// function calc (c,d,sumCallback){ //main / callback function
//     sumCallback(c,d)
// }
// //sumCallback - a function passed as an argument. insie calc it
// // call the callback function.
// calc(4,6, sum) //function passed as an arrgument -(sum) //

///=============================================================

// function getData(dataId,getnxtData){
//     setTimeout(() => {
//         console.log("data",dataId)
//         if(getnxtData){
//             getnxtData()
//         }

//     },5000);//callback hell  problem .
// }
// console.log("getting data 1..")
// getData(1, () =>{
//   console.log("getting data 2...")
//     getData(2, ()=>{
//         console.log("gtting data 3...")
//         getData(3,()=>{
//             console.log("getting data 4...")
//             getData(4,()=>{
//                 console.log("getting data 5...")
//                 getData(5)

//             })
//         })
//     })
// })

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("i am promise")
//         // resolve("success")
//         reject("some network issue")
//     }, 5000);
// })

//=========================================================
// solutionn of callback by using promise

// function getData(dataId){

//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId)
//             resolve("success")
//             reject("error")
//         }, 5000);
//     })
// }
// getData(1)
//  .then(()=>{
//     return getData(2)
//     .then(()=>{
//         return getData(3)
//         .then(()=>{
//             return getData(4)
//             .then(()=>{
//                 return getData(5)
//             })
//         })
//     })
//  })

// async & await ===================================================
function API(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wheather app", dataId);
      resolve("succses");
      reject("errer");
    }, 5000);
  });
}
async function getAllData() {
  await API(1);
  await API(2);
  await API(3);
  await API(4);
}
