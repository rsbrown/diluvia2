import Scene from "./scene";

export default class Game {
  
  loadZone(config) {
    this.scene = new Scene(config.tileset, config.tilemapData);
  }
  
  launch() {
    const config = {
      type: Phaser.AUTO,
      width: 1024,
      height: 768,
      parent: "game-container",
      scene: this.scene,
      physics: {
        default: "arcade",
        debug: true,
        arcade: {
          gravity: { y: 0 }
        }
      }
    }
    new Phaser.Game(config);
  }
  
}