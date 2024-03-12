//Question10:
//Adding Comments:choose two of the programs you've written add at least one comment to each.if the program are straightforword at this point,just add your name and the current date at the top of each program file.then,write one sentance describing whAT THE PROGRAM DOES

//hello 
//this is me areeba khan.

let myMiss:string="Miss Areeba"
let Mysir:string="sir Bilal"

console.log("Answer10:")
console.log(`hello ${myMiss} & ${Mysir} this is me Areeba khan & i am student of PIAIC.`)

//Question11:
//Names:store the name of a few of your friends in an array called names.print each person's name by accessing each element in the list,one at a time.

let myFriends:string[]=["Alina","Sameerah","Samama","Aqsa" ,"bushra"]

console.log("Answer11:")
for (let i=0; i<myFriends.length;i++)
{console.log(myFriends[i])}


//Question12:
//Greeting:use the array from exercise 11.Instead of just printing each person's name, print a message to them.the msg should be the same for each person,but personlized with thier name.

let groupperson:string[]=["Neha", "Rabiya", "Sana"]
console.log("Answer12:")

for (let name of groupperson)
{console.log(`hello ${groupperson} would you like to join whatsapp group for learning typescript?`)}
