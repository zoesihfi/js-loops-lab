//Prompt 1: Write a for loop that counts from 10 to 20, that prints 
//each number to the console.
console.log("Prompt 1:")
for(var i=10; i <= 20; i++) {
    console.log(i)
}
//Prompt 2: Write a for loop that counts down from 
//40 to 0 that prints each number to the console.
console.log("Prompt 2:")
for(var i=40; i >= 0; i--) {
    console.log(i)
}
//Prompt 3: Write a for loop that counts from 0 to 20 in increments of 
//2 that prints each number to the console.
console.log("Prompt 3:")
var i = 0;
while(i <= 20) {
    console.log(i)
    i += 2
}
//Prompt 4: Write a for loop that counts from -15 to 15 that prints each 
//number to the console.
console.log("Prompt 4:")
for(var i=-15; i <= 15; i++) {
    console.log(i)
}
//Prompt 5: Create a variable called answer and define it 
//outside of your loop. Create a loop that counts from 20 to 30, 
//incrementing by 2. Add i to answer. After your loop, print the value 
//of answer to the console.
console.log("Prompt 5:")
var answer = 0;
var i = 20;
while(i <= 30) {
    console.log(i)
    i += 2
    answer = answer + i
}
console.log(`Answer: ${answer}`)
//Prompt 6: This will require you to create a loop that counts from 0 to 30. 
//Place a conditional statement inside of your loop with the following:
    //If the value of a is even, print out "a is an even number".
    //If the value of a is odd, print out "a is an odd number".
console.log("Prompt 6:")
for(var i=0; i <= 30; i++) {
    if (i%2 == 0) {
		console.log(`${i} is an even number`)
    }else {
		console.log(`${i} is an odd number`)
    }     
}
//Prompt 7: Write a for loop that will iterate from 0 to 10. 
//For each iteration of the for loop, it will multiply the number by 
//9 and log the result.
console.log("Prompt 7:")
for(var i=0; i <= 10; i++) {
    console.log(`${i} multiplied by 9 is ${i*9}`)
}
//Prompt 8: Write a do...while loop that increments i by 2 as long as 
//i is less than 20.
console.log("Prompt 8:")
var i = 0;
do {
    console.log(i)
    i += 2
} while(i < 20);
//Prompt 9: Write a while loop that counts from 5 to 20 and prints each 
//number to the console.
console.log("Prompt 9:")
for(var i=5; i <= 20; i++) {
    console.log(i)
}
//Prompt 10: Write a while loop to count from 20 to 0. Log each number to
// the console.
console.log("Prompt 10:")
var i = 20;
while (i >= 0) {
    console.log(i)
    i -= 1
}
//Prompt 11: Write a while loop that uses the prompt function that will 
//continue to ask the user for the magic number 
//until they enter the number 8.
console.log("Prompt 11:")
var magicNum = prompt("Whats the magic number?")

if (magicNum === 8) {
    console.log("Congrats! you found the magic number.")
}else {
while (magicNum != 8) { 
    console.log(`${magicNum} is not the magic number`)
    magicNum = prompt("Whats the magic number?")
    }
}
//Prompt 12: Write a do while loop that iterates at least once and 
//reiterates until i is no longer less than 5.
console.log("Prompt 12:")
var i = 0;
do {
    console.log(i)
    i++
}while (i <= 5);
