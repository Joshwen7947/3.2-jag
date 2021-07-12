const programmers = [
	'Dennis Ritchie',
	'Brian Kernighan',
	'Ken Thompson',
	'Linus Torvalds',
	'Bjarne Stroustrup',
	'Tim Berners-Lee',
	'Donald Knuth',
	'Alan Turing',
	'Mark Zuckerberg',
	'Bill Gates',
	'Larry Page',
	'Elon Musk',
	'Jack Dorsey',
	'Satoshi Nakamoto',
	'Ada Lovelace',
	'Grace Hopper',
	'Dan Ambramov',
	'Jordan Walke',
	'Ryan Dahl',
	'David Heinemeier Hansson',
	'Guido van Rossum',
	'Yukihiro Matsumoto',
	'Sergey Brin',
	'Lyndsey Scott',
	'Abhinav Asthana',
	'Abhijit Kane',
	'Ankit Sobti',
	'Loi Tran',
	'Charles Lee',
	'Tuan Nguyen',
	'Tan Vo',
];
// for (let i = 0; i < programmers.length; i++) {
// 	const programmer = programmers[i];
// 	console.log(programmer);
// }

function threePointOne() {
	function firstName(e) {
		console.log(`firstName`, e);
		return e.split(` `)[0];
	}
	const newProgrammers = programmers.map(firstName);

	document.getElementById(`3.1`).innerHTML = newProgrammers.join(` `);
}
threePointOne();
