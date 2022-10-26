/* Var
// Seção de Declarações das variáveis
   nota01, nota02, media: real
   nome: caractere
   passou: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
   escreval ("Escreva o nome do aluno: ")
   leia (nome)
   escreval ("Digite a nota 01 do aluno: ")
   leia (nota01)
   escreval ("Digite a nota 02 do aluno: ")
   leia (nota02)

   media := (nota01 + nota02) / 2

   se media >= 50 entao
      passou := verdadeiro
         fimse
         
   se (passou) entao && (media >= 50 || media <= 70) entao
           escreval ("O aluno: ", nome, ", está aprovado!")
   senao
        escreval ("O aluno: ", nome, ", está reprovado!")
   fimse
Fimalgoritmo */

var nota01, nota02, media, nome, passou;

passou = false;

nome = prompt("Escreva o nome do aluno: ")
   nota01 = prompt("Digite a nota 01 do aluno: ")
   nota02 = prompt("Digite a nota 02 do aluno: ")

   media = (parseInt(nota01) + parseInt(nota02)) / 2
   
   if ( media >= 50)
   passou = true;

   if (passou && (media >= 70 && media <= 90))
    alert ("O aluno: " + nome + ", esta aprovado!")
   else
    alert ("O aluno: " + nome + ", esta reprovado!")
   