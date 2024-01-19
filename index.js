// Desafio Classificador de Nível de Herói

let heroi = "Eivor Varinsdottir"
let xPoint = 10000

if(xPoint <= 1000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Ferro. Parabéns! ")
}else if(xPoint > 1001 && xPoint <= 2000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Bronze. Parabéns!  ")
}else if(xPoint > 2001 && xPoint <= 5000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Prata. Parabéns! ")
}else if(xPoint > 5001 && xPoint <= 7000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Ouro. Parabéns! ")
}else if(xPoint > 7001 && xPoint <= 8000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Platina. Parabéns! ")
}else if(xPoint > 8001 && xPoint <= 9000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Ascendente. Parabéns! ")
}else if(xPoint > 9001 && xPoint <= 10000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Imortal. Parabéns! ")
}else if(xPoint >= 10000){
    console.log(" O Herói de nome " + heroi + " Está no Nível de Radiante. Parabéns! ")
}