alert("Volte aos estudos!");

const novaCaixa = document.createElement('div');

novaCaixa.innerText = 'PARE DE ASSISTIR VÍDEOS E VOLTE AOS ESTUDOS!';

novaCaixa.classList.add('bloqueio-estudos');

document.body.appendChild(novaCaixa);

document.body.classList.add('sem-scroll');