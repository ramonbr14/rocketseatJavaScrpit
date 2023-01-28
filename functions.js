let phrases = "Vem mostrar essa é sua força"
let distritos = ["palacio", "Plator norte", "plator leste", "Fiorde"]
let myArray1 = new Array('a','b','c')
let myArray2 = new Array(10)
/*
console.log(myArray1);
console.log(myArray2);
console.log(["a",{type: "array"},function(){return "alo"}]);
console.log(Array.from(phrases))
*/
distritos.push("nodejs")
distritos.unshift("java")
//distritos.pop()
//distritos.shift();  
//console.log(distritos.slice(1,3))
//console.log(distritos.splice(1,2))
let index = distritos.indexOf('nodejs')
console.log(index)



/*

let myArray = phrases.split(" ")
console.log(myArray);
let phrasesWithundercore = myArray.join("_")
console.log(phrasesWithundercore.toLowerCase());

console.log(phrases.includes("força"))


/*
let word = "Bem Vindo ao Reino de Arendelle"
console.log(word.toUpperCase())
console.log(word.toLowerCase());
/*
let number = 321651651.316416163
console.log(number.toFixed(2).replace(".",","));

/*
let word = "ReinodeArendelle"
console.log(word.length)
let number = 1234
console.log(String(number).length);



let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number));

console.log('9' + 5)// Type Coersion
console.log(Number('9') + 5)// type conversion
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
const sum = function(number1,number2){
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
