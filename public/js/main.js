import Phaser from '../../node_modules/phaser/src/phaser'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: {
		preload: preload,
		create: create
	}
};
const game = new Phaser.game(config)

console.log(game)
