// let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco'
    console.log(acao)
}

const cpf: string = '123.456.789-00'
//cpf = '789.101.132-78'
console.log(cpf)

var segredo = 'externo!'
function revelar() {
    var segredo = 'interno!'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    const def = 'def'
    console.log(def)
}

for (let i = 0; i < 10; i++) { // var
    console.log(i)
}
// console.log(i)

// Arrow Function
const somar = function (n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) =>
    console.log('Olá ' + pessoa)
falarCom('João')

// this

function normalComThis() {
    //console.log(this)
}

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
normalComThisEspecial()

// this??? não muda na arrow function
console.log(this)
//const arrowComThis = () => console.log(this)
//arrowComThis()

// Parâmetros padrão
function contagemRegressiva(inicio: number = 3,
    fim: number = inicio - 5): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim')
}

contagemRegressiva()
contagemRegressiva(3)

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] =
    ['Fernando', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

function retornarArray(...args: number[]): number[] {
    return args
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 345, 623)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]): void {
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

const [w, z] = [2, 3]

// Destructuring (objeto)
const item = {
    nome: 'SSD',
    preco: 200
}

const { nome: n, preco: p } = item
console.log(n)
console.log(p)

// Template string
const usuarioID: string = 'SuportCod3r'
const notificacoes: string = '9'
// const boasVindas = 'Boas vindas ' + usuarioID 
//     + 'Notificações: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID}
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`

console.log(boasVindas)

// Desafio

// Traduzir para TypeScript
// var dobro = function(valor) {
//     return valor * 2
//     }
//     console.log(dobro(10))

const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// Verifique se há espaço para melhorias nesse trecho de código!
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
//     }
//     dizerOla()
//     dizerOla("Anna")
const dizerOla =
    (nome: string = 'Pessoa') => console.log(`Ola, ${nome}`)

dizerOla()
dizerOla("Anna")

//Dado esse array, imprima o menor valor!
// var nums = [-3, 33, 38, 5]
// console.log('???')

const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

//Adicione os elementos de nums em array !
// var nums = [-3, 33, 38, 5]
// var array = [55, 20]
// console.log(array)

const array: number[] = [55, 20, ...nums]
console.log(array)

//Simplifique os trechos de código abaixo utilizando o operador
//Destructuring!

// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
// console.log(nota1, nota2, nota3)

const notas: number[] = [8.5, 6.3, 9.4]
const [n1, n2, n3] = notas
console.log(n1, n2, n3)

// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)

const cientista = {
    primeiroNome: 'Will',
    experiencia: 12
}
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)