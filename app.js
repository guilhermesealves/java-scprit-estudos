console.log('Olá Mundo');

 /* Variáveis */
 /* espaço  reservado na memória para armazenar um valor */
 
 let nome = 'Gui'
 let idade = 18
 let nota1 = 7.5
 let fumante = false

 console.log(nome, idade, nota1, fumante)
 console.log( 'Sua nota é ' + nota1);
 
 let veiculos = ['carro', 'moto', 'aviao']
 console.log(veiculos)
 console.log( typeof veiculos)

 let cliente = {
    nome: 'Guto' , 
    idade: 36
 }
 console.log(cliente)
 console.log(typeof cliente)

 let salvr = function(){

 }
 console.log(typeof salvar)

 /* operações relacionais */

 console.log( 10>3)
 console.log( 5<3)
 console.log( 15 <= 10)
 console.log( 15 >= 10)
 console.log( 10 == 10)
 console.log( 10 != 10)

/* operações lógicas */

console.log( 15>7 && 10<15)
// usado para se todas as operações forem verdadeiras


console.log(10>3 || 10>15 || 10>8)
// usado se uma ou mais operações forem verdadeiras

console.log(!10>3)
// ele inverte se for false ele inverte para true