const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const rocketImg = new Image();
rocketImg.src = 'images/rocket.png';


let squareX = 50; 
let speed = 2;

rocketImg.onload = function() {
    gameLoop();
};



// Главный цикл игры/анимации
function gameLoop() {
    // 1. ОЧИЩАЕМ ХОЛСТ перед каждым новым кадром
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. ИЗМЕНЯЕМ КООРДИНАТЫ (двигаем квадрат вправо)
    squareX += speed;

    // Если квадрат улетел за границы экрана, возвращаем его обратно
    if (squareX > canvas.width) {
        squareX = -100; 
    }

    // 3. РИСУЕМ ВСЕ ОБЪЕКТЫ ЗАНОВО
    drawTable();
    drawCircle();
    drawRectangle(squareX, 50); // Передаем измененный X в функцию

    // 4. ЗАПРАШИВАЕМ СЛЕДУЮЩИЙ КАДР
    requestAnimationFrame(gameLoop);
}


function drawTable() {
    ctx.drawImage(rocketImg, 20, 300, 100, 100);
}


function drawCircle(){
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2*Math.PI); // координаты совпадают с координатами 
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawRectangle(x, y){
    ctx.fillStyle = 'orange'; // Цвет заливки
    ctx.fillRect(x, y, 100, 100);
}