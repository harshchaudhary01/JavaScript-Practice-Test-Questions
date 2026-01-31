
### The output of the code will be:
 `undefined`
 `ReferenceError: Cannot access 'b' before initialization`
 `undefined`

## Explanation:
`*. when we run this program, the GEC(Global Execution Context) is created, in which the code is running in two phase, first the memory phase(or variable environment phase) in which all the variables in the lexical scope is getting stored with "undefined", and all the function expressions are stored as it is.`

`1. So accordingly, In the first line "console.log(a);" it prints that the value of a is undefined because of the above reason.`

`2. In the second line "console.log(b)", the variable 'b' is declared using 'let', which is also hoisted but not initialized. Variables declared with 'let' and 'const' are in a "temporal dead zone" from the start of the block until the declaration is encountered. Thus, trying to access 'b' before its declaration results in a ReferenceError.`

`3. In the third line, Again the GEC(Global Execution Context) is created, and the program counters shift to this execution context and again, the code is run in two phase "variable environment" and "Code Execution Phase" and then it prints the undefined due to hoisting behaviour of javascript, and after ending the function the new GEC is deleted from the call stack, and then the program counter move back to the Main Global Execution Context...` 
