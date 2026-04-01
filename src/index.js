alert("Volte aos estudos!");

const novaCaixa = document.createElement('div');
novaCaixa.innerText = 'PARE DE ASSISTIR VÍDEOS E VOLTE AOS ESTUDOS!\n\n';
novaCaixa.classList.add('bloqueio-estudos');

const botaoSair = document.createElement('button');
botaoSair.innerText = 'Entendi, vou estudar!';
botaoSair.classList.add('meu-botao-estilo'); 

botaoSair.onclick = function() {
    novaCaixa.remove(); 
    document.body.classList.remove('sem-scroll'); 
};

novaCaixa.appendChild(botaoSair);

document.body.appendChild(novaCaixa);
document.body.classList.add('sem-scroll');