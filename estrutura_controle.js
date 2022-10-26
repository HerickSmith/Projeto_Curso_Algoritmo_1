/*escreval ("Escreva o nome do aluno: ")
   leia (nome)
   escreval ("Digite a nota 01 do aluno: ")
   leia (nota01)
   escreval ("Digite a nota 02 do aluno: ")
   leia (nota02)
   
   media := (nota01 + nota02) / 2
   
   se media >= 50 entao
   escreval ("O aluno: ", nome, ", está aprovado!")
   senao
   escreval ("O aluno: ", nome, ", está reprovado!")
   fimse */

   var nome, nota01, nota02;
   nome = prompt("Escreva o nome do aluno: ")
   nota01 = prompt("Digite a nota 01 do aluno: ")
   nota02 = prompt("Digite a nota 02 do aluno: ")

   media = (parseInt(nota01) + parseInt(nota02)) / 2
   
   if ( media >= 50) {
    alert ("O aluno: " + nome + ", esta aprovado!")
   } else {
    alert ("O aluno: " + nome + ", esta reprovado!")
   }