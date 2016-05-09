var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Avatar = (function () {
    function Avatar(force, volonte, perception, agilite, precicion, apparence) {
        this.force = force;
        this.volonte = volonte;
        this.perception = perception;
        this.agilite = agilite;
        this.precicion = precicion;
        this.apparence = apparence;
        this.competences = ['saut', 'course', 'natation'];
        this.pouvoirs = ['lumière', 'téléportation'];
    }
    return Avatar;
}());
function greeter(person) {
    var output = "Hello, " + person.firstName + " " + person.lastName;
    return output;
}
function show(character) {
    var output = "<h3>Charact\u00E9ristiques</h3>\n\t\t\t\t\t\t\t<p>For : " + character.force + "</p>\n\t\t\t\t\t\t\t<p>Vol : " + character.volonte + "</p>\n\t\t\t\t\t\t\t<p>Pre : " + character.precicion + "</p>\n\t\t\t\t\t\t\t<p>Agi : " + character.agilite + "</p>\n\t\t\t\t\t\t\t<p>Per : " + character.perception + "</p>\n\t\t\t\t\t\t\t<p>App : " + character.apparence + "</p>\n\t\t\t\t\t\t\t<p>Comp\u00E9tences</p>\n\t\t\t\t\t\t\t<p>" + character.competences + "</p>\n\t\t\t\t\t\t\t<p>Pouvoirs</p>\n\t\t\t\t\t\t\t<p>" + character.pouvoirs + "</p>\n\t\t\t\t\t\t\t";
    return output;
}
var user = new Student("Dant", "M.", "Benjamin");
var avatar = new Avatar(1, 1, 1, 1, 1, 1);
function helloU(name) {
    var myName = name;
    return myName.length;
}
console.log(helloU("Benji"));
document.getElementById('character').innerHTML = show(avatar);
