let nomeDoHeroi = "Cleitinho";
let XPDoHeroi = 5161;
let nivelDoHeroi = "";

if (XPDoHeroi <= 1000){
nivelDoHeroi = "Ferro"
}else if(XPDoHeroi >= 1001 && XPDoHeroi <=2000){
    nivelDoHeroi = "Bronze"
}else if(XPDoHeroi >= 2001 && XPDoHeroi <=5000){
    nivelDoHeroi = "Prata"
}else if(XPDoHeroi >= 5001 && XPDoHeroi <=7000){
    nivelDoHeroi = "Ouro"
}else if(XPDoHeroi >= 7001 && XPDoHeroi <=8000){
    nivelDoHeroi = "Platina"
}else if(XPDoHeroi >= 8001 && XPDoHeroi <=9000){
    nivelDoHeroi = "Ascendente"
}else if(XPDoHeroi >= 9001 && XPDoHeroi <=10000){
    nivelDoHeroi = "Imortal"
}else {
    nivelDoHeroi = "Radiante"
};

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);