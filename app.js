'use strict';

const botaoTrocarImagem = document.getElementById('trocar-imagem');
const botaoAuto = document.getElementById('auto');


function trocarImagem() {
  let nomeImagem = document.getElementById('imagem').value;
  let imgExibida = document.getElementById('imagem-exibida');
  imgExibida.src = `./img/${nomeImagem}.jpg`;
}


function slideImagem() {
    let imgExibida = document.getElementById('imagem-exibida').value
    document.documentElement.style.setProperty('imagem-exibida', auto);
}


botaoTrocarImagem.addEventListener('click', trocarImagem);
botaoAuto.addEventListener('click', slideImagenm);


