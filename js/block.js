class Block {
    constructor (name, x, y, w, h, color, SCALE) {
        // this.SAMPLE_RATE = 20
		this.SAMPLE_RATE = SCALE * 0.2
		
        this.name = name
        this.size = createVector(w, h)
        this.pos = createVector(x, y)
		this.posOld = createVector(x, y)
        this.color = color
        this.vertex = [
            createVector(x, y),
            createVector(x + this.size.x, y),
            createVector(x + this.size.x, y + this.size.y),
            createVector(x, y + this.size.y)
        ]
        this.mouseOffset = createVector(0, 0)
    }

    contains(x, y) {
        return x > this.pos.x && x < this.pos.x + this.size.x && y > this.pos.y && y < this.pos.y + this.size.y
    }

    collision(target, flag) {
        let diff = p5.Vector.sub(target, this.pos)

        let rays = []
        if (diff.x >= 0) {
            for (let y = this.vertex[1].y; y <= this.vertex[2].y; y += this.SAMPLE_RATE) {
                rays.push(new Ray(this.vertex[1].x, y, this.vertex[1].x + diff.x, y + diff.y))
            }
        } else {
            for (let y = this.vertex[0].y; y <= this.vertex[3].y; y += this.SAMPLE_RATE) {
                rays.push(new Ray(this.vertex[0].x, y, this.vertex[0].x + diff.x, y + diff.y))
            }
        }
        if (diff.y >= 0) {
            for (let x = this.vertex[3].x; x <= this.vertex[2].x; x += this.SAMPLE_RATE) {
                rays.push(new Ray(x, this.vertex[3].y, x + diff.x, this.vertex[3].y + diff.y))
            }
        } else {
            for (let x = this.vertex[0].x; x <= this.vertex[1].x; x += this.SAMPLE_RATE) {
                rays.push(new Ray(x, this.vertex[0].y, x + diff.x, this.vertex[0].y + diff.y))
            }
        }

        let firstHitRay = null
        let rayLength = Infinity
        for (let ray of rays) {
            let distance = ray.rayCast2D(game.blocks)
            if (distance !== false && distance < rayLength) {
                firstHitRay = ray
                rayLength = distance
            }
        }

        if (firstHitRay !== null) {
            target = p5.Vector.add(this.pos, firstHitRay.getVector())
            this.updatePos(target.x, target.y)

            if (flag) {
                diff.sub(firstHitRay.getVector())
                this.collision(p5.Vector.add(this.pos, createVector(diff.x, 0)), false)
                this.collision(p5.Vector.add(this.pos, createVector(0, diff.y)), false)
            }

        } else {
            this.updatePos(target.x, target.y)
        }
    }

    updatePos(x, y) {
        this.pos.x = x
        this.pos.y = y
        this.vertex = [
            createVector(x, y),
            createVector(x + this.size.x, y),
            createVector(x + this.size.x, y + this.size.y),
            createVector(x, y + this.size.y)
        ]
    }

    show() {
        stroke(51)
        strokeWeight(3)
        fill(this.color)
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        fill(51)
		textFont("Gaegu")
        textSize(50)
        textAlign(CENTER, CENTER)
        text(this.name, this.pos.x + 8, this.pos.y, this.size.x, this.size.y)
    }

    mousePressed() {
        this.mouseOffset.x = mouseX - this.pos.x
        this.mouseOffset.y = mouseY - this.pos.y
    }

    mouseDragged() {
        let target = createVector(mouseX - this.mouseOffset.x, mouseY - this.mouseOffset.y)
        this.collision(target, true)
    }

    mouseReleased() {
        this.updatePos(round(this.pos.x / game.SCALE) * game.SCALE, round(this.pos.y / game.SCALE) * game.SCALE)
		if (abs(this.pos.x - this.posOld.x) > game.SCALE * 0.5 || abs(this.pos.y - this.posOld.y) > game.SCALE * 0.5) {
			this.posOld.x = this.pos.x
			this.posOld.y = this.pos.y
			if (this.name === '曹 操' && this.pos.x === game.SCALE && this.pos.y === 3 * game.SCALE) {
				var btn = ["继续","取消"];
				mui.confirm('继续游戏？','恭喜您过关',btn,function(e){
					if(e.index==0){
						var myDate = new Date()
						var myTime = myDate.toLocaleTimeString()
						plus.storage.setItem(myTime + ' 第' + level + '关', game.step + '步');
						level = level % 5 + 1
						if (level === 1) {
							plus.nativeUI.toast('恭喜您通关');
						}
						changeLevel(level)
					}
				});
			}
			return 1
		} else{
			this.posOld.x = this.pos.x
			this.posOld.y = this.pos.y
			if (this.name === '曹 操' && this.pos.x === game.SCALE && this.pos.y === 3 * game.SCALE) {
				var btn = ["继续","取消"];
				mui.confirm('继续游戏？','恭喜您过关',btn,function(e){
					if(e.index==0){
						var myDate = new Date()
						var myTime = myDate.toLocaleTimeString()
						plus.storage.setItem(myTime + ' 第' + level + '关', game.step + '步');
						level = level % 5 + 1
						if (level === 1) {
							plus.nativeUI.toast('恭喜您通关');
						}
						changeLevel(level)
					}
				});
			}
			return 0
		}
		
    }
}
