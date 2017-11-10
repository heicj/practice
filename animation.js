// function draw(){
//     const canvas = document.getElementById('ball');
//     const ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
//     ctx.fill();
// }

// draw();
// original draw function from: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// function draw() {
//     const canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         const ctx = canvas.getContext('2d');
//         ctx.beginPath();
//         ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
//         // ctx.moveTo(110, 75);
//         // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
//         // ctx.moveTo(65, 65);
//         // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
//         // ctx.moveTo(95, 65);
//         // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
//         // ctx.stroke();
//         ctx.fill();
//     } 
// }

const eightBall = new Image();
function init(){
    eightBall.src = 'eightBall.jpg';
}

// function draw(){
//     const ctx = document.getElementById('canvas').getContext('2d');
//     ctx.clearRect(0,0,500,500);

//     ctx.fillStyle = 'rgba(0,0,0,0)';
//     ctx.drawImage(eightBall, 0, 0, 250,250);
// }

init();
// draw();

function draw(){
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,700,700);
    
    ctx.drawImage(eightBall, -5, -5, 250,250);
    ctx.clearRect(0,0,700,700);

    ctx.drawImage(eightBall, 5, 5, 250, 250);
    ctx.clearRect(0,0,700,700);

    ctx.drawImage(eightBall, 0, 0, 250, 250);

}
setInterval(draw, 50000);
// setTimeout(draw, 500000);
draw();






