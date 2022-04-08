function echo(objeto: any) {
    return objeto
}

console.log(echo('João'))
console.log(echo(27))
console.log(echo({ nome: 'João', idade: 27 }))

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('João'))
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }))

//Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['1', '2', '3'])
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 }
])
type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 }
])

//Tipo genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Hello!'))

//Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public op1: T, public op2: T) { }

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())
// console.log(new OperacaoBinaria({}, {}).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.op1 + this.op2
    }
}

console.log(new SomaBinaria(3, 4))

// class DiferencaEntreDatas
//     extends OperacaoBinaria<Data, string> {
//     executar(): string {
//         const t1 = this.getTime(this.op1)
//         const t2 = this.getTime(this.op2)
//         const dif = Math.abs(t1 - t2)
//         const dia = 1000 * 60 * 60 * 24
//         return `${Math.ceil(dif / dia)} dia(s)`
//     }

//     getTime(data: Data): number {
//         let { dia, mes, ano } = data
//         return new Date(`${mes}/${dia}/${ano}`).getTime()
//     }
// }

// console.log(
//     new DiferencaEntreDatas(
//         new Data(1, 2, 2022), new Data(4, 3, 2022)))

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, próximo, imprimir

class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(valor: T): void {
        this.fila.push(valor)
    }

    proximo(): T | null {
        if (this.fila.length > 0) {
            return this.fila.splice(0, 1)[0]
        } else {
            return null
        }
    }

    imprimir(): void {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro')
fila.imprimir()
fila.entrar('Ana')
fila.imprimir()
console.log(fila.proximo())
fila.imprimir()

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(chave), colocar({c, v})
// limpar(), imprimir()

class ItemMapa<TChave, TValor> {
    constructor(
        public chave: TChave,
        public valor: TValor
    ) { }
}

//type Par<C, V> = { chave: C, valor: V }

class Mapa<TChave, TValor> {
    private mapa: ItemMapa<TChave, TValor>[]

    constructor(
        ...elementos: ItemMapa<TChave, TValor>[]) {
        this.mapa = elementos
    }

    colocar(item: ItemMapa<TChave, TValor>): void {
        const elemento = this.obter(item.chave)
        if (elemento) {
            elemento.valor = item.valor
        } else {
            this.mapa.push(item)
        }
    }

    obter(chave: TChave): ItemMapa<TChave, TValor> | null {
        const elemento = this.mapa.find(i => i.chave == chave)
        return elemento || null
    }

    limpar(): void {
        this.mapa = []
    }

    imprimir(): void {
        console.log(`${this.mapa.map(i => `{ chave: ${i.chave}, valor: ${i.valor} }`)}`)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()