alert ("Bem vindo ao codigo secreto:");
let NumSecret = 4;
let chute = 11;
let tenta=1;

//enquando o código for errado repita
while(chute != NumSecret){
    chute = prompt("Escolha um numero de 1 a 10");  
    //se o codigo for correto
    if (chute == NumSecret){
        alert (`Parabéns você acertou o número com ${tenta} tentativas`);
    } else {
        if(chute > NumSecret) {
            alert(`Erroooou, número secreto é Menor que ${chute} `);
        } else {
        
        alert(`Erroooouuuu, O número secreto é Maior que ${chute}`);
        }
        tenta++;
    }
}

    
