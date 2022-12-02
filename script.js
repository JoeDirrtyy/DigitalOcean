//Variable scope

// Assign the string value Sammy to the username identifier
// var username = "Joe_Dirty";

// //Check if variable is equal to value
// if (username === "Joe_Dirty") {
//     console.log(true);
//   }

//   // Assignment of various variables
// var name = "Joe";
// var number = 300;
// var animalType = [ "mammals", "birds", "fish" ];
// var poem = { roses: "red", violets: "blue" }; 
// var success = true;
// var nothing = null;

// // Send number variable to the console
// console.log(number);


// // Assign value to password variable
// var password = "racecar2";

// // Reassign variable value with a new value
// password = "racecar3";

// console.log(password);





// // Initialize a global variable
// var creature = "dragon";

// // Initialize a global variable
// var species = "human";
 
// function transform() {
//   // Initialize a local, function-scoped variable
//   var species = "Lizard Man";
//   console.log(species);
// }



// // Log the global and local variable
// console.log(species);
// transform();
// console.log(species);

// var hotDay = true;

// // Initialize a global variable
// let breed = "human";

// if (hotDay) {
//   // Initialize a block-scoped variable
//   let breed = "Lizard Man";
//   console.log(`on a hot day, joe turns into a ${breed}.`);
// }

// console.log(`when it is not a hot day, joe is just a regular  ${breed}.`);

// // Use var to initialize a variable
// var species = "human";

// if (hotDay) {
//   // Attempt to create a new variable in a block
//   var species = "LizardMan";
//   console.log(`It is a hot day. Joe is currently a ${species}.`);
// }

// console.log(`It is not a hot day. Joe is currently a ${species}.`);



// //Hoisting

// //Attempt to use a variable before declaring it
// console.log(x);

// // Variable assignment
// var x = 100;

// // Attempt to use a variable before declaring it
// console.log(x);

// // Variable assignment without var
// x = 100;

// // The code we wrote
// console.log(x);
// var x = 100;

// // How JavaScript interpreted it
// var x;
// console.log(x);
// x = 100;

// // Initialize x in the global scope
// var x = 100;

// function hoist() {
//   // A condition that should not affect the outcome of the code
//   if (false) {
//     var x = 200;
//   }
//   console.log(x);
// }

// hoist();

// // Initialize x in the global scope
// let x = true;

// function hoist() {
//   // Initialize x in the function scope
//   if (3 === 4) {
//     let x = false;
//   }
//   console.log(x);
// }

// hoist();

// // Attempt to overwrite a variable declared with var
// var x = 1;
// var x = 2;

// console.log(x);

// // Attempt to overwrite a variable declared with let
// let y = 1;
// let y = 2;

// console.log(y);



//creating an object

// Initialize object literal with curly brackets
// const objectLiteral = {};

// // Initialize object constructor with new Object
// const objectConstructor = new Object();

// // Initialize gimli object
//  const Algar = {
// 	name: "algar",
// 	race: "elve",
// 	weapon: "bow,
// 	greet: function() {
// 		return `Hi, my name is ${this.name}!`;
// 	}
// }

// console.log(algar);
// // Retrieve the value of the weapon property
// console.log(algar.weapon);
// // Retrieve the value of the weapon property
// console.log(algar["weapon"]);
// console.log(algar.greet());

// // Add new age property to algar
// algar.age = 139;

// // Add new age property to algar
// algar["age"] = 139;
// console.log(algar.age);

// // Add new fight method to algar
// algar.fight = function() {
// 	return `Algar attacks with an ${this.weapon}.`;
// }

// console.log(algar.fight());

// // Update weapon from axe to battle axe
// algar.weapon = "battle axe";

// console.log(algar);

// // Remove weapon from algar
// delete algar.weapon;

// console.log(algar);



//Looping through object properties
// const algar = {
// 	name: "Algar",
// 	race: "Elve",
// 	weapon: "Sword",
// };

// // Iterate through properties of algar
// for (let key in algar) {
//   console.log(algar[key]);
// }

// // Get keys and values of algar properties
// for (let key in algar) {
//   console.log(key.toUpperCase() + ':', algar[key]);
// }

// // Initialize method on algar object to return property keys
// Object.keys(algar);


//Understanding Arrays

// // Assign the five oceans to five variables
// const ocean1 = "Pacific";
// const ocean2 = "Atlantic";
// const ocean3 = "Indian";
// const ocean4 = "Arctic";
// const ocean5 = "Antarctic";

// // Assign the five oceans
// let oceans = [
// 	"Pacific",
// 	"Atlantic",
// 	"Indian",
// 	"Arctic",
// 	"Antarctic",
// ];

// // Print out the first item of the oceans array
// console.log(oceans[0]);

// //Creating an array

// // Initialize array of whale species with array constructor
// let whales = new Array(
// 	"blue",
// 	"orca",
// 	"humpback",
// );

// // Initialize array of whale species with array constructor

// // Print out the entire whales array
// console.log(whales);

// // Initialize array of mixed datatypes
// let mixedData = [
// 	"String",
// 	null,
// 	7,
// 	[
// 		"another",
// 		"array",
// 	],
// ];

// //Indexing Arrays
// let seaCreatures = [
// 	"octopus",
// 	"squid",
// 	"shark",
// 	"seahorse",
// 	"starfish",
// ];

// console.log(seaCreatures.length);
// console.log(seaCreatures.indexOf("seahorse"));
// console.log(seaCreatures.indexOf("cuttlefish"));

// //Accessing items in the array
// console.log(seaCreatures[1]);

// const lastIndex = seaCreatures.length - 1;

// console.log(seaCreatures[lastIndex]);
// //Not in array scope
// console.log(seaCreatures[10]);

// let nestedArray = [
// 	[
// 		"salmon",
// 		"halibut",
// 	],
// 	[
// 		"coral",
// 		"reef",
// 	]
// ];

// console.log(nestedArray[1][0]);

// //Adding an item to an array
// seaCreatures[5] = "whale";

// console.log(seaCreatures);

// // Append lobster to the end of the seaCreatures array
// seaCreatures.push("lobster");

// console.log(seaCreatures);

// // Append dragonfish to the beginning of the seaCreatures array
// seaCreatures.unshift("dragonfish");

// console.log(seaCreatures);

// //Removing an item from the array
// seaCreatures.splice(7, 1);

// console.log(seaCreatures);

// let firstArray = seaCreatures.slice(0, 7);
// let secondArray = seaCreatures.slice(8, 10); 

// console.log(firstArray.concat(secondArray));

// console.log(seaCreatures);

// // Remove the last item from the seaCreatures array
// seaCreatures.pop();

// console.log(seaCreatures);

// //Modifying items in the array

// // Assign manatee to the first item in the seaCreatures array
// seaCreatures[0] = "manatee";

// console.log(seaCreatures);

// // Replace seahorse with sea lion using splice method
// seaCreatures.splice(3, 1, "sea lion");

// console.log(seaCreatures)();


//Looping through the array

// Create an array of shellfish species
// let shellfish = [
// 	"oyster",
// 	"shrimp",
// 	"clam",
// 	"mussel",
// ];

// // Loop through the length of the array
// for (let i = 0; i < shellfish.length; i++) {
//   console.log(i, shellfish[i]);
// }

// // Create an array of aquatic mammals
// let mammals = [
// 	"dolphin",
// 	"whale",
// 	"manatee",
// ];

// // Loop through each mammal
// for (let mammal of mammals) {
// 	console.log(mammal);
// }


//For loop

// Initialize a for statement with 5 iterations
// for (let i = 0; i < 4; i++) {
// 	// Print each iteration to the console
// 	console.log(i);
// }

// Set initial variable to 0
// let i = 0;

// // Manually increment variable by 1 four times
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);


//Optional Expressions

// Declare variable outside the loop
//let i = 0;

// // Initialize the loop
// for (; i < 4; i++) {
// 	console.log(i);
// }

// Declare variable outside the loop
// let i = 0;

// // Omit initialization and condition
// for (; ; i++) {
// 	if (i > 3) {
// 		break;
// 	}
// 	console.log(i);
// }

// // Declare variable outside the loop
// let i = 0;

// // Omit all statements
// for (; ;) {
// 	if (i > 3) {
// 		break;
// 	}
// 	console.log(i);
// 	i++;
// }

//Modifying the Array
// Initialize empty array
// let arrayExample = [];

// // Initialize loop to run 3 times
// for (let i = 0; i < 3; i++) {
// 	// Update array with variable value
// 	arrayExample.push(i);
// 	console.log(arrayExample);
// }

// // Declare array with 3 items
// let fish = [ "flounder", "salmon", "pike" ];

// // Initalize for loop to run for the total length of an array
// for (let i = 0; i < fish.length; i++) {
// 	// Print each item to the console
// 	console.log(fish[i]);
// }

// const shark = {
// 	species: "great white",
// 	color: "white",
// 	numberOfTeeth: Infinity
// }

// // Print property names of object
// for (attribute in shark) {
// 	console.log(attribute);
// }


// // Print property values of object
// for (attribute in shark) {
// 	console.log(shark[attribute]);
// }

// // Print property values of object
// for (attribute in shark) {
// 	console.log(shark[attribute]);
// }

// // Print names and values of object properties
// for (attribute in shark) {
// 	console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
// }


// //For..Of loop

// // Initialize array of shark species
// let sharks = [ "great white", "tiger", "hammerhead" ];

// // Print out each type of shark
// for (let shark of sharks) {
// 	console.log(shark);
// }

// // Loop through both index and element
// for (let [index, shark] of sharks.entries()) {
// 	console.log(index, shark);
// }

// // Assign string to a variable
// let sharkString = "sharks";

// // Iterate through each index in the string
// for (let shark of sharkString) {
// 	console.log(shark);
// }


//Defining a Function

// function nameOfFunction() {
// 	// Code to be executed
// }

// // Initialize greeting function
// function greet() {
// 	console.log("Hello, World!");
// }

// // Invoke the function
// greet();


// //Function Parameters

// // Initialize custom greeting function
// function greet2(name) {
// 	console.log(`Hello, ${name}!`);
// }

// // Invoke greet function with "Sammy" as the argument
// greet2("Sammy");


// //Retrurning values

// // Initialize add function
// function add(x, y) {
// 	return x + y;
// }

// // Invoke function to find the sum
// console.log(add(9, 7));


// //Function Expressions
// // Assign add function to sum constant
// const sum = function add(x, y) {
// 	return x + y;
// }

// // Invoke function to find the sum
// console.log(sum(20, 5));

// // Assign function to sum constant
// const sum2 = function(x, y) {
// 	return x + y;
// }

// // Invoke function to find the sum
// console.log(sum2(100, 3));


// //Arrow Functions

// // Define multiply function
// const multiply = (x, y) => {
// 	return x * y;
// }

// // Invoke function to find product
// console.log(multiply(30, 4));

// // Define square function
// const square = x => {
// 	return x * x;
// }

// // Invoke function to find product
// console.log(square(8));

// // Define square function
// const square2 = x => x * x;

// // Invoke function to find product
// console.log(square2(10));


//Understanding classes

//Classes Are functions

// Initializing a function with a function expression
// const x = function() {}
// // Initializing a class with a class expression
// const y = class {}

// console.log(Object.getPrototypeOf(x));

// console.log(Object.getPrototypeOf(y));


// // Initialize a constructor from a function
// const constructorFromFunction = new x();

// console.log(constructorFromFunction);

// // Initialize a constructor from a class
// const constructorFromClass = new y();

// console.log(constructorFromClass);


//Defining a class

// Initializing a constructor function
// function Hero(name, level) {
// 	this.name = name;
// 	this.level = level;
// }

// // Adding a method to the constructor
// Hero.prototype.greet = function() {
// 	return `${this.name} says hello.`;
// }

// Initializing a class definition
// class Hero {
// 	constructor(name, level) {
// 		this.name = name;
// 		this.level = level;
// 	}

// 	// Adding a method to the constructor
// 	greet() {
// 		return `${this.name} says hello.`;
//     }
// }
// const hero1 = new Hero('Varg', 1);
// console.log(hero1);


//Extending a class

// Creating a new constructor from the parent
// function Mage(name, level, spell) {
// 	// Chain constructor with call
// 	Hero.call(this, name, level);
	

// 	this.spell = spell;
// }
// const hero2 = new Mage('Lejon', 2, 'Magic Missile');

// console.log(hero2);

// Creating a new class from the parent
// class Mage extends Hero {
// 	constructor(name, level, spell) {
// 		// Chain constructor with super
// 		super(name, level);

// 		// Add a new property
// 		this.spell = spell;
// 	}
// }

// const hero2 = new Mage('Lejon', 2, 'Magic Missile');
// console.log(hero2);

// function Hero(name, level) {
// 	this.name = name;
// 	this.level = level;
// }

// // Adding a method to the constructor
// Hero.prototype.greet = function() {
// 	return `${this.name} says hello.`;
// }

// // Creating a new constructor from the parent
// function Mage(name, level, spell) {
// 	// Chain constructor with call
// 	Hero.call(this, name, level);

// 	this.spell = spell;
// }

// Initializing a class
// class Hero {
// 	constructor(name, level) {
// 		this.name = name;
// 		this.level = level;
// 	}

// 	// Adding a method to the constructor
// 	greet() {
// 		return `${this.name} says hello.`;
//     }
// }

// // Creating a new class from the parent
// class Mage extends Hero {
// 	constructor(name, level, spell) {
// 		// Chain constructor with super
// 		super(name, level);

// 		// Add a new property
// 		this.spell = spell;
// 	}
// }
// console.log(Hero);


//Use object Methods

//Object.create()
// Initialize an object with properties and methods
// const job = {
//     position: 'cashier',
//     type: 'hourly',
//     isAvailable: true,
//     showDetails() {
//         const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

//         console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
//     }
// };

// // Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();


// //Object.Keys()
// // Initialize an object
// const employees = {
// 	boss: 'Michael',
// 	secretary: 'Pam',
// 	sales: 'Jim',
// 	accountant: 'Oscar'
// };

// // Get the keys of the object
// const keys = Object.keys(employees);

// console.log(keys);

// // Iterate through the keys
// Object.keys(employees).forEach(key => {
//     let value = employees[key];

// 	 console.log(`${key}: ${value}`);
// });

// // Get the length of the keys
// const length = Object.keys(employees).length;

// console.log(length);


// //Object.values()
// // Initialize an object
// const session = {
//     id: 1,
//     time: `26-July-2018`,
//     device: 'mobile',
//     browser: 'Chrome'
// };

// // Get all values of the object
// const values = Object.values(session);

// console.log(values);

// //Object.entries()
// // Initialize an object
// const operatingSystem = {
//     name: 'Ubuntu',
//     version: 18.04,
//     license: 'Open Source'
// };

// // Get the object key/value pairs
// const entries = Object.entries(operatingSystem);

// console.log(entries);

// // Loop through the results
// entries.forEach(entry => {
//     let key = entry[0];
//     let value = entry[1];

//     console.log(`${key}: ${value}`);
// });


//Object.assign()
// Initialize an object
// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// // Initialize another object
// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the objects
// const character = Object.assign(name, details);

// console.log(character);


//Same as above
// Initialize an object
// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// // Initialize another object
// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the object with the spread operator
// const character = {...name, ...details}

// console.log(character);

//Object.freeze()
// Initialize an object
// const user = {
// 	username: 'AzureDiamond',
// 	password: 'hunter2'
// };

// // Freeze the object
// const newUser = Object.freeze(user);

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);

//Object.seal()
// Initialize an object
// const user = {
// 	username: 'AzureDiamond',
// 	password: 'hunter2'
// };

// // Seal the object
// const newUser = Object.seal(user);

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);


// //Object.getPrototypeOf()
// const employees = ['Ron', 'April', 'Andy', 'Leslie'];

// Object.getPrototypeOf(employees); 
// Object.getPrototypeOf(employees) === Array.prototype;


// Object Destructuring

// const note = {
// 	id: 1,
// 	title: 'My first note',
// 	date: '01/01/1970',
//   }

  // Create variables from the Object properties
// const id = note.id
// const title = note.title
// const date = note.date

// console.log(id)
// console.log(title)
// console.log(date)

// Assign a custom name to a destructured value
// const { id: noteId, title, date } = note

// console.log(noteId)

// const note = {
// 	id: 1,
// 	title: 'My first note',
// 	date: '01/01/1970',
// 	author: {
// 	  firstName: 'Sherlock',
// 	  lastName: 'Holmes',
// 	},
//   }

//   // Destructure nested properties
// const {
// 	id,
// 	title,
// 	date,
// 	author: { firstName, lastName },
//   } = note

//   console.log(`${firstName} ${lastName}`)


//   // Access object and nested values
// const {
// 	author,
// 	author: { firstName, lastName },
//   } = note
  
//   console.log(author)

//   const { length } = 'A string'

//   console.log(length)



  //Array Destructing
//   const date = ['1970', '12', '01']

//   // Create variables from the Array items
// const year = date[0]
// const month = date[1]
// const day = date[2]

// // Destructure Array values into variables
// // const [year, month, day] = date

// console.log(year)
// console.log(month)
// console.log(day)

// // Skip the second item in the array
// console.log(year)
// console.log(day)

// // Create a nested array
// const nestedArray = [1, 2, [3, 4], 5]

// // Destructure nested items
// const [one, two, [three, four], five] = nestedArray

// console.log(one, two, three, four, five)

// const note = {
// 	id: 1,
// 	title: 'My first note',
// 	date: '01/01/1970',
//   }

//   // Using forEach
// Object.entries(note).forEach(([key, value]) => {
// 	console.log(`${key}: ${value}`)
//   })

//   // Using a for loop
// for (let [key, value] of Object.entries(note)) {
// 	console.log(`${key}: ${value}`)
//   }


//   const note = {
// 	title: 'My first note',
// 	author: {
// 	  firstName: 'Sherlock',
// 	  lastName: 'Holmes',
// 	},
// 	tags: ['personal', 'writing', 'investigations'],
//   }

//   const {
// 	title,
// 	date = new Date(),
// 	author: { firstName },
// 	tags: [personalTag, writingTag],
//   } = note
  
//   console.log(date)


//Spread
//Spread with Arrays
// Create an Array
// const tools = ['hammer', 'screwdriver']
// const otherTools = ['wrench', 'saw']

// Concatenate tools and otherTools together
// const allTools = tools.concat(otherTools)

// Unpack the tools Array into the allTools Array
// const allTools = [...tools, ...otherTools]

// console.log(allTools)

// // Array of users
// const users = [
// 	{ id: 1, name: 'Ben' },
// 	{ id: 2, name: 'Leslie' },
//   ]


//   // A new user to be added
// const newUser = { id: 3, name: 'Ron' }

// users.push(newUser)

// const updatedUsers = [...users, newUser]

// console.log(users)
// console.log(updatedUsers)

// // Create an Array
// const originalArray = ['one', 'two', 'three']

// // Assign Array to another variable
// const secondArray = originalArray

// // Remove the last item of the second Array
// secondArray.pop()

// console.log(originalArray)

// Create an Array
// const originalArray = ['one', 'two', 'three']

// // Use spread to make a shallow copy
// const secondArray = [...originalArray]

// // Remove the last item of the second Array
// secondArray.pop()

// console.log(originalArray)

// Create a set
// const set = new Set()

// set.add('octopus')
// set.add('starfish')
// set.add('whale')

// // Convert Set to Array
// const seaCreatures = [...set]

// console.log(seaCreatures)

// const string = 'hello'

// const stringArray = [...string]

// console.log(stringArray)

// // Create an Object and a copied Object with Object.assign()
// const originalObject = { enabled: true, darkMode: false }
// const secondObject = Object.assign({}, originalObject)

// Create an object and a copied object with spread
// const originalObject = { enabled: true, darkMode: false }
// const secondObject = { ...originalObject }

// console.log(secondObject)

// const user = {
// 	id: 3,
// 	name: 'Ron',
//   }
  
//   const updatedUser = { ...user, isLoggedIn: true }
  
//   console.log(updatedUser)

//   const user = {
// 	id: 3,
// 	name: 'Ron',
// 	organization: {
// 	  name: 'Parks & Recreation',
// 	  city: 'Pawnee',
// 	},
//   }

//   const updatedUser = { ...user, organization: { position: 'Director' } }

// console.log(updatedUser)

// user.organization.position = 'Director'

// const updatedUser = {
// 	...user,
// 	organization: {
// 	  ...user.organization,
// 	  position: 'Director',
// 	},
//   }
  
//   console.log(updatedUser)

//Spread with Function Calls
// Create a function to multiply three items
// function multiply(a, b, c) {
// 	return a * b * c
//   }

//   multiply(1, 2, 3)

//   const numbers = [1, 2, 3]

// multiply(...numbers)

// multiply.apply(null, [1, 2, 3])


//Rest Parameters

// function restTest(...args) {
// 	console.log(args)
//   }
  
//   restTest(1, 2, 3, 4, 5, 6)

//   function restTest(one, two, ...args) {
// 	console.log(one)
// 	console.log(two)
// 	console.log(args)
//   }
  
//   restTest(1, 2, 3, 4, 5, 6)

//   function testArguments() {
// 	console.log(arguments)
//   }
  
//   testArguments('how', 'many', 'arguments')

//   const testArguments = () => {
// 	console.log(arguments)
//   }
  
//   testArguments('how', 'many', 'arguments')

//   const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

// console.log(firstTool)
// console.log(rest)

// const { isLoggedIn, ...rest } = { id: 1, name: 'Ben', isLoggedIn: true }

// console.log(isLoggedIn)
// console.log(rest)


//Arrow Functions
// function sum(a, b) {
// 	return a + b
//   }

//   sum(1, 2)

// function sum(a, b) {
//   return a + b
// }
// console.log(sum)

// const sum = function (a, b) {
// 	return a + b
//   }

//   sum(1, 2)

// const sum = function (a, b) {
//   return a + b
// }
// const sum = function (a, b) {
// 	return a + b
//   }
  
//   console.log(sum)

// const sum = function namedSumFunction(a, b) {
// 	if (!a || !b) throw new Error('Parameters are required.')
  
// 	return a + b
//   }
  
//   sum();

//   const sum = (a, b) => {
// 	return a + b
//   }


  //Arrow Function Behavior and Syntax
//Lexical this

// const printNumbers = {
// 	phrase: 'The current value is:',
// 	numbers: [1, 2, 3, 4],
  
// 	loop() {
// 	  this.numbers.forEach(function (number) {
// 		console.log(this.phrase, number)
// 	  })
// 	},
//   }

//   printNumbers.loop()

//   const printNumbers = {
// 	phrase: 'The current value is:',
// 	numbers: [1, 2, 3, 4],
  
// 	loop() {
// 	  // Bind the `this` from printNumbers to the inner forEach function
// 	  this.numbers.forEach(
// 		function (number) {
// 		  console.log(this.phrase, number)
// 		}.bind(this),
// 	  )
// 	},
//   }
  
//   printNumbers.loop()

// const printNumbers = {
// 	phrase: 'The current value is:',
// 	numbers: [1, 2, 3, 4],
  
// 	loop() {
// 	  this.numbers.forEach((number) => {
// 		console.log(this.phrase, number)
// 	  })
// 	},
//   }
  
//   printNumbers.loop()

  //Arrow Functions as Object Methods

//   const printNumbers = {
// 	phrase: 'The current value is:',
// 	numbers: [1, 2, 3, 4],
  
// 	loop: () => {
// 	  this.numbers.forEach((number) => {
// 		console.log(this.phrase, number)
// 	  })
// 	},
//   }
//   printNumbers.loop()

  //Arrow Functions Have No constructor or prototype

//   function myFunction() {
// 	this.value = 5
//   }
  
//   // Log the prototype property of myFunction
//   console.log(myFunction.prototype)

//   const instance = new myFunction()

// console.log(instance.value)

// const myArrowFunction = () => {}

// // Attempt to log the prototype property of myArrowFunction
// console.log(myArrowFunction.prototype)

// const arrowInstance = new myArrowFunction()

// console.log(arrowInstance)



//Implicit Return
// const sum = (a, b) => {
// 	return a + b
//   }
//   const sum = (a, b) => a + b

//   const sum = (a, b) => ({result: a + b})

// sum(1, 2)


//Omitting Parentheses Around a Single Parameter
// const square = (x) => x * x
// const square = x => x * x

// square(10)

// const greet = () => 'Hello!'

// greet()


//The Event Loop

// Define three example functions
// function first() {
// 	console.log(1)
//   }
  
//   function second() {
// 	console.log(2)
//   }
  
//   function third() {
// 	console.log(3)
//   }

//   // Execute the functions
// first()
// second()
// third()

// Define three example functions, but one of them contains asynchronous code
// function first() {
// 	console.log(1)
//   }
  
//   function second() {
// 	setTimeout(() => {
// 	  console.log(2)
// 	}, 0)
//   }
  
//   function third() {
// 	console.log(3)
//   }

//   // Execute the functions
// first()
// second()
// third()


//Stack
//Queue
//Callback Functions

// A function
// function fn() {
// 	console.log('Just a function')
//   }
  
//   // A function that takes another function as an argument
//   function higherOrderFunction(callback) {
// 	// When you call a function that is passed as an argument, it is referred to as a callback
// 	callback()
//   }
  
//   // Passing a function
//   higherOrderFunction(fn)

// Define three functions
// function first() {
// 	console.log(1)
//   }
  
//   function second(callback) {
// 	setTimeout(() => {
// 	  console.log(2)
  
// 	  // Execute the callback function
// 	  callback()
// 	}, 0)
//   }
  
//   function third() {
// 	console.log(3)
//   }

//   first()
// second(third)


//Nested Callbacks and the Pyramid of Doom

// function pyramidOfDoom() {
// 	setTimeout(() => {
// 	  console.log(1)
// 	  setTimeout(() => {
// 		console.log(2)
// 		setTimeout(() => {
// 		  console.log(3)
// 		}, 500)
// 	  }, 2000)
// 	}, 1000)
//   }

  // Example asynchronous function
// function asynchronousRequest(args, callback) {
// 	// Throw an error if no arguments are passed
// 	if (!args) {
// 	  return callback(new Error('Whoa! Something went wrong.'))
// 	} else {
// 	  return setTimeout(
// 		// Just adding in a random number so it seems like the contrived asynchronous function
// 		// returned different data
// 		() => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
// 		500,
// 	  )
// 	}
//   }
  
//   // Nested asynchronous requests
//   function callbackHell() {
// 	asynchronousRequest('First', function first(error, response) {
// 	  if (error) {
// 		console.log(error)
// 		return
// 	  }
// 	  console.log(response.body)
// 	  asynchronousRequest('Second', function second(error, response) {
// 		if (error) {
// 		  console.log(error)
// 		  return
// 		}
// 		console.log(response.body)
// 		asynchronousRequest(null, function third(error, response) {
// 		  if (error) {
// 			console.log(error)
// 			return
// 		  }
// 		  console.log(response.body)
// 		})
// 	  })
// 	})
//   }
  
//   // Execute 
//   callbackHell()

//Promises
//Creating a promise
// Initialize a promise
// const promise = new Promise((resolve, reject) => {})

//Consuming a promise
const promise = new Promise((resolve, reject) => {
	resolve('We did it!')
  })

  promise.then((response) => {
	console.log(response)
  })// Chain a promise
  promise
	.then((firstResponse) => {
	  // Return a new value for the next then
	  return firstResponse + ' And chaining!'
	})
	.then((secondResponse) => {
	  console.log(secondResponse)
	})

	function getUsers(onSuccess) {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			// Handle resolve and reject in the asynchronous API
		  }, 1000)
		})
	  }

	  function getUsers(onSuccess) {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			// Handle resolve and reject in the asynchronous API
			if (onSuccess) {
			  resolve([
				{id: 1, name: 'Jerry'},
				{id: 2, name: 'Elaine'},
				{id: 3, name: 'George'},
			  ])
			} else {
			  reject('Failed to fetch data!')
			}
		  }, 1000)
		})
	  }

	  // Run the getUsers function with the false flag to trigger an error
getUsers(false)
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})

// Run the getUsers function with the true flag to resolve successfully
getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })



