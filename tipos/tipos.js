"use strict";
// string
let nome = 'Thiago';
//nome = 28
console.log(nome);
// numbers
let idade = 28;
//idade = 'Thainá'
idade = 28.5;
console.log(idade);
// booleanos
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade; //any
minhaIdade = 28;
console.log(typeof minhaIdade);
//minhaIdade = 'idade é 28'
console.log(typeof minhaIdade);
// array
let hobbies = ['Cozinhar', 'Musculação'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies);
// tuplas
let endereco = ['Av Pricipal', 99];
console.log(endereco);
endereco = ['Outra rua', 98];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //return minhaCor
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
const teste = function (a, b) {
    return false;
};
// tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 3));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
//usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 30
// }
usuario = {
    idade: 30,
    nome: 'Maria'
};
console.log(usuario);
let funcionario = {
    supervisores: ['Thiago', 'Caio', 'Enzo'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
let funcionario2 = {
    supervisores: ['Thiago', 'Caio', 'Enzo'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um number');
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    // while (true) {
    // }
    throw new Error(msg);
}
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '9999999',
    tel2: null
};
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
