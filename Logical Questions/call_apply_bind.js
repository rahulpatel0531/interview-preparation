let name = {
    firstname: "Homapage",
    lastname: "Infotech"
}

let displayName = function (city, state) {
    console.log(`${this.firstname} ${this.lastname} ${city} ${state}`);
}

// function borrowing call() passing agruments indivisual
displayName.call(name, "Indore", "Madhya Pradesh")

// apply()  passing agruments using array
displayName.apply(name, ["Mumbai", "Maharastra"])


displayComapnyName = displayName.bind(name, "Surat", "Gujrat")
// console.log(displayComapnyName);
displayComapnyName();




