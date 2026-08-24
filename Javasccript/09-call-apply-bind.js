// const person = {
//   name: "rahul",
// };

// function introduce(city, age) {
//   console.log(`my name is ${this.name}`);
//   console.log(`i live in ${city} and i am ${age} year old`);
// }

// introduce.call(person, "bhubaneswar", 22);

// introduce.apply(person, ["ktk", 25]);

// const newFunction = introduce.bind(person);
// newFunction("dhenkanal", 25);

let Man = {
  name: "rolex",
};

let introduce = (school, clas) => {
  console.log(`the boy ${this.name}`);
  console.log(`study from ${school} in ${clas}`);
};

introduce.call(Man, "jkbk", "6th");
let Newfunction = introduce.bind(Man);
Newfunction("nalanda", "mca");
