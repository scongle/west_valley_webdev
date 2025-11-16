

let cats = 22;

let dogs = 13;

let addingVariables = cats + dogs;
console.log(addingVariables);

let addingStrings = 'javascript is '+'really awesome!';
console.log(addingStrings);

let myArray = new Array();
myArray.push('Coding is awesome');
myArray.push(500);
myArray.push(false);
console.log(myArray);

myArray[1] = 250;
console.log(myArray);

/*
 * quick loop and push
 */
let items = 25;
let itemsArray = new Array();
for(var i = 0; i < items; i++) {
    itemsArray.push('item-'+parseInt(i+1));
}
console.log(itemsArray);
