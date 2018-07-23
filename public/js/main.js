import 'phaser';

import Char from './Char.js'

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.tilemapTiledJSON('mymap', '/public/assets/mymap.json')
    this.load.image('tiles', '/public/assets/DungeonCrawl_ProjectUtumnoTileset.png')
    this.load.spritesheet('char', '/public/assets/steampunk_f10.png', {
        frameWidth: 24,
        frameHeight: 48,
        spacing: 2
    })
}

function create ()
{
    var map = this.make.tilemap({ key: 'mymap' });
    var tiles = map.addTilesetImage('Utumno', 'tiles');

    const layer = map.createStaticLayer('Tile Layer 1', tiles, 0, 0)

    console.log(this.physics)
    //this.physics.world.bounds.width = this.groundLayer.width;

    this.keys = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
        down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    this.char = new Char({
        scene: this,
        key: 'char',
        x: 16,
        y: this.sys.game.config.height - 64
    })

    this.cameras.main.startFollow(this.char)
    this.cameras.main.roundPixels = true;
}

function update(time, delta) {
    this.char.update(this.keys, time, delta)
}
