console.log('loaded'); 

// PART 1 DATA TYPES

	// 1. Booleans
	// 2. String
	// 3. Array
	// 4. Array
	// 5. OBjects
	// 6. Objects qith arrays within them 

// PART 2 TAKE IT EASY

// 1
// var rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

// console.log(rainbow[4]); 

// // 2

// const Veda = {
// 	Age: 22,
// 	Hobby: 'Sketching',
// 	Town: "Arvada",
// 	Datatype: "Objects"
// }

// console.log(Veda.Hobby);

// PART 3 CRAZY OBJECT

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

console.log(crazyObject.taco.salsa);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby[0]);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters.name);



























