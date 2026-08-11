let demo = document.querySelector("#btn")
demo.onclick = (e) =>
{
    // console.log("click me one time")
    console.log(e)
    console.log(e.type)
    console.log(e.target)
   
}
let demo1 = document.querySelector("#btn1")
  demo1.innertext = "change name"
  console.log(demo1)
demo1.onclick =() =>{
    console.log("click me two time")
  
}
let test = document.querySelector("#para")
test.onmouseover =() =>{
    console.log ("i am in the box")
}