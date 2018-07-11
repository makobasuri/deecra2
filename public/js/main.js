import Phaser from 'phaser'

const preload = function preload() {
	// this.load.setBaseURL('http://labs.phaser.io');
	this.load.tilemapTiledJSON('tiledmap', '/public/maps/tiledmap.json');
	this.load.image('tileset', '/public/tiles/DungeonCrawl_ProjectUtumnoTileset.png');
	this.load.image('char1tileset', '/public/tiles/characters/steampunk_f10.png');
}

const create = function create() {
	const map = this.add.tilemap('tiledmap');
	map.addTilesetImage('tileset', 'tiledmap');

	const layer = map.createLayer('ground');
	layer.resizeWorld();
	// layer.wrap = true;

	this.cursors = this.input.keyboard.createCursorKeys();
}

const update = function update() {
	if (this.cursors.left.isDown) {
		this.camera.x -= 8;
	} else if (this.cursors.right.isDown) {
		this.camera.x += 8;
	}

	if (this.cursors.up.isDown) {
		this.camera.y -= 8;
	} else if (this.cursors.down.isDown) {
		this.camera.y += 8;
	}

	console.log(this.camera.x, this.camera.y)
}

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
		create: create,
		update: update
	}
};


const game = new Phaser.Game(config)

console.log(game)
