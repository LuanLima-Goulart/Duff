let preco = parseFloat(prompt(`Digite o preço do produto: `));
if(preco > 0 && preco < 50){
    console.log(`Preço barato!`);
} else if(preco >= 50 && preco <= 150){
    console.log(`Preço moderado!`);
} else if(preco > 150){
    console.log(`Preço caro!`);
} else {
    console.log(`Não tem preço para ser categorizado!`);
}