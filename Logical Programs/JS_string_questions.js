
// 1. Write a JavaScript function to check whether an 'input' is a string or not.

function is_string(input) {
    if (typeof input == 'string') {
        return true
    } else {
        return false;
    }
}
// console.log(is_string("homepage"))
// console.log(is_string([1, 2, 3, 4, 5]))


// 2. Write a JavaScript function to check whether a string is blank or not.

function is_Blank(str) {
    if (str.trim().length) {
        return false
    } else {
        return true;
    }
}

// console.log(is_Blank(""));
// console.log(is_Blank("   "));
// console.log(is_Blank(" abc  "));


// 3. Write a JavaScript function to split a string and convert it into an array of words.

let string_to_array = function (input) {
    return input.split(" ") // convert string to arr
}

// console.log(string_to_array("Homepage Infotech"))


// 4. Write a JavaScript function to extract a specified number of characters from a string.

let truncate_string = (str, length) => {
    return str.slice(0, length)
}

// console.log(truncate_string("Homepage", 4))


// 5. Write a JavaScript function to convert a string into abbreviated form.

function abbrev_name(str) {
    let arr = str.split(" ")
    return "".concat(arr[0], " ", arr[1].charAt(0), ".")
}

// console.log(abbrev_name("Rahul Patel"))

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.

// Way 1
function protect_email(email) {
    if (email.includes("@")) {
        let splittedEmail = email.split('@')
        console.log('splittedEmail', splittedEmail);
        let convertEmail = splittedEmail[0].substring(0, (splittedEmail[0].length / 2)) // (splittedEmail[0].length - splittedEmail[0].length / 2)

        return convertEmail + "...@" + splittedEmail[1];
    }
}

// Way 2
function protect_email1(email) {
    if (email.includes("@")) {
        return email.length > 5 ? email.slice(0, 5) + "..." + email.slice(email.indexOf('@'), email.length) : ''
        // let ss = email.slice(email.indexOf('@'), email.length)
    }
}

// console.log(protect_email('homepage.info@gmail.com')) 


// 7. Write a JavaScript function to parameterize a string.
let string_parameterize = function (str) {
    // Way 1 
    return str.toLowerCase().replaceAll(" ", "-")

    // Way 2
    return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");

    // Way 3
    let splittedStr = str.split(" ")
    let converToLower = splittedStr.map((val) => val.toLowerCase())
    return converToLower.join("-");
}
// console.log(string_parameterize("Home-Page Infotech Solutions LLP"))


// 8. Write a JavaScript function to capitalize the first letter of a string.

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
// console.log(capitalize('js string exercises'))


// 9. Write a JavaScript function to capitalize the first letter of each word in a string.

function capitalize_Words(str) {
    // Way 1

    // let splittedStr = str.split(" ")
    // let firstLettrUpper = splittedStr.map((ele) => ele[0].toUpperCase() + ele.slice(1))
    // return firstLettrUpper.join(" ")

    // Way 2

    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
// console.log(capitalize_Words('js string exercises'))



// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.

function swapcase(str) {

    // Way 1
    // let strToArr = str.split("")
    // let ArrToStr =  
    // return ArrToStr.join("")

    // Way 2
    return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
// console.log(swapcase('AaBbc'));


// 11. Write a JavaScript function to convert a string into camel case.

function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, char) {
        return char.toUpperCase();
    })
}
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));



// 12. Write a JavaScript function to uncommelize a string.

function uncamelize(str, separator = " ") {

    // Replace all capital letters by separator followed by lowercase one
    var str = str.replace(/[A-Z]/g, function (letter) {
        return separator + letter.toLowerCase();
    });
    // Remove first separator
    return str.replace("/^" + separator + "/", '');
}
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld', '-'));
// console.log(uncamelize('helloWorld', '_'));


// 13. Write a JavaScript function to concatenate a given string n times (default is 1).

function repeat(str, repeatTime = 1) {
    return str.repeat(repeatTime)
}

// console.log(repeat('Ha!'));
// console.log(repeat('Ha!', 2));
// console.log(repeat('Ha!', 3));


// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insert(str, add = '', position = 0) {
    return str.slice(0, position) + add + str.slice(position)
}
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));


// 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.

function humanize_format(num) {

    if (typeof num == "undefined") return

    switch (num % 10) {
        case 1: return num + "st"
        case 2: return num + "nd"
        case 3: return num + "rd"
        default:
            return num + "th"
    }
}

// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));



