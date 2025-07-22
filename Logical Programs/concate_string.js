
s1 = "Homepage "
s2 = "Infotech "
s3 = "Solutions"


// Method 1


companyName = s1.concat(s2, s3);
// console.log('Comapny Name:', companyName);


// The arguments passed in the concat() method are converted to string values before concatenating if it is not of the type string.
const arr = ["Hello", " ", "World", "!"];
// console.log("".concat(...arr));


// Method 2 

// 2. Using assignment operator

const str1 = "Learn ";
const str2 = "to ";
const str3 = "code";
const final = str1 + str2 + str3;
console.log('Final String ', final);

// first number are added then concatenate with string
console.log(5 + 5 + 12 + " = 5 + 5 + 12");

// if you put any string before any calculative part
// then it will concatenate it as string
console.log("5 + 5 + 12 = " + 5 + 5 + 12);


// 3. Using join method

//The join() array method creates a new string by concatenating all array members to a single string.

// The join() method accepts the separator as the first argument, so for concatenation, you can pass an empty string ('') to it or space (' ') which will add all array members to the string separated by a space.

const array = ["Learn", "to", "code"];

let str = array.join('')
console.log('String ', str);


// /4. Using template string
// Using template string is not a pure form of concatenation but this looks cool and clear. Using this you can directly embed any string variable into another string.

// To concatenate are enclosed by backticks (``) and the string variable that you want to embed is enclosed by curly braces with a dollar sign (${string_variable}).

const str4 = "Learn";
const str5 = "to";
const str6 = "code";
console.log(`${str4} ${str5} ${str6}.`);
