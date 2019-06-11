class Game {
    constructor(SCALE) {
        this.PRIMARY_COLOR = color(231, 76, 60)
        this.SECONDARY_COLOR = color(243, 156, 18)
        this.SCALE = SCALE

        this.blocks = []
        this.currentBlock = null
		this.step = 0
    }

    init(level) {
		switch(level) {
			case 1:
				this.blocks.push(new Block('张 飞', 0, 0, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('曹 操', 2 * this.SCALE, 2 * this.SCALE, 2 * this.SCALE, 2 * this.SCALE, this.PRIMARY_COLOR, this.SCALE))
				this.blocks.push(new Block('赵 云', this.SCALE, 0, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('黄 忠', 0, 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('关 羽', this.SCALE, 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('马 超', 3 * this.SCALE, 0, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 0, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', this.SCALE, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 2 * this.SCALE, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 3 * this.SCALE, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				break;
			case 2:
				this.blocks.push(new Block('张 飞', 0, this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('曹 操', this.SCALE, this.SCALE, 2 * this.SCALE, 2 * this.SCALE, this.PRIMARY_COLOR, this.SCALE))
				this.blocks.push(new Block('赵 云', 3 * this.SCALE, this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('黄 忠', 0, 3 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('关 羽', this.SCALE, 0, 2 * this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('马 超', 3 * this.SCALE, 3 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 2 * this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 0, 0, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 3 * this.SCALE, 0, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				break;
			case 3:
				this.blocks.push(new Block('张 飞', 0, 0, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('曹 操', this.SCALE, this.SCALE, 2 * this.SCALE, 2 * this.SCALE, this.PRIMARY_COLOR, this.SCALE))
				this.blocks.push(new Block('赵 云', 3 * this.SCALE, this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('黄 忠', 0, 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('关 羽', this.SCALE, 0, 2 * this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('马 超', 2 * this.SCALE, 3 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 3 * this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', this.SCALE, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 3 * this.SCALE, 0, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				break;
			case 4:
				this.blocks.push(new Block('张 飞', 2 * this.SCALE, 0, 2 * this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('曹 操', 0, 0, 2 * this.SCALE, 2 * this.SCALE, this.PRIMARY_COLOR, this.SCALE))
				this.blocks.push(new Block('赵 云', 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('黄 忠', 0, 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('关 羽', this.SCALE, 2 * this.SCALE, 2 * this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('马 超', 3 * this.SCALE, 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 2 * this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 0, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 3 * this.SCALE, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				break;
			case 5:
				this.blocks.push(new Block('张 飞', 0, 0, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('曹 操', this.SCALE, 0, 2 * this.SCALE, 2 * this.SCALE, this.PRIMARY_COLOR, this.SCALE))
				this.blocks.push(new Block('赵 云', 3 * this.SCALE, 0, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('黄 忠', 0, 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('关 羽', this.SCALE, 2 * this.SCALE, 2 * this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('马 超', 3 * this.SCALE, 2 * this.SCALE, this.SCALE, 2 * this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 2 * this.SCALE, 3 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 0, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				this.blocks.push(new Block('卒', 3 * this.SCALE, 4 * this.SCALE, this.SCALE, this.SCALE, this.SECONDARY_COLOR, this.SCALE))
				break;
		}
        
    }
	

    mousePressed() {
        for (let block of this.blocks) {
            if (block.contains(mouseX, mouseY)) {
                this.currentBlock = block
            }
        }
        if (this.currentBlock) {
            this.currentBlock.mousePressed()
        }
    }

    mouseDragged() {
        if (this.currentBlock) {
            this.currentBlock.mouseDragged()
        }
    }

    mouseReleased() {
        if (this.currentBlock) {
			let test
            test = this.currentBlock.mouseReleased()
			if (test == 1) {
				this.step++
				document.getElementById("step").innerHTML=this.step
			} else{
				
			}
			console.log(test)
            this.currentBlock = null
        }
    }

    show() {
        for (let block of this.blocks) {
            block.show()
        }
    }
}
