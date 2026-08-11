let demo = document.querySelector("#btn")
let curmode = "light"//intial state

demo.addEventListener("click",() =>{
    if(curmode === "light"){
        curmode="dark"
        document.querySelector("body").style.backgroundColor = "blue"
    }

    else{
        curmode = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(curmode)
})
// demo.addEventListener("click",() =>{
// demo.onclick = ()=>{
//     document.querySelector("body").style.backgroundColor = "light green"
//     demo.innertext ="changed"
// }
// console.log(demo);
// })