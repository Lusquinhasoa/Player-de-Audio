var music = document.querySelector('audio');
var indexMusica = 0;

var duracao = document.querySelector('.fim');
var imagem = document.querySelector('img');
var nomeMus = document.querySelector('.descrição h2');
var artista = document.querySelector('.descrição i');

render(indexMusica);

var musics = [
    {título: 'Eletrônica', artista: 'Mini Vandals',src:'músicas/Gunpowder Tea - Mini Vandals.mp3', img:'imagens/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg'},
    {título: 'Eletrônica', artista: 'Yung Logos',src:'músicas/Houser - Yung Logos.mp3', img:'imagens/bass.jpg'},
    {título: 'Eletrônica', artista: 'NEFFEX',src:'músicas/Something You Could Never Own (Clean) - NEFFEX.mp3', img:'imagens/partit.jpg'}
];

document.querySelector('.botao-play').addEventListener('click', tocar);

document.querySelector('.botao-pause').addEventListener('click', pausar);

music.addEventListener('timeupdate', attbarrinha);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    render(indexMusica);
});

document.querySelector('.próximo').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    render(indexMusica);
});

function render(index){
    music.setAttribute('src', músicas[index].src);
    music.addEventListener('loadeddata', () => {
        nomeMus.textContent = músicas[index].titulo;
        artista.textContent = músicas[index].artista;
        imagem.src = músicas[index].img;
        duracao.textContent = sgsTomin(Math.floor(music.duration));
    })
}

function tocar(){
    music.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausar(){
    music.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function attbarrinha(){
    var barrinha = document.querySelector('progress');
    barrinha.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    var tempo = document.querySelector('.inicio');
    tempo.textContent = Math.floor(music.currentTime);
}
function sgsTomin(sgs){
    var min = Math.floor(sgs/60);
    var seg = sgs % 60;
    if(seg < 10){
        seg = '0' + seg;
    }
    return min + ':' + seg;
}
