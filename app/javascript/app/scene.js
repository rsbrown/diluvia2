import 'phaser';
import Player from './player';

export default class Scene extends Phaser.Scene {
  constructor(tiles, json) {
    super();
    
    this.tiles = tiles;
    this.json = json;
  }

  preload() {
    this.load.image("tiles", this.tiles);
    this.load.tilemapTiledJSON("town", this.json);
    this.load.atlas("player", "/player1.png", "/player1.json");
  }

  create() {
    const spawnX = 400;
    const spawnY = 350;
    
    let map = this.make.tilemap({ key: "town" });
    const tileset = map.addTilesetImage("tileset", "tiles");

    this.belowLayer = map.createStaticLayer("below", tileset, 0, 0);
    this.worldLayer = map.createStaticLayer("world", tileset, 0, 0);
    this.aboveLayer = map.createStaticLayer("above", tileset, 0, 0);
    this.aboveLayer.setDepth(10);

    this.player = new Player(this, spawnX, spawnY);

    this.worldLayer.setCollisionByProperty({ collides: true });
    this.physics.world.addCollider(this.player.sprite, this.worldLayer);

    const camera = this.cameras.main;
    camera.startFollow(this.player.sprite);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.input.keyboard.once("keydown_D", event => {
      this.physics.world.createDebugGraphic();
      const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);
      worldLayer.renderDebug(graphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255)
      });
    });
  }

  update(time, delta) {
    // Allow the player to respond to key presses and move itself
    this.player.update();
  }
}