// let demo = document.getElementById("head");

// console.log(demo);
// let demo1 = document.getElementsByClassName("heading");
// console.log(demo1);
// let demo2 = document.getElementsByTagName("h1");
// console.log(demo2);

// let ele1 = document.querySelector("p");
// console.log(ele1);

let ele2 = document.querySelector("#btn");
let curmode = "light";
ele2.addEventListener("click",() =>{
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
ele2.addEventListener("click",() =>{
ele2.onclick = ()=>{
    document.querySelector("#btn").style.backgroundColor = "light green"
    // demo.innertext ="changed"
}
console.log(ele2)

})