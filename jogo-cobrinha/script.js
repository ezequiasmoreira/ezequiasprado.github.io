document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const snakeElement = document.getElementById('snake');
    const foodElement = document.getElementById('food');

    let snakeX = 0;
    let snakeY = 0;
    let foodX = 0;
    let foodY = 0;
    let snakeSpeedX = 1;
    let snakeSpeedY = 0;
    let snakeSegments = [{ x: 0, y: 0 }];
    let foodExists = false;

    function updateSnake() {
        snakeX += snakeSpeedX * 20;
        snakeY += snakeSpeedY * 20;

        // Check collision with walls
        if (snakeX >= 400 || snakeX < 0 || snakeY >= 400 || snakeY < 0) {
            gameOver();
            return;
        }

        // Check collision with self
        for (let i = 1; i < snakeSegments.length; i++) {
            if (snakeX === snakeSegments[i].x && snakeY === snakeSegments[i].y) {
                gameOver();
                return;
            }
        }

        snakeSegments.unshift({ x: snakeX, y: snakeY });

        // Check if snake eats food
        if (snakeX === foodX && snakeY === foodY) {
            foodExists = false;
            placeFood();
        } else {
            snakeSegments.pop();
        }

        updateSnakeElement();
    }

    function updateSnakeElement() {
        snakeElement.style.left = snakeX + 'px';
        snakeElement.style.top = snakeY + 'px';
    }

    function placeFood() {
        if (!foodExists) {
            foodX = Math.floor(Math.random() * 20) * 20;
            foodY = Math.floor(Math.random() * 20) * 20;
            foodElement.style.left = foodX + 'px';
            foodElement.style.top = foodY + 'px';
            foodExists = true;
        }
    }

    function gameOver() {
        alert('Game Over!');
        // Reset game
        snakeX = 0;
        snakeY = 0;
        snakeSpeedX = 1;
        snakeSpeedY = 0;
        snakeSegments = [{ x: 0, y: 0 }];
        foodExists = false;
        updateSnakeElement();
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if (snakeSpeedY !== 1) {
                    snakeSpeedX = 0;
                    snakeSpeedY = -1;
                }
                break;
            case 'ArrowDown':
                if (snakeSpeedY !== -1) {
                    snakeSpeedX = 0;
                    snakeSpeedY = 1;
                }
                break;
            case 'ArrowLeft':
                if (snakeSpeedX !== 1) {
                    snakeSpeedX = -1;
                    snakeSpeedY = 0;
                }
                break;
            case 'ArrowRight':
                if (snakeSpeedX !== -1) {
                    snakeSpeedX = 1;
                    snakeSpeedY = 0;
                }
                break;
        }
    });

    function gameLoop() {
        updateSnake();
        setTimeout(gameLoop, 100);
    }

    placeFood();
    gameLoop();
});
