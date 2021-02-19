//insert your pseudocode below
/*

Set a Variable numbers that has number from (1-100).
Ask/Prompt it with some text of questions.
Set questions to determine whether the number has the following:-
    - Greater or smaller
    -Intergar number or not 
Print the guess number

*/

//insert your code below
var Intergar, Guess, Count_of_Characters, Is_Equal;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


Intergar = mathRandomInt(1, 100);
Guess = Number(window.prompt('Guess the number'));
while (0 != 0) {
  Is_Equal = Number(window.prompt('Your number is lower'));
  Guess = Number(window.prompt('Your number is greater'));
  Guess = 0;
}
