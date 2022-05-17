var musicas = document.querySelector('audio');
var indexMusica = 2;

var duracao = document.querySelector('.fim');
var imagem = document.querySelector('img');
var nomeMus = document.querySelector('.descrição h2');
var artista = document.querySelector('.descrição i');

render(indexMusica);

var musicas = [
    {título: 'Eletrônica', artista: 'Mini Vandals',src:'músicas/Gunpowder Tea - Mini Vandals.mp3', img:'imagens/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg'},
    {título: 'Eletrônica', artista: 'NEFFEX',src:'músicas/Something You Could Never Own (Clean) - NEFFEX.mp3'},
    {título: 'Eletrônica', artista: 'Yung Logos',src:'músicas/Houser - Yung Logos.mp3', img:'imagens/bass.jpg'}
];

document.querySelector('.botao-play').addEventListener('click', tocar);

document.querySelector('.botao-pause').addEventListener('click', pausar);

musicas.addEventListener('timeupdate', attbarrinha);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica --;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    render(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    render(indexMusica);
});

function render(index){
    musicas.setAttribute('src', musicas[index].src);
    musicas.addEventListener('loadeddata', () => {
        nomeMus.textContent = musicas[index].titulo;
        artista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracao.textContent = sgsTomin(Math.floor(musicas.duration));
    })
}

function tocar(){
    musicas.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausar(){
    musicas.pause();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function attbarrinha(){
    var barrinha = document.querySelector('progress');
    barrinha.style.width = Math.floor((musicas.currentTime / musicas.duration) * 100) + '%';
    var tempo = document.querySelector('.inicio');
    tempo.textContent = Math.floor(musicas.currentTime);
}
function sgsTomin(sgs){
    var min = Math.floor(sgs/60);
    var seg = sgs % 60;
    if(seg < 10){
        seg = '0' + seg;
    }
    return min + ':' + seg;
}
