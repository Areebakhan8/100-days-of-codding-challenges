//Question16:
//More Guest:you have found a bigger dinner table, so there's room for more guest

let guestList:string[] =["Mehak" ,"Areeba" ,"Bilal" ,"Hamza", "Ameen"]
console.log("Answer16:")
console.log("Lets celebrate my success in bigger dinner table")
//adding more guest
guestList.unshift("Ubaid")
guestList.splice(guestList.length /1,0,"Sameen")
guestList.push("Qasim")
guestList.forEach(guestList=>
    {console.log(`dear ${guestList} would you like to celebrate my success?`)})


//Question17:
//Shrinking Guest List:Unfortunately, your new table won't arrive in time,and you can invite only two guests.

console.log("Answer17:")
console.log("due to limited space, only two people can be invited for dinner")
//removing guest
while (guestList.length >2)
{const removedguests=guestList.pop();//remove the last guest from the list
console.log(`sorry,${removedguests},you're no longer invited for dinner`)}
//print invitation to the remaining 2 guests
guestList.forEach((guestList)=>{console.log(`dear ${guestList} you're still invited to dinner.`)})
guestList.splice(0,guestList.length)
console.log(guestList)//show an empty list



//Question18:
//Seeing The World:think of at least five places you'd like to visit.
console.log("Answer18:")
let placeTovisit: string[] =["Pakistan", "Dubai" ,"SaudiArabia" ,"America","London"]
//print the away in this original order
console.log("original order:", placeTovisit);

//print the array in albhabetical order without modifiying the actual list
console.log("Alphabetical order:", [...placeTovisit].sort());

//show that the arrayis still in its original order
console.log("original order after sorting:", placeTovisit);

//print the array in reverse alphabetical order without changing the order of the original list
console.log("reverse albhabetical order:",[...placeTovisit].sort().reverse());

//show that the array is still in its original order
console.log("original order after reverse sorting:",placeTovisit);

//reversethe order of the list.
console.log("Reversed order:", placeTovisit);

//reverse the order of the list again to get back to the oiginal order
placeTovisit.reverse();
console.log("back to original order:", placeTovisit);

//sort the array in alphabetical order
placeTovisit.sort();
console.log("sorted in alphabetical order:",placeTovisit);

//sort the array in reverse alphabetical order
placeTovisit.sort((a, b)=> b.localeCompare(a));
console.log("sorted in reverse alphabetical order:",placeTovisit);
