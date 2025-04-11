let valorFinal, compra = parseFloat(prompt(`Digite o valor da sua compra: `));
if(compra > 100){
valorFinal = compra - compra * 10 / 100
console.log(`O valor total a pagar é R$`, valorFinal);
} else if(compra > 0 && compra <= 100) {
    console.log(`O valor total a pagar é R$`, compra);
} else if(compra <= 0 ){
    console.log(`Não existe valor a ser combrado!`);
}