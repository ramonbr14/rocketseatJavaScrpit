//function Constructor

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " esta andando"
    }
}

const elsa = new Person("Elsa")
const anna = new Person("Anna")

console.log(elsa.walk());
console.log(anna.walk());

//function scope

let subject =  'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject);
console.log(createThink(subject ));
console.log(subject);


//function expression ou anonymous
/*const sum = function(number1,number2){
    console.log(number1 + number2);
}
const sum = function(number1,number2){
    total = number1 + number2;
    return total;
}
let claudio = 10
let antonio = 20
sum(2,3)
sum(antonio,claudio)

console.log(`O numero 1 é ${claudio}`);
console.log(`O numero 2 é ${antonio}`);
console.log(`A Soma de todos os medos é ${sum(claudio,antonio)}`);
*/
