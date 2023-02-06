//Converter Cesius em Fahrenheit
//realizado com ajuda do @theProgAmador
let covCel = '35.5 ºC';
let conFar = '35.5 F';
let t;

function ConverteTemperatura(texto) {
    let celsius = texto.toLowerCase().indexOf('c') != -1
    let farenht = texto.toLowerCase().indexOf('f') != -1
    t = texto.split(' ')[0]
    
    if(celsius){
        return (t*9/5 +32).toFixed(3)

    } else if(farenht){
        return ((t - 32)*5/9).toFixed(3)
    } else{
        console.log("Entrada invalida");
    }
}
console.log(ConverteTemperatura('35.5 ºC'));
console.log(ConverteTemperatura('45.5 f'));
console.log(ConverteTemperatura('0 C'));
console.log(ConverteTemperatura('35.5 x'));
console.log(ConverteTemperatura('0 F'));

/*
//Sistema de gastos familiares

let familia = {
    incomes: [150, 645, 581.45, 45, 632 ,14.02],
    expenses: [100, 906, 490, 38, 272, 206]
}

function sum(array) {
    let total = 0;
    
    for (let value of array){
        total +=value
    }

    return total; 
}


function calculateBalance() {
    const caculateIncomes = sum(familia.incomes);
    const caculateExpenses = sum(familia.expenses);
    const total = caculateIncomes - caculateExpenses

    const its0k = total >= 0
    console.log(
    let balanceText = "negativo, Hora de apertar o cinto"
    if(its0k){
        balanceText = "Positivo, Comprar cuecas novas pro Allan"
    }
    console.log(`Seu Saldo é ${balanceText}: ${total.toFixed(4 )}`);
}

calculateBalance();
console.log("OLHA EU AQUI")
/*
//Transformar notas escolares
let notaentrada = 1;

//resolução do discovery
function notaconverter(notaentrada){
    let scoreA = notaentrada >= 90 && notaentrada <= 100;
    let scoreB = notaentrada >= 80 && notaentrada <= 89;
    let scoreC = notaentrada >= 70 && notaentrada <= 79;
    let scoreD = notaentrada >= 60 && notaentrada <= 69;
    let scoreE = notaentrada >= 50 && notaentrada <= 59;
    let scoreF = notaentrada < 40 && notaentrada >= 49;

    let notaletra;

    if(scoreA){
        notaletra = "A";
    } else if(scoreB){
        notaletra = "B";
    } else if(scoreC){
        notaletra = "C";
    } else if(scoreD){
        notaletra = "D";
    } else if(scoreE){
        notaletra = "E";
    } else if(scoreF){
        notaletra = "F";
    } else{
        notaletra = "Nota Inválida"
    }

    console.log(notaletra);
}
notaconverter(100);
notaconverter(0.01);
notaconverter(-4);
notaconverter(80);
notaconverter(147);
notaconverter(70);
notaconverter(60);
notaconverter(50);


/* MINHA SOLUÇÃO
function notaconverter(notaentrada) {
    if(notaentrada>=90){
        notaletra = "A";
    } else if(notaentrada>=80){
        notaletra = "B";
    } else if(notaentrada>=70){
        notaletra = "C";
    } else if(notaentrada>=60){
        notaletra = "D";
    } else if(notaentrada>=50){
        notaletra = "E";
    } else {
        notaletra = "F";
    }

    console.log("A NOTA DO ALUNO É "+ notaletra);

}*/