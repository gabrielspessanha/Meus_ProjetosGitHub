const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


let pontuacao = 0
let velocidade = 2
const point =setInterval(function() {
    pontuacao ++
    document.getElementById('pontuacao').innerHTML = parseInt(pontuacao)

    if(pontuacao >= 30) {
        pipe.style.animation= `pipe-animation ${velocidade}s infinite linear`
        pontuacao+= velocidade
        velocidade -= 0.001
    }
},200);
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 600)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = "../imagens/game-over.png"
        mario.style.width = '85px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
        clearInterval(point) 
    }
}, 10);
 

document.addEventListener("keydown",jump)