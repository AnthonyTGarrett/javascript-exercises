const findTheOldest = function(people) {
    let sorted = people.sort((a,b) => {

        let lastPerson = 0
        let nextPerson = 0;

        if(!a.yearOfDeath) {
            lastPerson = (new Date()).getFullYear() - a.yearOfBirth
        } else {
            lastPerson = a.yearOfDeath - a.yearOfBirth;
        }

        if(!b.yearOfDeath) {
            nextPerson = (new Date()).getFullYear() - b.yearOfBirth
        } else {
            nextPerson = b.yearOfDeath - a.yearOfBirth;
        }
        
        if (lastPerson > nextPerson) {
            return -1;
        } else {
            return 1;
        }
    })
    console.log(people)
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;


// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]