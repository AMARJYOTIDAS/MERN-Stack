Flex box in css
- we can use css flex-box to create one dimentional design in a single page.
1. display : flex;
2. flex-direction: row/row-reverse/column /column/column-reverse
3. justify-content: center/ space-between/space-evenly/space-around.
4. align-item: center/top/buttom
5. flex-wrap:center/no-wrap

Grid layout in css..
- css grid layout is a two dimensional layout system for the web.
- A grid is a collection of horizontal &  vertical of lines crating a pattern against wwhich we can line up our design element

1. dispalay : grid.
2. grid- template-column: repeate(4,1fr) /100 200 300;
3. grid- gap: 20px/30px etc..
4. grid-auto-rows : 100px / 200px etc..

css units.

- basically there are multiple units in css but we will discuss some im units.
1. px (pixle)- fixed 

2. % ( percentage) - percentage fully depends upon their parent element .
ex- rakesh - 100 -> 20% -> 20
    anuu  - 1000 -> 20% -> 200

3. vh (viewport height) & vw (viewport width) -> it will increase or decrease their size as per the screen.

4. vmax (viewport max) -> if the screen size can be squized to a phone screen so our content can be small so it break that and create a new line of content

5. em & rem (root units of css) -> we can handle all the tag by a root element/tag so that will be feasible for our content.

html - semantic tags
css - animation( scale, skew, rotate, etc..) & keyframes.


POsition property in css
- the position property specify the type of positioning method used for an element.

- There are 5 types of position property
1. static - not change there position, default value
2. relative - the element is positioned relatives to it's normal position
5. absolute - the element is positioned relatives to it's ancestor
4. fixed - the element is positioned relative  to the browser window
5. sticky - the element is positioned based on the user scroll positioned.

Animation in Css.

Animation(transition) :- to change the state of an object
- transition enables you  to defined the transition between two states of an element.

- some important transition properties are ..
1. transition -property : property you want to transition (font-size , color, bg color).
2. transition - duration : 2s/3s/...
3. transition - timing -function : ease-in /ease-out/ ease-in-out/linear/steps(4) etc..
4. transition- delay:- 2s/3s/4s etc..

- transition shorthand(property names /duration/timing-function/delay)
transition : font-size 2s ease- in 5s.

ANIMMATION (Transform)
 - it is used to apply 2D & 3D transformation  to an element.
 1. Transform (rotate)
   - transform - rotate (45deg/90deg..etc..)
   - rotateX-45deg.
   - rotateY - 45deg.
   - rotateZ - 45deg.
 2. (Transform scale) 
  - transform- scale(2/3 etc..)
  - transform- scale(1,2)
  - transform- scaleY(0.5)
  - transform- scaleX(0.5)
 3. Transform (skew)

  - transform - skew(45deg)
  - transform- (skewX (45deg))
  - transform- skewY (45deg)
  - transform- skewZ (45deg ) 

  rest (topic) ->
  HTML - semantic tags
  CSS - kay - frame animation

  javascript ->
  - javascript is used for bulding logics of s web page'
  - javascript is a high level language , used in both client side (client side) as well as server side (backend).
  - javascript comes from echma script so we see the latest version of javascript in terms of echma script.
  - the latest version of javascript is ES16.
  
  - Node js is the runtime environment of javascript
  - variable in javascript
  - 3 types of variable
     1. var
     - var is a type of variable which is use changing the variable value in later stage.
     2. let
     - let is a variable which is also used for changing the variable value in later stage.
     - let is a block scope/function scope so we have been used let most of the cases

     3. const - constant

 Rules for creating variable name ->
- variable are case sensitive only letter, digits, underscore & special charecter is allowed.
- only letter, underscore or special charecter ($ and _) is allowed to write first.

- reserved word cannot be vriable name.(for,while,vsr let const)

Data  type in javascript. ->
- data type is an atribute associated with a piece of data that tells a computer system hoe to interprit it's value.
- in data types we used " typeof" operater to know what type of data type is.

- mainly in javascript there are 2 types of datatypes are there ..
1. primitive.
- in primitive datatype 7 types of data type is there 
 1. number
 2. boolean
 3. undefined
 4. Null
 5. string
 6. Symbol
 7. Bigint

2. non- primitive/refersence.
- reference datatype are which can hold multiple element in a single frame.
- there are 3 types of reference  data type
1. array
2. object
3. function

conditional statemaent->
- (if, else,if-else,)
- if-elif condition :-
 - it's check the condition multiple time where the condition true , it returns true 
 - syntax -

if (condition )
{
  else if(condition)
  statement
}else if(condition){
  statement
}else (default condition){
  statement
}

- String Methods :-
1. str.toUppercase()
2. str.toLowercase()

Array in javascript :

 - array is a collection of items
 - ex- let arr = [1,3,4,7]
 Looping over an array ->
 - loop  -> iteration 
 - syntax -> for(let i=0; i < arr.length(); i++){
  statement
 }

Methods of Array ->
1. push() - add an element
2. pop() - remove from array
3. toString() - convert array to atring
4. concat() - add  to more array
5. unshift() - add an  element to start of an array
6. shift() - remove an element to the start of an array
7. slice() - return a piece of en array
8. splice() - change original array (add,remove,replace)


function in js :-
- it is a block of code that perform specific task , can be invoked or called whenever we needed 
- ex.(in build function)
 1. console.log("hello")- .log() is a finction 
 2. "abc".toUppercase() -> .toUppercase is a function 
 3. [1,2,3] .push() -> .push() is a function

 1. Normal Function ->

function Function_name(){
  statement
}
<!-- function calling -->
Function_name()


 2. Arrow Function
 - it is a compact way of writing a function.
 - it is uses map() func to retrive the backend data, filter() for filter our data

 function creation ->
  const function_name = (p1,p2)=>{
    state ment
  }
  <!-- function calling -->
  function_name(arg1,arg2)

  const name =(a,b) => {
    return a+b;
  }
 name(1,5)

 For each loop in array:-
 - arr.forEach(callbackfunction)
 - callbackFunction -> it is a function to execute for each element in the array
 - callbackFunction is a function that passed as an argument of another function .


 Advanced Js :-
 1. DOM
 2. EVENT & EVENT HANDLING
 3. SYNC & ASYNC CODE (promise, .then, .catch, async &  await )
 4. API Handling

DOM in javascript -
  - it stands for Document object model
  - when web page is lodaded , the browser create aa document object model of the page .
  - The HTML dom model is constructed as a tree like Structure.

  windows-> Document -> HTML -> Meta tags & title -> body -> h1 -> h2 -> etc..

  why we use Dom in js-

  - javasvcript can change all the HTML element in page.
  - javascript can create , delete or edit any HTML page directly through DOM
  - javascript can also acess css styling directly..

  Window object :-
  - the window oobject represents an open window in a browser .
  - it is a browser object & it automatically created by browser .
  - it is also a global object with lots of properties & methods.

DOM manipulation :-
  1. selecting with id -> document .getElementById("myId")
  2.  selecting with class -> documen.getElementsByclassName("myclass")
  3. selecting with tag -> document.getElementByTagname("p")

  4. Query selecter -> 
    - document.queryselecter("id/class/tag")
    - document.querySelecterAll("id/clas/tag")
 5. Attributes ->
   
   - getAttribute(attr) -> to get the  attribute value.
   - setattribute(attr, value) -> to set the attribute value.

6. Insert Element.
  
  - node.append(ele) -> adds at end of the node 
  - node.prepend(ele) -> add at the start of the node (inside)
  - node.after (ele) -> adds after the node (outside)
  - node.before(ele) -> adds before the node (outside)

7. Delete element :-

   - node.remove(ele) ->remove the node

2. Event & Event handling in java

  - the change in the state of an  object is known as event.
  - some famous event are -
    1. Mouse event (click, dblclick, onMouseover)
    2. Keyboard event (keypress, keyup, keydown)
    3. form event

Event Handling...
- syntax -

  node.event = ()=>
  {
    //handle here
  }

Event Object:-
  - it is a special object that has details about the event.

  - all event hsndle have access to the event object properties & methods.

   node.event = (e) =>
   {
    //handle here
   }
 -  in method you can get -> e.target,e.type,etc...

 Practice Task..

 Q. create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again.






