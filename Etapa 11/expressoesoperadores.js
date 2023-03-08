console.log("OLHA EU AQUI");

let person = {
    nome: 'Elsa',
    age: 27,
    weight: 89
}

    for(let property in person){
        console.log(property);
        console.log(person[property]);
    }



/*
let nome = 'Rainha Elsa de Arendelle'
let nomes = ['Rainha Elsa de Arendelle','Rainha Anna de Arendelle',
    'Rainha Merida de brokenroll']

for(let char of nome){
    console.log(char);
}


/*
let a  = 789;
while(a>10){
    console.log("O Valor de a = " + a)
    a /= 2 
}

let i  = 0;
while(i<10){
    console.log("O Valor de i = " + i)
    i++;
}
/*
//for - Estrutura de Repetição
//break -  para a execução do loop
//continue - pula a execeução do momento

for(i = 0; i<10; i++ ){
    if(i===5){
        continue;
    }
    console.log('O valor de i é ' + i)
}

/*
//throw

function sayMyName(name = '') {
    if (name === ''){
        throw 'Nome Obrigatorio em Arendelle'
    }

    console.log('depois do erro')
    
}
try {
    sayMyName()
} catch (e) {
    console.log(e)
}
console.log("apos a função de erro");


/*
function calculate(number1, operador, number2) {
    let result

    switch (operador) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;

        default:
            console.log('Não implementado');
            break;
    }

    return result
}
console.log(calculate(1, "+", 2))
console.log(calculate(10, "-", 5))
console.log(calculate(20, "*", 9))
console.log(calculate(50, "/", 5))
console.log(calculate(1000, "$", 2))

/*
let temperatura = 90;
let highTemperature = temperatura >=37.5
let mediumTemperature = temperatura <37.5 && temperatura >=37

if(highTemperature){
    console.log('Febre Alta Congelante')
} else if(mediumTemperature){
    console.log('Febre Moderada Congelante')
} else {
    console.log('Pode cantar letigou')
}

/*let nome = new String("Rainha Elsa");
nome.surName = "de Arendelle"
let age = new Number(17)
let date = new Date('1988-05-15')
console.log(nome.surName,age);
console.log(date)

const canDrive = age >= 18 ? 'can drive':"can't drive"
console.log(canDrive)

console.log(true ? 'verdadeiro': 'falso' );
*/