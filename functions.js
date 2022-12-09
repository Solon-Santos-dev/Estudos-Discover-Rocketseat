// function createNumbers() {
//     console.log("1")
//     console.log("2")
//     console.log("3")
// }

// createNumbers()

//function expression
//function anonymous

//parameters - parâmetros

// const sum = function(number1, number2)  { //aqui nós temos dois parâmetros dentro da função
    // let total = number1 + number2 
    // return total //retorno dessa função (resultado)
// }

// let number1 = 30
// let number2 = 20

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
// console.log(`a soma dos dois é ${(number1 + number2)}`)
//*Lembrando que é mais usual utilizara `` crase dupla, para evitar qualquer confusão caso usasse: ''simples ou ""dupla.

/*Basicamente são 3 coisas principais que precisamos entender nas funções:
 Parâmetros, Argumentos (Exemplo: const copo = fazerSuco('banana', 'maçã') >> banana e maçã são dois argumentos dessa função
 ) - e Retorno (return)

 */

//*Entendendo Funcion Scope - Escopo da Função
//  let subject = 'create site' //sempre utilizar o *let para definir as variáveis que irão armazenar os valores.

//  function createThink(subject) {
//     subject = 'study' 
//     return subject
// }

//  console.log(createThink(subject))
//  console.log(subject)

//*Revisando Objetos 
// console.log({
//     name: "Solon",
//     idade: 24,
//     andar: function() {
//         console.log('andar')
//     }
// })

//*Arrow Function
//Uma maneira mais moderna de trabalhar com funções...
//geralmente vamos atribuir ela a uma constante.

// const sayMyName = () => {
//     console.log('Solon')
// }

// sayMyName()

/*
*Function() contructor - Função Construtora

*expressão new
*criar um novo objeto
*this keyword

example:
*/
// function Person(name) {
//     this.name = name
//     this.walk = function(){
//         return this.name + " está andando "
//     }

// }
// const biel = new Person("Biel") //Boa prática: Primeira depois do new Maiúscula, por que temos String, Date, etc...
// const solon = new Person("Solon")
// console.log(biel.walk())
// console.log(solon.walk())

/*Dando continuidade aos estudos.

Prototype:

* prototype-based language
* prototype chain
* __proto__

Ex: ["Solon", "Lucas"].length
//*Essa seria uma maneira de acessar a quantidade de objetos dentro desse Array, por meio do ".__proto__"

Type conversion (typecasting) vs Type coersion

* Alteração de um tipo de dado para outro tipo.

Ex:

console.log("9" + 5) - com o Type coersion o JavaScript mudaria automaticamente o "9" string para um Number, onde a saída seria: 95.

Porém, quando fazemos essa conversão manual, ex: console.log(Number('9') + 5) - Usamos o Type conversion.

//*Nesse caso o resultado no console seria a soma = 14.

//*Transformando Número em String e vice-versa:

let number = 123
(String(number))

//*Exemplo de manipulação de dados com JS:

*/
/* 
let phrase = "Eu que viver o Amor"
console.log(phrase.includes("amor"))

Isso basicamente verifica se: 
Dentro do meu texte há a palavra "amor"?
retornando um valor boolean = true or false.
*/
