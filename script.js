function draw() {
    const canvas = document.querySelector('#tutorial')
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    } else {
        console.log('unsupported')
    }
}