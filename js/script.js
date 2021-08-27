var myButton = document.querySelector('#button')
var myInput = document.querySelector('#input')
var randomFrases = ['ДА =)', 'Нет =(']
myButton.disabled = true





myInput.addEventListener('keyup', inputListenerforQuestion)
myButton.addEventListener('click', prediction)

function inputListenerforQuestion() {
    if (myInput.value.slice(0, 7) != 'Вопрос:') {
        myButton.disabled = true
        alert('Это Слово нельзя Было Трогать ! Перезагрузи Страничку ! ')
    } else { myButton.disabled = false }
}


function prediction() {
    if (myInput.value.slice(-1) != '?') {
        alert('ЕЙ! А где знак вопроса ?')
    } else {
        alert(randomFrases[Math.floor(Math.random() * 2)])
    }
}














































// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");


// var Ball = function () {
//     this.x = 100;
//     this.y = 100;
//     this.xSpeed = -2;
//     this.ySpeed = 3
// }

// var circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill()
//     } else {
//         ctx.stroke()
//     }
// };

// Ball.prototype.draw = function () {
//     circle(this.x, this.y, 3, true)
// }

// Ball.prototype.move = function () {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
// }

// Ball.prototype.checkCollision = function () {
//     if (this.x < 0 || this.x > 200) {
//         this.xSpeed = -this.xSpeed
//     }
//     if (this.y < 0 || this.y > 200) {
//         this.ySpeed = -this.ySpeed;
//     }
// };


























































// var circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill();
//     } else {
//         ctx.stroke()
//     }

// }



// var drawBee = function (x, y) {
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = 'Black';
//     ctx.fillStyle = 'Gold';

//     circle(x, y, 8, true);
//     circle(x - 5, y - 11, 5, false);
//     circle(x + 5, y - 11, 5, false);
//     circle(x - 2, y - 1, 2, false);
//     circle(x + 2, y - 1, 2, false);

// }


// var update = function (coordinate) {
//     var offset = Math.random() * 4 - 2;
//     coordinate += offset
//     if (coordinate > 200) {
//         coordinate = 200
//     } if (coordinate < 0) {
//         coordinate = 0
//     }
//     return coordinate;
// }


// var x = 100;
// var y = 100;

// setInterval(function () {
//     ctx.clearRect(0, 0, 200, 200);
//     drawBee(x, y)
//     x = update(x)
//     y = update(y)
//     ctx.strokeRect(0, 0, 200, 200)

// }, 30);











































