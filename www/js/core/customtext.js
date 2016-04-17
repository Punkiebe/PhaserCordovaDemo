require('script!phaser/dist/phaser.min.js');

//import Phaser from 'phaser/dist/phaser.min.js';

var CustomText = function(game, x, y, text) {

    Phaser.Text.call(this, game, x, y, text, { font: "65px Arial", fill: "#ff0044", align: "center" });

    this.anchor.set(0.5);

    this.rotateSpeed = 1;

}

CustomText.prototype = Object.create(Phaser.Text.prototype);
CustomText.prototype.constructor = CustomText;

CustomText.prototype.update = function() {

    this.angle += this.rotateSpeed;

};


export default CustomText;
