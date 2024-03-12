"use strict";
//Question4:
//Famous Qoute:find a qoute from a person you admire.print the qoute and the of its author.your output should look something likethe following,including the qoutation marks:
//"Albert Einstein once said,"a person never made a mistake never tried anything new.""
let qoute = "a person never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log("Answer4:");
console.log(`${author} once said,"${qoute}"`);
//Question5:
//Famous Qoute2: repeat exercise 1,but this time store the famous person's name in a variable called famous-person. then compose your message and store it in a new variable called message.
let famous_person = "Albert Einstein";
let message = `${famous_person} once said,"${qoute}"`;
console.log("Answer5:");
console.log(message);
//Question6:
//Strippig names:Store a person's name, and include some whitespace chracter at the begining and end of the name. use "/t"(tab) and "/n" (new line) at least once, so the white space around yhe name is displayed.then print the name after strpping the whitespaces.
let myName = "\t\nAREEBA\t\n"; //save the with whitespace
console.log("Answer6:");
console.log(myName); //name with whitespace
console.log(myName.trim()); //name without whitespace
