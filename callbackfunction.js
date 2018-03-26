//call backs tester 1
//A callback function, also known as a higher-order function, is a function that is passed to another function (let's call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction.

function caller(a, b, callback) {
    return callback(a, b);
}
console.log("in caller function: ",caller(2, 3, function add() {
    return 2 + 3; }));//calling caller function by passing 'a' and 'b' values with the add() function that is going to assigned to callback argument of caller function. 

//callback 2 example
function multiply(val1,val2)//it is function that is multiply two number pass by callback1 argument of datagetter function. 
{
 return val1*val2;
}

function  datagetter(num1,num2,callback1)
{

  return callback1(num1,num2);//calling the multiply function that has been assigned to callback1 argument when main function datagetter is called. 
} 

console.log("In callback2 :",datagetter(2,5,multiply));//calling the datagetter function by passing num1 and num2 values with multiply function as third argument.