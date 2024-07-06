# Learn JS ⚡


### Scope in the JS:
- In JavaScript, scope refers to the visibility and accessibility of variables and functions within a codebase.

1. **Global Scope :** Variables and functions defined outside of any function or block have global scope. They are accessible throughout the entire JavaScript code, including inside functions and blocks.
    > Note: Variables declared with `var` in global scope become properties of the `window` object in browsers.
2. **Function Scope :** Variables declared inside a function have function scope and are accessible only within that function.
    >Note: 1. Both variables declared with `var` and variables declared with `const` & `let` are function-scoped.
    >      2. Also, variables declared with `var` inside any functions are not become the property of `window` object.
    ```js
      function doTask(){
        var num = 101;
        console.log(window.num) // undefined (num is not a property of window)
        console.log(num) // 101
      }
      console.log(num) // // Error: num is not defined
    ```

3. **Block Scope :** Introduced with ES6 (`let` and `const`), block scope refers to the visibility of variables within curly braces {} (like in `if`, `for`, `switch`, `while` statements).
    > Only variables declared with `const` & `let` are block-scoped, but variables declared with `var` are not confined to the block scope. They "leak" out of blocks and are accessible outside of them.

    ```js
    if (true) {
      var num = 30;
      let result = 20;
    }
    console.log(num); // 30 (accessible outside the block)
    console.log(result); // Error: 'result' is not defined.
    ```

4. **`window` Object :** In browsers, the `window` object represents the global `window` containing the DOM (Document Object Model). All global variables (declared with `var`) and functions ('function expressions' declared with `var`) become of the `window` object.
    ```js 
      function jayHari(){
        console.log('Jay Hari');
      }
      jayHari()    // Jay Hari
      window.jayHari() // Jay Hari

      const greet = function(){
        console.log("Har Har Mahadev");
      }
      greet();   // Har Har Mahadev
      window.greet();   // Uncaught TypeError: window.greet is not a function.

      var username = 'Mohan';
      let age = 25;
      const city = 'Pune';

      console.log(window.username); // 'Mohan'
      console.log(window.age);   // undefined (age is not a property of window)
      console.log(window.city);   // undefined (city is not a property of window)
      console.log(age);   // 25
      console.log(city);   // 'Pune'
    ```
    > Only functions, variables and function expressions declared with `var` are become the properties of the `window` object. 

5. **Global Variables :** Variables declared outside any function or block, with global scope, are called global variables. They are accessible throughout the entire program.


#### Compared with `var`, `let` declarations have the following differences:

- `let` declarations are scoped to blocks as well as functions.
- `let` declarations can only be accessed after the place of declaration is reached. For this reason, `let` declarations are commonly regarded as **non-hoisted**.
- `let` declarations do not create properties on `globalThis` when declared at the top level of a script.
- `let` declarations cannot be **redeclared** by any other declaration **in the same scope**.
- `let` begins declarations, not statements. That means we cannot use a lone `let` declaration as the body of a block (which makes sense, since there's no way to access the variable).


#### **Temporal dead zone (TDZ)**
- A variable declared with `let`, `const`, or `class` is said to be in a **"temporal dead zone" (TDZ)** from the start of the block until code execution reaches the place where the variable is **declared** and **initialized**.
  ```js
    const num = 20;

    function square(){
      console.log(num) // ReferenceError: Cannot access 'num' before initialization.
      const num = 50;
      return num * num;
    }

    square()
  ```

#### **Hoisting**
- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of **functions**, **variables**, **classes**, or **imports** to **the top of their scope**, **prior to execution of the code**.

1. **Function Hoisting:**
    > Hoisting only works for **function declarations** (`function greet(){...}`), not for **function expressions** => `const add = function(){...}`.

2. **Variable Hoisting:**
- Variables initialized with the `var` keyword are stored in the memory of the current Execution Context's VO as a property, and initialized with the value `undefined`. This means, unlike functions, trying to access the value of the variable before it is defined will result in `undefined`.
- Also, variable hoisting does not work for variables initialized with the `let` or `const` keyword. Trying to access a variable ahead of declaration and use the `let` and `const` keywords to declare it later will result in a `ReferenceError: -- is not defined`.

## Data Types in JS
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


## Objects in JS:
- An object is a collection of related data and/or functionality.
- These usually consist of several variables and functions (which are called properties and methods when they are inside objects).
  ```js
    myObj = {name:"Shyam", age:21, city:"Mumbai"}

    console.log(myObj.name)  // OP: Shyam
    console.log(myObj['name'])  // OP: Shyam

    Object.seal(myObj) //* 
    Object.freeze(myObj) //* 
  ```

### Constructors / Object Constructors / Constructor function:
- A constructor is just a function called using the `new` keyword. 
- When we call a constructor, it will:
    1. create a new object.
    2. bind `this` to the new object, so we can refer to `this` in our constructor code.
    3. run the code in the constructor.
    4. return the new object (we can store it in any variable).
  
  ```js
    function Student(name, age, city) {
      this.name = name,
      this.age = age,
      this.city = city,
      this.introduceSelf = function() {
        return `Hello, I'm ${name}. I'm ${age} years old and I'm from ${city}`
      }
    }

    const student1 = new Student('Sharad Kale', 25, 'Pune')
    const student2 = new Student('Savitri Bharadwaj', 28, 'Mumbai')

    student1.introduceSelf === student2.introduceSelf //* false
    Object.hasOwn(student1, 'introduceSelf') //* true
    Object.hasOwnProperty(student1, 'introduceSelf') //* true
  ```

### Object prototypes:
- **Prototypes** are the mechanism by which JavaScript objects inherit features (properties & methods) from one another.
- **Every object** in JavaScript **has a built-in property**, which is called its **prototype**. 
- The **prototype** is itself an **object**, so the prototype will have its own prototype, making what's called a **prototype chain**. The chain ends when we reach a prototype (`Object.prototype`) that has `null` for its own prototype.
- When we try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case `undefined` is returned.

  ```js
  // Constructor in JS
  function Student(name, age, city) {
    this.name = name,
    this.age = age,
    this.city = city
  }

  // 1st way to add a method to the Constructor's prototype
  const studentPrototype = {
    introduceSelf () {
      return `Hello, I'm ${this.name}. I'm ${this.age} years old and I'm from ${this.city}`
    }
  }
  Student.prototype.introduceSelf = studentPrototype.introduceSelf

  // 2nd way to add a method to the Constructor's prototype
  Student.prototype.greet = function() {
    return `Jay Hari from ${this.name}`
  }

  const stud1 = new Student('Sharada Mate', 28, 'Pune')
  const stud2 = new Student('Shyam Kale', 22, 'Jaipur')

  stud1.greet === stud2.greet  //* true
  Object.hasOwn(stud1, 'greet') //* false
  Object.hasOwnProperty(stud1, 'introduceSelf') // false
  ```
- `Student.prototype` is an object.
- Methods (ex. `greet`, `introduceSelf`) and properties defined on `Person.prototype` are accessible to all instances of Person (ex. `stud1`, `stud2`).

## Arrays in JS:
  ```js
    numbers = [1, 2, 3, 4, 5]
    fruits = [ 'mango', 'apple', 'orange', 'papaya' ]
  
    console.log(numbers[1]) // OP: 2

  ```

## Classes in JS:
- Classes in JavaScript are templates for creating objects with similar properties and methods. 
- They provide a way to define a blueprint for objects, allowing we to create multiple instances (objects) of that class with consistent properties and behaviors.


## Functions in JS:

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
      return 'Thanks to all of we!'
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


## **What is a Closure?**
- A closure happens when we create a function inside another function and the inner function uses variables from the outer function. This inner function keeps the variables from the outer function, even after the outer function has finished running.
- Key Points:
  1.  Inner Function: A function defined inside another function.
  2.  Lexical Scope: The inner function has access to variables of its containing function (outer function).
  3.  Persistent Scope: The inner function maintains access to the variables from the outer function even after the outer function has executed.
  > Closure: A combination of 'a function' and 'its lexical environment'.
  ```js
    function createCounter() {
      let count = 0;

      return function() {
        count++;
        return count;
      };
    }

    const counter1 = createCounter();
    const counter2 = createCounter();

    console.log(counter1()); // Output: 1
    console.log(counter1()); // Output: 2
    console.log(counter1()); // Output: 3
    
    console.log(counter2()); // Output: 1
  ```






## Remaining JS Topics
- Global Scope Vs Local Scope and/or function scope, block scope
- Lexical and Block Scope
- Higher order function, Callback function or callback
- Event Loop and Callback Queue
- Closures 

