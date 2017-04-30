var preload = function(game) {};

preload.prototype = {
  preload: function() {
    this.game.stage.backgroundColor = "#ffffff"
    this.game.load.spritesheet ('circle', 'assets/circle1.png', 140, 140);
    this.game.load.spritesheet ('square', 'assets/square1.png', 140, 140);
    this.game.load.spritesheet ('button', 'assets/Right.png', 140, 100);
    this.game.load.spritesheet ('refresh', 'assets/Refresh.png', 140, 140);
  },

  create: function() {
    this.game.state.start("Character");
  }
}
