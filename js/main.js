let game

function setup() {
	let a = document.documentElement.clientWidth *0.9
    let canvas = createCanvas(a, a * 1.25)
	canvas.parent('canvas')
	
    game = new Game(a * 0.25)
    game.init(level)
}

function draw() {
    background(200)
    game.show()
}

function mousePressed() {
    game.mousePressed()
}

function mouseDragged() {
    game.mouseDragged()
}

function mouseReleased() {
    game.mouseReleased()
}
