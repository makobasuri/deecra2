export default class Char extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y, config.key)
		config.scene.physics.world.enable(this)
		config.scene.add.existing(this)
		this.speed = 200
	}

	update(keys, time, delta) {
		let input = {
			up: keys.up.isDown,
			upLifted: keys.up.isUp,
			down: keys.down.isDown,
			downLifted: keys.down.isUp,
			left: keys.left.isDown,
			leftLifted: keys.left.isUp,
			right: keys.right.isDown,
			rightLifted: keys.right.isUp
		}

		if (input.left) {
			this.body.setVelocityX(-this.speed)
		} else if (input.right) {
			this.body.setVelocityX(this.speed)
		} else if (input.up) {
			this.body.setVelocityY(-this.speed)
		} else if (input.down) {
			this.body.setVelocityY(this.speed)
		}

		if (this.body.velocity.x < 0 && input.leftLifted) {
			this.body.setVelocityX(0)
		}

		if (this.body.velocity.x > 0 && input.rightLifted) {
			this.body.setVelocityX(0)
		}

		if (this.body.velocity.y < 0 && input.upLifted) {
			this.body.setVelocityY(0)
		}

		if (this.body.velocity.y > 0 && input.downLifted) {
			this.body.setVelocityY(0)
		}

		this.physicsCheck = true
	}
}
