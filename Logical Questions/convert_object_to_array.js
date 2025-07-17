const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

console.log('Keys ', Object.keys(person));
console.log('Velues ', Object.values(person));
console.log('Object to Array ', Object.entries(person));


var obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0 }

var result = Object.keys(obj).map((key) => [key, obj[key]])
console.log('result ', result);


