function draw() {
    const canvas = document.querySelector("#tutorial");
    const ctx = canvas.getContext("2d");
    // Clear canvas
    ctx.fillStyle = '#001d3d'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    function drawStar(x, y, size) {
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = '#fff'
        ctx.fill()
        ctx.closePath()
    }

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 2 + 1
        drawStar(x, y, size)
    }
}