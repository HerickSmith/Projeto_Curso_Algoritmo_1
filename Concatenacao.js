/* Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreval("digite o nome")
   leia (nome)
   
   escreval("digite o numero")
   leia (numero)
   
   escreval(nome, ": ", numero) 10 
   */

   var nome, numero

   nome = prompt("Digite o seu nome: ")
   numero = prompt("Digite o seu numero: ")

   document.getElementById("paragrafo").innerText = nome + ": " + numero