function draw() {
    const canvas = document.querySelector('#tutorial')
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
    } else {
        console.log('unsupported')
    }
}