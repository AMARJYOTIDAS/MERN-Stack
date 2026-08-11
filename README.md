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

sync in javascript :-

Synchronous -
- synchronous means the code runs in a particular sequence of instruction given in s program
- Each instruction waits for the previous instruction to complete it's execution .

ex.
console.log(one)
console.log(two)
setTime(()=>{
  console.log("three)
},4000)//4000 ms-4s.
console.log(three)

output-one ,two,three

Asunchronous:-
- due to synchronous programing , sometimes imp. instruction get blocked due  to some privious instruction , which a delay in UI.

- CAll back functionn which passed as an argument of another function.
Callback hell :-

- it 's a nested callback function stacked below one after another forming a pyramid structure.
- this is style of programming becomes difficult to understand & message .

 Promise in javascript
   - it is a solution of callbackk hell.
   - syntax :-


   let promise = new promise (resolve,rejexct)=.{
    //statement
   }

- a javascript promise object can be ->>

1. pending -> the result is undefinned
2. resolved - > the result is value (fulfilled)
3. reject -> the result is an error

promise.then((res)=>{
  //statement
})
- promise.catch((err)=>{
  //statement
})

Async &  await in javascript :-
 - async function always retturn a promise.
 - syntax.

 async function myFunction(){
  //statement
 }
 note- await pauses the execution of its sorrounding async function until th promise is settled

 statemet 1
 statemet 2
 statemet 3
 statemet 4

APL handling/ fetch API

- the fetch API provides an interface for fetching data..
- it uses request & response object.
- the Fetch() methods is used to fetch a data.
- syntax-

  let demo = fetch(url)

React js :-

  - react is a fronntend javascript library'..
  - react was developed by facebook by software engineer Jordan Walke.
  - react was also known as react js or ReactJs..
  - basically react is a tool for bulding UI components..


NPX :-(node package execute)

- npx stands for (node package execute).
- purpose -> it is an npm package runner bulded automatically with npm.
- function -> it allows yoou to run & execute javascript package directly from the npm, without needing to install them permanently...
- storage -> It download the package to a temporary cache memory execute the command & clear it up right after..


NPM (Node Package Manager)..

 - Purpose -> it is the default package manger for node js.1
 - Function -> it installs, upddates & deletes javascript packages & dependencies for our project.
 - Storage -> it saves package permanenetly either locally inside our project's "node modules" folder or globally on our system..

React Js History:-

- latest version of react js s 19.2.7
- intial release to the public was in  jully 2013.
- React Js Was 1st used in 2011 for facebook's news feed features.
- intially react gained lots of hate for the mix of javascript + HTML but in later stage or now these days 45% 
 of software developer used react js as core library for software development.

- ".jsx" is the extension of react js ..
- Jsx stands for 'javascript XML' (javascript + HYML)  

=========================================================================================================
- When you are installing react it will be multiple way to install and setup but there are 2 common ways that we are using react js is 

 1. CRA (create - react- app)
 2. VITE ( fastest way to install react js)

File Structure of a react js folder ->

1. Readme.Md ->
  - we will write readme.md for write some description or solution pf our project.\
2. Package. json ->

  - it will keep scripts, versions details & dependency of our project..

3. package-lock.json ->

 - it basically store dependency of packages.json file..

4. gitignore ->
 - files & folder ignored by git tracking...

5. src (source Folder) ->
- it is the main source folder where we can create file & write

RAFCE - React arrow functional component expression.
RFCE - React function component expression..

 props in React Js :-

 - props stands for properties.
 - props are passed to components via HTML attribute.

 Q-
  1. create a functional component called "Greeting " that takes a name  prop and display "hello, <name>!"

 epexcted output -> Hello , Amar!

 2. create a component "usecard" that takes prpops: name, age & city and display them in a card format..
 
 expexted output-

 name : Amar
 age : 21
 city : bhhubaneswar

 React Hooks :-

 - Hooks allow functions to have access to state & other react feature without usingg classes..

 - they provide direct API to react concept like props, state context etc..
 - Basically Hook  is a function that tell us " Hokk into " react state and lifecycle feature from function component..
 - there are many types of hooks 

 1. useRef()
 2. useMemo()
 3. useContext()
 4. useReducer()
 5. useCallback()
 6. useState()
 7. useEffect()

 1. useState() Hook in react ->
   - the react useState() hook allows us to track the state of a functional component..
   - state generallly refers to data or properties that need to be tracking in a application..

  import useState() ->
  import {useState} from 'react'

  initialize useState ->
  - we initialize our state by calling useState  in our function component.
  - useState accepts an initial state & return two value .

     1. the current state 
     2. a function that updates the state..
     
  syntax ->
  const [state, setState] = uestate("initial)
 

 - useEffect() Hook in react :-
 - useEffect is a react hook that lets us perform side effect in functional component , such as ..

   -> fetching data form an API
   -> updating the DOM
   -> setting up timer
   -> adding event listener

   syntax ->
   import {useEffect}(() =>
   {
   // add sidde effects
   return () =>{
    // clean code (optional)
   }

   },[dependencies]);
   
   1. Runs on every Render ->
    - if you don't provide any dependencies array, the effect runs after every render..

 2. Runs only once( on mount).
  - pass an empty dependency array [].

 Syntax

 useEffect(() =>{
  console.log("component Mounted")

 }, []);

 3. Runs when dependeny changes.
 - the effects runs only when the "count" changes.

 Syntax --
   
   usseEffect(() =>{
    console.log("component Mounted")
   }, [dependency])

  4. cleanup Function in useEffect .

  - useful for event listener, cleaning items ets..

  Syntax :-

    useEffect(() +>{
      return () =>{
                                                                                                                                        
      }
    })

Practice Qestion ..
1. create a component with a button and input field. print "component rendered" in the connsole  

useRef() hook in react..

- useRef() is a react hook that let you store  VALUE THAT DOES NOT cause re-render when it changes..

How we use it--

- it stores a value using .current
- it does not re-render the component when updated..
- used for ->
  
  - accessing dom element.
  - storing previous value.

 Practice Qestions ->

 1. create a component that ->

   - has a state count 
   - uses useRef too  store the previous value of count
   - show both :

     - current count
     - previous count
2.. create a component that ->

 - tracks how many times the component rendered.
 - use useRef
 - display render count in UI

3. Create a component that ->
  
  - start a timer using setIntervals
  - store interval Id using useRef

  -  has 2 buttons
      - start timer 


   4. create a component that   -> 
       - displaya div
       - show it's width on screen
       - use useRef() to access DOM

    use  -> ref.current.offsetWidth

    5. create a component that  -> 
       - display "first render " on first load
       - dispaly "updated" on sub

useMemo() Hooks in react js -- 

 - useMemo() is a react Hook that optimizes performance by caching (memorization) a value so it does  get recalculated on every  render..
 - in simple words we can  say - only recalculated when needed, otherwise reuses the old value..

 - Syntax()--

 const memorization = useMemo(() =>{
  // expensive calculation
  return result;

 },[dependencies]);

 - it runs the function when dependencies changes..
 - otherwise, it return the cached value (memorized value/ storage value)

  Why use useMemo()

  - it prevent unnecessary calculations.
  - improve performance..
  - useful for heavy computation / calculation..

  useCallback hooks in react js..

   - useCallback is a react that remember a function so it doesn't get re-created on every render..
   
   Why we use it ->

    - in react, every time a component re-render & function are created again..
    - this can cause unneccesary re-render in child component..
    - so useCallbackk helps to prevent that probllem.

    -Syntax ..

    const memorizedFunction = useCallback(() = {
      //function logic

    },[dependencies])


Practice Question on useContext Hooks :>


1. Language Switcher --
  - create  a context for languages (Engg, hindi, etc..)
  - add abutton to switch language.
  - change display text based on selected language..


2. Shooping cart count..
 - Create a cartcontext to sttore cart items count.
 - add "add to cart " button..
 - displayed total items in navbar.

3. Nested component without prpos.
  - create 3 components : App -> pareent -> child
  - pass data using useContaxt insted of props.
  - dispaly data in child.
  - Avoid prop drilling.
  

  UseReducer in React Hook..

- useReducer is a react hook used to manage complex state logics.
- we can say it is the powerful versions os useState.
- best way to use when ->

  - state has multiple values.
  - logic is complex.
  - many action changes the states..
  
  - Syntax --
   const [state,dispatch] = useReducer(reducer, initialstate)
    
    - where, state -> current value
     dispatch -> function to send action 
     reducer -> function that updates the state.

Vertual DOM in React  js...
 - virtual dom is a lightweight copy of the real DOM.
 - like we can say ->
   
    - real DOM -> Actual House
    - virtual DOM -> a blueprint (Copy of the house)

Process of virtual DOM ->

- insted of changing the real DOM every time, react uses virtual DOM for 
   - updates the virtual DOM
   - compares it with the previous vresion
   - changes only the necessary parts in real DOM..

Why use virtual Dom ?
  - faster update 
  - effiicient rendering
  - avoid unnecessary full page reload
  - improvr performance

React Router Dom in react js ->
 - React Router DOM is a library used in react to handle navigation between pages without reloading the whole website..

 - Example ->

   - /home
   - /contact
   - /about

- react Router lets you switch between these pages without refreshing the page.

Axios in react js ->
  
  - Axios is a popular js library used to make http request (API call from the browser) .
    - it helps you to fetch data from API's 
    - works with GET, POST, PUT, PATCH, DELETE
    - Return data in a clean json format 
    - mainly easier than fetch().
    