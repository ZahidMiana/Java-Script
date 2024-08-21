/*  "let const and var ki kahani" 
1:constant=>  which cannot change  
2:var=> Prefer not to use because of issue in block scope and function scope
3:Difference between var and let
var: Due to its function scope and potential for hoisting-related bugs, var is less commonly used in modern JavaScript development. It’s generally recommended to avoid var in favor of let or const unless you need specific behavior associated with var.
let: Preferred for variables that need to be reassigned but are limited to a block scope, making the code more predictable and less prone to errors.
*/

const accountId=12244;
var name="Zahid Iqbal";
let bussiness="Enterpreneur";
city="Lahore";
let statename;

// accountId=12; its constant we cannot change this variable not allowed
console.log(accountId);
console.table([accountId, name, bussiness,city,statename]); //through this we print all of our variable 
