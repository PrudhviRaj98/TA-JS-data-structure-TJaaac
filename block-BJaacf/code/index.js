// 1. Create an array named numbers and store 5 number values in it
let numbers = [1,2,3,4,5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let count = 0;
let number = 0;
for(i = 0 ; i < numbers.length ; i++){
    number = numbers[i] +number; 
    count++
}
console.log(number);

// 3. Calculate the average of array items and print it to the console using console.log()
let avg = number / count;
console.log(avg);

// 4. Find the highest number in the array and print it to the console using console.log()
let max = 0;
for(i = 0 ; i <= numbers.length ; i++ ){
    if (numbers[i] > max){
        max = numbers[i];
    }
    console.log(max);
}
// 2. Calculate the sum of array items and print it to the console using console.log()
let count = 0;
let number = 0;
for(i = 0 ; i < numbers.length ; i++){
    number = numbers[i] +number; 
    count++
}
console.log(number);

// 3. Calculate the average of array items and print it to the console using console.log()
let avg = number / count;
console.log(avg);

// 4. Find the highest number in the array and print it to the console using console.log()
let max = 0;
for(i = 0 ; i <= numbers.length ; i++ ){
    if (numbers[i] > max){
        max = numbers[i];
    }
    console.log(max);
}

// 5. Find the lowest number in the array and print it to the console using console.log()

let low = 100;
for(i = 0 ; i <= numbers.length ; i++ ){
    if (numbers[i] < low){
        low = numbers[i];
    }
    console.log(max);
}

// 6. Find the even numbers in the array and print them to the console using console.log()

let even = [];

for(i = 0 ; i <= numbers.length ; i++ ){
    if(numbers[i] % 2 === 0){
        even.push(numbers[i]);
    }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];

for(i = 0 ; i <= numbers.length ; i++ ){
    if(numbers[i] % 2 != 0){
        odd.push(numbers[i]);
    }
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisible = [];
for(i = 0 ; i <= numbers.length ; i++ ){
    if(numbers[i] % 5 === 0){
        divisible.push(numbers[i]);
    }
}
console.log(divisible);


// 9. Log all the element of the array one by one

for(i = 0 ; i <= numbers.length ; i++ ){
    console.log(numbers[i]);
}


// 10. Find all the number in the array that is divisible by 3
let divisibleBy3 = [];
for(i = 0 ; i <= numbers.length ; i++ ){
    if(numbers[i] % 3 === 0){
        divisible.push(numbers[i]);
    }
}
console.log(divisibleBy3);