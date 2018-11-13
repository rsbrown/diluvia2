import 'phaser';
import Scene from "./scene";

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  scene: Scene,
  physics: {
    default: "arcade",
    debug: true,
    arcade: {
      gravity: { y: 0 }
    }
  }
};

const game = new Phaser.Game(config);