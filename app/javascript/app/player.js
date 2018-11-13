export default class Player {
  constructor(scene, x, y) {
    this.scene = scene;

     // Create the animations we need from the player spritesheet
    const anims = scene.anims;
    anims.create({
      key: "misa-left-walk",
      frames: anims.generateFrameNames("player", { prefix: "misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: "misa-right-walk",
      frames: anims.generateFrameNames("player", { prefix: "misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: "misa-front-walk",
      frames: anims.generateFrameNames("player", { prefix: "misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: "misa-back-walk",
      frames: anims.generateFrameNames("player", { prefix: "misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
      frameRate: 10,
      repeat: -1
    });

    // Create the physics-based sprite that we will move around and animate
    this.sprite = scene.physics.add
      .sprite(x, y, "player", "misa-front")
      .setSize(30, 40)
      .setOffset(0, 24);

    // Set up keyboard input
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    const cursors = this.cursors;
    const sprite = this.sprite;

    // Move sprite & change animation based on keyboard input 
    const speed = 225;
    const prevVelocity = sprite.body.velocity.clone();

    // Stop any previous movement from the last frame
    sprite.body.setVelocity(0);
    // Horizontal movement
    if (this.cursors.left.isDown) {
      sprite.body.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      sprite.body.setVelocityX(speed);
    }

    // Vertical movement
    if (cursors.up.isDown) {
      sprite.body.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      sprite.body.setVelocityY(speed);
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    sprite.body.velocity.normalize().scale(speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    if (cursors.left.isDown) {
      sprite.anims.play("misa-left-walk", true);
    } else if (cursors.right.isDown) {
      sprite.anims.play("misa-right-walk", true);
    } else if (cursors.up.isDown) {
      sprite.anims.play("misa-back-walk", true);
    } else if (cursors.down.isDown) {
      sprite.anims.play("misa-front-walk", true);
    } else {
      sprite.anims.stop();

      // If we were moving, pick and idle frame to use
      if (prevVelocity.x < 0) sprite.setTexture("player", "misa-left");
      else if (prevVelocity.x > 0) sprite.setTexture("player", "misa-right");
      else if (prevVelocity.y < 0) sprite.setTexture("player", "misa-back");
      else if (prevVelocity.y > 0) sprite.setTexture("player", "misa-front");
    }
  }

  destroy() {
    this.sprite.destroy();
  }
}