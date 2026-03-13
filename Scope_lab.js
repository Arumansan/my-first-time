// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError
// --- Practice Task ---
{
    var myVar = "Original Var";
    let myLet = "Original Let";
    const myConst = "Original Const";

    // تلاش برای تغییر مقادیر داخل بلاک
    myVar = "New Var inside";
    myLet = "New Let inside";
    // myConst = "New Const inside"; // اینجا رو دقت کنید!
}

// تلاش برای تغییر مقادیر بیرون بلاک
myVar = "New Var outside";
myLet = "New Let outside"; // اینجا رو هم دقت کنید!
console.log(mylet);