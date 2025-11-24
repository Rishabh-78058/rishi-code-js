const accountId = 144643;
let accountName = "Rishabh chaurassiya"
var  accountPassword = "12345678"
accountCity = "Rewa"
// accountId = 2 // not allowed
//{ } this is block scope

console.log(accountId);

/* this is  multi line comment
prefer not to use var
because of issue in block scope and functional scope
use let and const
*/
accountName="rishi chaurassiya"
accountPassword="87654321"
accountCity="Bhopal"

console.table([accountId, accountName, accountPassword, accountCity]);