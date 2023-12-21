const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const jumpButton = document.getElementById('jumpButton');


let pontuacao = 0
let velocidade = 2
let loop;
let point;
let pipeRange = 120

const restartButton = document.getElementById('restartButton');

restartButton.style.display = 'none';

const screenWidth = window.innerWidth;

if (screenWidth < 750) {
    velocidade = 1.3
}
    
const startGame = () => {

   
    point = setInterval(function() {
      pontuacao++;
      document.getElementById('pontuacao').innerHTML = parseInt(pontuacao);

      if (screenWidth < 750){ 
        console.log(velocidade)
    
        if (pontuacao >= 100) {
            pipe.style.animation = `pipe-animation ${velocidade}s infinite linear`;
            pontuacao += velocidade;
            velocidade -= 0.001;

            if(velocidade <= .83 ){
                velocidade = .83
            }
        }

      }else{
 
        if (pontuacao >= 100) {
            pipe.style.animation = `pipe-animation ${velocidade}s infinite linear`;
            pontuacao += velocidade; 
            velocidade -= 0.001;

            if(velocidade <= .83 ){
                velocidade = .83
            }
        }
      }
  
      
    }, 200);

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (screenWidth < 750) { 
            pipeRange = 77   
            
            if (pipePosition <= pipeRange && pipePosition > 0 && marioPosition < 50) {
                pipe.style.animation = 'none'
                pipe.style.left = `${pipePosition}px`
        
                mario.style.animation = 'none'
                mario.style.bottom = `${marioPosition}px`
        
                mario.src = "../imagens/game-over.png"
                mario.style.width = '55px'
                mario.style.marginLeft = '50px'
                clearInterval(loop)
                clearInterval(point)
                showButtonRestart()
            }
        }else{
            if (pipePosition <= pipeRange && pipePosition > 0 && marioPosition < 80) {
                pipe.style.animation = 'none'
                pipe.style.left = `${pipePosition}px`
        
                mario.style.animation = 'none'
                mario.style.bottom = `${marioPosition}px`
        
                mario.src = "../imagens/game-over.png"
                mario.style.width = '85px'
                mario.style.marginLeft = '50px'
                clearInterval(loop)
                clearInterval(point)
                showButtonRestart()
            }
        }
        
        
    }, 10);
}

const showButtonRestart = () => {
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'block';
    restartButton.addEventListener('click', restartGame);
};

const restartGame = () => {
    pontuacao = 0;
    velocidade = 2;
    mario.src = "../imagens/Mario-correndo.gif";
    mario.style.width = '85px';
    mario.style.marginLeft = '50px';
    document.getElementById('restartButton').style.display = 'none';
    
    clearInterval(point)
    clearInterval(loop)

    startGame()
};


const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 600)
}

window.addEventListener('resize', updatePipeAnimation);


restartButton.addEventListener('click', ()=>{
    location.reload()
})

jumpButton.addEventListener('click',jump)
document.addEventListener("keydown",jump)

startGame()

function updatePipeAnimation() {
    
}