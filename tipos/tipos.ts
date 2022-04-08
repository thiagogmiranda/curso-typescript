// string
let nome: string = 'Thiago'
//nome = 28
console.log(nome)

// numbers
let idade: number = 28
//idade = 'Thainá'
idade = 28.5

console.log(idade)

// booleanos
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number //any
minhaIdade = 28
console.log(typeof minhaIdade)
//minhaIdade = 'idade é 28'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 'Musculação']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
//hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number] = ['Av Pricipal', 99]
console.log(endereco)

endereco = ['Outra rua', 98]
console.log(endereco)

// enums
enum Cor {
    Cinza, //0
    Verde = 100, //1
    Azul = 2, //2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    //return minhaCor
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(2, 3))

const teste = function (a: number, b: number): boolean {
    return false
}

// tipo função
let calculo: (a: number, b: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 3))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)
//usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 30
// }

usuario = {
    idade: 30,
    nome: 'Maria'
}
console.log(usuario)

//Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<=8)
            -> Fora do horário (>8)
*/
// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Thiago', 'Caio', 'Enzo'],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Thiago', 'Caio', 'Enzo'],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

// Union Types
let nota:  number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor = 30

if (typeof valor === 'number') {
    console.log('É um number')
} else {
    console.log(typeof valor)
}

// never
function falha(msg: string): never {
    // while (true) {
        
    // }
    throw new Error(msg)
}

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '9999999',
    tel2: null
}

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)