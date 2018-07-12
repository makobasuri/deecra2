import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.tilemapTiledJSON('mymap', '../assets/mymap.json')
    this.load.image('tiles', '../assets/DungeonCrawl_ProjectUtumnoTileset.png')
}

function create ()
{
    var map = this.make.tilemap({ key: 'mymap' });
    var tiles = map.addTilesetImage('Utumno', 'tiles');

    const layer = map.createStaticLayer('Tile Layer 1', tiles, 0, 0)
}
