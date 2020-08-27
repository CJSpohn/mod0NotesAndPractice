// Define variables we will work with

var names = [ "jokic_nikola", "murray_jamal", "harris_garry" ];

// The rest are just placeholder arrays that we use during the for loop.
// I wouldn't reference this as 'best practice' for anything because I'm sure it's very sloppy code.

var newName = []
var singleName
var lastName
var firstName
var newArray
var finalArray

//creat the for loop to iterate through each array element in our names array

for (var i = 0; i < names.length; i++ ) {
  names[i] = names[i].replace( '_', ' ' ); //the str.replace() method swaps the underscore with a space
  singleName = names[i].split(' '); //the str.split() method divdes the strings "jokic nikola" into ["jokic", "nikola"]


//The toUpperCase method doesn't actually change the string, so you have to make a new variable to hold the capilalized lastLetter
//charAt() assigns the variable lastLetter to be the first letter of the first element (the last name) in the array
  var lastLetter = singleName[0].charAt(0);
  capLastName = lastLetter.toUpperCase();
  var firstLetter = singleName[1].charAt(0);
  capFirstName = firstLetter.toUpperCase();
//Now we have variable placeholders for the capitalized first letters of each name

  lastName = singleName[0];
  firstName = singleName[1];


//the slice method removes the first letter from the string. I put it in its own variable so we can add the capitalized first letter
//to the rest of the name.
  cutFirstName = firstName.slice(1);
  cutLastName = lastName.slice(1);

/* array.push() adds elements to the end of the array so we can do the firstName first. We also comebine capFirstName which is just a single letters
with cutFirstName which is the names without the first letter. I did them out of order because push adds to the end. If you swap the order I think
they end up like Jikola Nokic instead of Nikola Jokic.
*/
  newName.push(capFirstName + cutFirstName);
  newName.push(capLastName + cutLastName);
}

//I don't know if you can make the array combine in the loop, I'm sure you can, but I was running out of gas so I did it here.

var finalArray;

finalArray = [newName[0] + " " + newName[1], newName[2] + " " + newName[3], newName[4] + " " + newName[5]];
console.log(finalArray);
