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