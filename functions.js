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

/*Basicamente são 3 coisas principais que precisamos entender nas funções:
 Parâmetros, Argumentos (Exemplo: const copo = fazerSuco('banana', 'maçã') >> banana e maçã são dois argumentos dessa função
 ) - e Retorno (return)

 */

//*Entendendo Funcion Scope - Escopo da Função
//  let subject = 'create site'

//  function createThink() {
//     subject = 'study'
//     return subject
//  }

//  console.log(createThink(subject))
//  console.log(subject)

//*Revisando Objetos 
// console.log({
//     name: 'Solon',
//     idade: 24,
//     andar: function() {
//         console.log('andar')
//     }
// })

//*Arrow Funciction
//Uma maneira mais moderna de trabalhar com funções...
//geralmente vamos atribuir ela a uma constante.
const sayMyName = () => {
    console.log('Solon')
}

sayMyName()