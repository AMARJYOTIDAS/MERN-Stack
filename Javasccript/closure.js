function Closure() {
  let a = 10;

  function child() {
    console.log(a);
  }
  child();
}
let parent = Closure();
