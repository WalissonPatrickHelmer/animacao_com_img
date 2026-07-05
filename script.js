const TOTAL_FRAMES = 150; 
let currentFrame = 0;
let currentSession = 1;

const viewer = document.getElementById("video");
const story = document.getElementById("story");

function render() {
    // Atualiza imagem
    viewer.src = `img/0${currentSession} (${currentFrame + 1}).jpg`;

    // Calcula a posição do texto
    // Começa abaixo da tela (100vh) e vai até o topo (-100vh)
    const progress = currentFrame / (TOTAL_FRAMES - 1);
    const y = 100 - (progress * 200); 
    story.style.top = `${y}vh`;
}

window.addEventListener("wheel", (e) => {
    e.preventDefault();
    
    if (e.deltaY > 0) { // Scroll para baixo
        if (currentFrame < TOTAL_FRAMES - 1) {
            currentFrame++;
        } else if (currentSession < 2) {
            currentSession++;
            currentFrame = 0;
        }
    } else { // Scroll para cima
        if (currentFrame > 0) {
            currentFrame--;
        } else if (currentSession > 1) {
            currentSession--;
            currentFrame = TOTAL_FRAMES - 1;
        }
    }
    render();
}, { passive: false });

render();