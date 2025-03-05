// Sairaghav Udayagiri
// ITMD 541-01 Graduate Student

// Exercise #1: minMaxAverage
function minMaxAverage(arr) {
    const totalNum = arr.length;
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    const avg = arr.reduce((sum, num) => sum + num, 0) / totalNum;
    console.log(`Total Numbers: ${totalNum}, Min Value: ${minVal}, Max Value: ${maxVal}, Average: ${avg.toFixed(2)}`);
}
console.log("// Test Exercise #1");
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([1, 2, 3, 4, 5]);

// Exercise #2: Count Vowels
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`${str}: ${count} vowels.`);
}
console.log("// Test Exercise #2");
countVowels("Winter");
countVowels("Summer");
countVowels("Fall");

// Exercise #3: Sort Numbers
function sortNumbers(arr) {
    const sortedArray = arr.slice().sort((a, b) => a - b);
    console.log(`Original Array: [${arr}] Sorted Array: [${sortedArray}]`);
}
console.log("// Test Exercise #3");
sortNumbers([9, 4, 6, 2]);
sortNumbers([5, 8, 1, 4]);
sortNumbers([14, 12, 1, 2]);

// Exercise #4: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const celsiusFloat = parseFloat(celsius);
    const fahrenheit = (celsiusFloat * 9/5) + 32;
    console.log(`${celsiusFloat.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}
console.log("// Test Exercise #4");
celsiusToFahrenheit(30);
celsiusToFahrenheit("35");
celsiusToFahrenheit(100);

// Exercise #5: Sort People by Age
function sortPeople(people) {
    const sortedPeople = people.sort((a, b) => a.age - b.age);
    return sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
}
console.log("// Test Exercise #5");
const peopleArray1 = [
    { name: 'Rang', age: 27, city: 'Nellore' },
    { name: 'Gowt', age: 28, city: 'Balaji' },
    { name: 'Kart', age: 30, city: 'Hyderabad' },
    { name: 'Pava', age: 34, city: 'Usmansaipet' },
    { name: 'Kash', age: 35, city: 'NTR.Nagar' }
];
const peopleArray2 = [
    { name: 'Babu', age: 55, city: 'Indukurpeta' },
    { name: 'Ganesh', age: 62, city: 'Santhapeta' },
    { name: 'Syam', age: 54, city: 'BV.Nagar' },
    { name: 'Sreedhar', age: 61, city: 'Gudur' },
    { name: 'Soma', age: 68, city: 'Vanamthopu' }
];
console.log(sortPeople(peopleArray1));
console.log(sortPeople(peopleArray2));









