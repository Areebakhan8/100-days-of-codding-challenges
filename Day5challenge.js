"use strict";
//Question13:
//Your Own Array:Think of your favourite mode of transporatation such as a motorcycle, or a car and make a list that stores severals examples.use your list to print a series of statements about these items,such as "i would like to own a honda motorcycle."
let transport = ["Honda Motorcycle", "corolla Car", "civic"];
console.log("Answer13:");
transport.forEach(transport => { console.log(`I would like to own a ${transport}.`); });
//Question14:
//Guest list:if you could invite anyone ,living or deceased,to dinner,who would you invite? Make a list thats includes at least three people you,d like to invite to dinner.Ten use your list to print a message to each person,inviting them to dinner.
let Guests = ["Khadija", "Amna", "Tasmiya", "Rameen"];
console.log("Answer14:");
Guests.forEach(guest => { console.log(`Dear ${guest},would you like to join me for dinner?`); });
//Question15:
//Changing Guest List:One of your guests can't make it to the dinner,so you need to send out a new set of invitation with a replacement guest.
let guestArray = ["Khadija", "Amna", "Tasmiya", "Rameeen"];
let cannotattend = "Rameen";
console.log("Answer15:");
console.log(cannotattend + "can not attend the dinner toinght"); //cant make dinner
let newGuest = ("Hassan"); //replace the guest
guestArray[guestArray.indexOf(cannotattend)] = newGuest;
guestArray.forEach(guestArray => //new invitation
 { console.log(`dear ${guestArray} would you like to join me to dinner?`); });
