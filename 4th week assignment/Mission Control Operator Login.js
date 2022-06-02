/*
Eric Amoh Adjei
  Assignment: Mission Control Operator Login
  06/02/2022 
*/

var username = prompt("Please enter your First Name only... "); // set a variable

var Lastname = prompt("Please enter your Last Name to continue... "); // set a variable

var badgeNumber = prompt("Please enter badge number now...");


while(username.length <= 0 || username.length > 20) // while function creates loops
{
    username = prompt("Please enter only 1 to 20 characters here..."); //promt acts as an alert functin but this time needs an input
}

while(Lastname.length <= 0 || Lastname.length > 20) // while function creates loops
{
    Lastname = prompt("Please enter only 1 to 20 characters here..."); //promt acts as an alert functin but this time needs an input
}


while(badgeNumber.length <= 0 || badgeNumber.length > 4 ) // while function creates conditional loops
{
    badgeNumber = prompt("Please enter a valid 3-digit badge number...");
}


document.write("Welcome to the Mission Control room " + username + " " + Lastname + "," + " Yes! you made it finally."); // expecting a return with string ""

document.write("<br></br>"); // break point

document.write("Please read and confirm your input badge number " + badgeNumber + " Is correct."); // expecting a return with string ""

document.write("<br></br>");


