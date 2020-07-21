let bigCanvas = document.getElementById("big-canvas");
let contextBigCanvas = bigCanvas.getContext('2d');
let smallCanvas = document.getElementById("small-canvas");
let contextSmallCanvas = smallCanvas.getContext('2d');
contextBigCanvas.strokeRect(1, 1, 598, 598);
contextSmallCanvas.strokeRect(1, 1, 598, 48);

function drawStar(ctx, r) {
    ctx.save();
    ctx.beginPath();
    ctx.rotate(-Math.PI / 10);
    ctx.scale(r, r);
    ctx.moveTo(1, 0);
    ctx.lineWidth = ctx.lineWidth / r;
    for (let i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5);
        if (i % 2 === 0) {
            ctx.lineTo(0.3819653016466596, 0);
        } else {
            ctx.lineTo(1, 0);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function makeStar(id, fillColor, x, y) {
    let ctx = document.getElementById(id).getContext('2d');
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = fillColor;
    drawStar(ctx, 40);
}

makeStar('big-canvas', 'red', 60, 300);
makeStar('big-canvas', 'blue', 120, 0);
makeStar('big-canvas', 'green', 120, 0);
makeStar('big-canvas', 'yellow', 120, 0);
makeStar('big-canvas', 'black', 120, 0);

bigCanvas.onclick = function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const imgData = contextBigCanvas.getImageData(x, y, 1, 1);
    const pixel = imgData.data;
    smallCanvas.style.backgroundColor = `rgba(${pixel.join(',')})`;
}
