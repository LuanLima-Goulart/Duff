let idade = parseInt(prompt(`Digite sua idade: `));
if(idade >= 0 && idade <= 12){
    console.log(`Criança`);
} else if(idade >= 13 && idade <= 17){
    console.log(`Adolecente`);
} else if(idade >= 18 && idade <= 64){
    console.log(`Adulto`);
} else if(idade >= 65){
    console.log(`Idoso`);
} else {
    console.log(`Não existe idade negativa!!!`);
}