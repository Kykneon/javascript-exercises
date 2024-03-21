const findTheOldest = function (people) {
    const date = new Date();
    let currentYear = date.getFullYear();
    let personAge = 0;

    for (let person of people) {
        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = currentYear - person.yearOfBirth;
        }
    }
    for (let person of people) if (person.age > personAge) personAge = person.age;
    for (let person of people) if (person.age === personAge) return person;
};

// Do not edit below this line
module.exports = findTheOldest;


// Iterate through object
// function to compare year of death and year of death to determine age
// save age as key:value in refereenced object element
// function (method?) to select object with the highest age and return its name value
