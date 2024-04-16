document.addEventListener('DOMContentLoaded', function () {
    const bird = document.getElementById('bird');
    const pipes = document.querySelectorAll('.pipe');
    const scoreDisplay = document.getElementById('score');
    let gravity = 0.1;
    let velocity = 0;
    let jump = -2;
    let score = 0;

    function gameLoop() {
        velocity += gravity;
        bird.style.top = bird.offsetTop + velocity + 'px';

        if (bird.offsetTop < 0 || bird.offsetTop + bird.offsetHeight > 600) {
            gameOver();
        }

        movePipes();

        if (collision()) {
            gameOver();
        }

        requestAnimationFrame(gameLoop);
    }

    function movePipes() {
        pipes.forEach(function (pipe) {
            pipe.style.left = pipe.offsetLeft - 1 + 'px';

            if (pipe.offsetLeft + pipe.offsetWidth < 0) {
                resetPipe(pipe);
                incrementScore();
            }
        });
    }

    function collision() {
        let birdRect = bird.getBoundingClientRect();

        for (let pipe of pipes) {
            let pipeRect = pipe.getBoundingClientRect();

            if (
                birdRect.left < pipeRect.right &&
                birdRect.right > pipeRect.left&&
                birdRect.top < pipeRect.bottom &&
                birdRect.bottom > pipeRect.top
            ) {
                return true;
            }
        }

        return false;
    }

    function gameOver() {
        alert("OHH NOOO")
        location.reload();
    }

    function resetPipe(pipe) {
        pipe.style.left = '400px';
        pipe.style.height = Math.floor(Math.random() * 300) + 'px';
    }

    function incrementScore() {
        score++;
        scoreDisplay.textContent = score;
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Spacebar') {
            velocity = jump;
        }
    });

    gameLoop();
});
