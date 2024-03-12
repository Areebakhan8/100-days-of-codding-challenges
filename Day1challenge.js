"use strict";
//question:1
//installtion..
let work = "Installation of Typescript,visual studio code, nodej.s & git";
console.log("Answer1:");
console.log(work);
//question:2
//personal message:store a person name in a variable & print msg to them,like "hello person would you like to learn some TypeScript today? "
let personname = "Areeba";
console.log("Answer2:");
console.log(`hello ${personname},would you like to learn some typescript today?`);
//question:3
//Name cases:store a person's name in a variable and then print that personnmae in lowercase, upercase, & titlecase.
let person = "Areeba";
console.log("Answer3:");
console.log("touppercase:", person.toUpperCase());
console.log("tolowercase:", person.toLowerCase());
console.log("titlecase:", person.replace(/\b\w/g, c => c.toUpperCase()));
