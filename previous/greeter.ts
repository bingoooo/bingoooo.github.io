class Student {
	fullName: string;
	constructor(public firstName, public middleInitial, public lastName){
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

class Avatar {
	competences: Array<string>;
	pouvoirs: Array<string>;
	constructor(public force, public volonte, public perception, public agilite, public precicion, public apparence){
		this.competences = ['saut', 'course', 'natation'];
		this.pouvoirs = ['lumière', 'téléportation'];
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

interface Character {
	force: number;
	volonte: number;
	precision: number;
	agilite: number;
	perception: number;
	apparence: number;
	competences: Array<Array<string>>;
	pouvoirs: Array<Array<string>>;
}

function greeter(person: Person){
	let output: string = `Hello, ${ person.firstName } ${ person.lastName }`;
	return output;
}

function show(character: Avatar){
	let output: string = `<h3>Charactéristiques</h3>
							<p>For : ${character.force}</p>
							<p>Vol : ${character.volonte}</p>
							<p>Pre : ${character.precicion}</p>
							<p>Agi : ${character.agilite}</p>
							<p>Per : ${character.perception}</p>
							<p>App : ${character.apparence}</p>
							<p>Compétences</p>
							<p>${character.competences}</p>
							<p>Pouvoirs</p>
							<p>${character.pouvoirs}</p>
							`;
	return output;
}

let user = new Student("Dant", "M.", "Benjamin");
let avatar = new Avatar(1, 1, 1, 1, 1, 1);

function helloU(name: string): number{
	let myName: string = name;
	return (myName as string).length;
}

console.log(helloU("Benji"));

document.getElementById('character').innerHTML = show(avatar);