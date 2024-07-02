# Learn JS ⚡

##### Compared with var, let declarations have the following differences:

- `let` declarations are scoped to blocks as well as functions.
- `let` declarations can only be accessed after the place of declaration is reached. For this reason, `let` declarations are commonly regarded as **non-hoisted**.
- `let` declarations do not create properties on `globalThis` when declared at the top level of a script.
- `let` declarations cannot be **redeclared** by any other declaration **in the same scope**.
- `let` begins declarations, not statements. That means you cannot use a lone `let` declaration as the body of a block (which makes sense, since there's no way to access the variable).



##### Temporal dead zone (TDZ)
- A variable declared with `let`, `const`, or `class` is said to be in a **"temporal dead zone" (TDZ)** from the start of the block until code execution reaches the place where the variable is **declared** and **initialized**.


##### Hoisting
- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of **functions**, **variables**, **classes**, or **imports** to **the top of their scope**, **prior to execution of the code**.


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