# Learn JS ⚡



##### Compared with var, let declarations have the following differences:

- `let` declarations are scoped to blocks as well as functions.
- `let` declarations can only be accessed after the place of declaration is reached. For this reason, `let` declarations are commonly regarded as **non-hoisted**.
- `let` declarations do not create properties on `globalThis` when declared at the top level of a script.
- `let` declarations cannot be **redeclared** by any other declaration **in the same scope**.
- `let` begins declarations, not statements. That means you cannot use a lone `let` declaration as the body of a block (which makes sense, since there's no way to access the variable).



##### **Temporal dead zone (TDZ)**
- A variable declared with `let`, `const`, or `class` is said to be in a **"temporal dead zone" (TDZ)** from the start of the block until code execution reaches the place where the variable is **declared** and **initialized**.


##### **Hoisting**
- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of **functions**, **variables**, **classes**, or **imports** to **the top of their scope**, **prior to execution of the code**.

1. **Function Hoisting:**
    > Hoisting only works for **function declarations**, not for **function expressions** => `const add = function(){...}`.

2. **Variable Hoisting:**
- Variables initialized with the var keyword are stored in the memory of the current Execution Context's VO as a property, and initialized with the value `undefined`. This means, unlike functions, trying to access the value of the variable before it is defined will result in `undefined`.
- Also, variable hoisting does not work for variables initialized with the `let` or `const` keyword. Trying to access a variable ahead of declaration and use the `let` and `const` keywords to declare it later will result in a `ReferenceError`.

### Data Types in JS
**There are two types of data types in JS.**
1. Primitive (Value Types)
2. Non Primitive (Reference Types)

#### Primitive Data Types or Value Types:

**We can classify primitive data types in 7 categories.**
1. number
2. string
3. boolean
4. undefined
5. null
6. bigint
7. symbol

#### Non-primitive data types or Reference Types:
**There is only one type of non primitive data type that is called object**

**Objects are further divided into three categories.**
- Object Literals
- Arrays
- Functions 


### What is 'Truthy' or 'Falsy' values in JS:
1. Falsy Values => `false`, `0`, `undefined`, `null`, `''` or `""`.
2. Truthy values => Every other value except all falsy values. Some examples `1`, `-20`, `" "`, `'Raghav`, `[]`, .....


### Operators:
#### Compound Operators:
- **Compound (Combined Assignment) Operators:**
  1. `+=` Addition Assignment Operator
  2. `-=` Substraction Assignment Operator
  3. `%=` Remainder Assignment Operator
  4. `*=` Multiplication Assignment Operator
  5. `/=` Division Assignment Operator
  6. `**=` Exponentiation Assignment Operator
- Increment `++`
- Decrement `--`



#### Comparison Operators:
1. `==` equal to (equality) [it does implicit (automatic) conversion.]
2. `===` equal value and equal type (strict equality)
3. `!=` not equal
4. `!==` not equal value and not equal type (strict)
5. `>` greater than
6. `<` less than
7. `>=` greater than or equal to
8. `<=` less than or equal to


#### Logical Operators:
1. `&&` (And)
2. `||` (Or)
3. `!` (Not)


#### Ternary Operator (?:): `Condition ? 1st value : 2nd value`


### Objects in JS:
```js
  myObj = {name:"Shyam", age:21, city:"Mumbai"}

  console.log(myObj.name)  // OP: Shyam
  console.log(myObj['name'])  // OP: Shyam

  Object.seal(myObj) //* 
  Object.freeze(myObj) //* 
```

### Arrays in JS:
```js
  numbers = [1, 2, 3, 4, 5]
  fruits = [ 'mango', 'apple', 'orange', 'papaya' ]
 
  console.log(numbers[1]) // OP: 2

```

### Functions in JS:

1. **Function Declaration:**
```js
function intro(username='Madhav', profession='Data Analyst') {
  console.log(username, profession) 
  return `Hello, I'm ${username}, and I'm a ${profession}`
}

intro('Raghav', 'Web Developer') // Hello, I'm Raghav, and I'm a Web Developer.

add(10, 25) // OP: 35

function add(num1, num2){
  return num1 + num2
}
```

2. **Function Expression:**
```js
// Function Expression 
let doSomething = function (num1, num2){
  return num1 * num2
}

// Function Expression
const greet = function () {
  console.log("Namaste everyone..!")
}

var sayThank = function () {
  return 'Thanks to all of you!'
}
```



### Execution Context:
- **There are two kinds of Execution Context in JavaScript: Global Execution Context (GEC) and Function Execution Context (FEC)**

1. **Global Execution Context (GEC)** :
- Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).
- The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.
> For every JavaScript file, there can only be one GEC.

2. **Function Execution Context (FEC)** :
- Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.
- Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.
- Each Function Execution Context creates its scope: the space/environment where the variables and functions it defined can be accessed via a process called Scoping.



|Global Execution Context| Function Execution Context|
|:------                 | :-----------------        |
|Creates a Global Variable object that stores function and variables declarations.| Doesn't create a Global Variable object. Rather, it creates an argument object that stores all the arguments passed to the function. |
|Creates the `this` object that stores all the variables and functions in the Global scope as methods and properties.|Doesn't create the `this` object, but has access to that of the environment in which it is defined. Usually the `window` object.|
|Can't access the code of the Function contexts defined in it.|Due to scoping, has access to the code(variables and functions) in the context it is defined and that of its parents|
|Sets up memory space for variables and functions defined globally.|Sets up memory space only for variables and functions defined within the function.|