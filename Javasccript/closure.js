// function Closure() {
//   let a = 10;

//   function child() {
//     console.log(a);
//   }
//   child();
// }
// let parent = Closure();

// Shallow copy & Deep copy :- =================

const original = {
  name: "amar",
  address: "gopei",

  dist: {
    district: "kdp",
    state: "odisha",
  },
};

// const duplicate = { ...original };
// console.log((duplicate.dist.district = "jagatsinghpur"));
// console.log((duplicate.name = "hari"));

// console.log(duplicate);
// console.log(original);

const duplicate1 = structuredClone(original);

duplicate1.dist.district = "jajpur";
duplicate1.name = "hari";
duplicate1.dist.state = "tn";
console.log(original);
console.log(duplicate1);
