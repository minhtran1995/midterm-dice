/*
 *******************************************************************************
 * Source file name : play.ts                                                  *
 * Author's name : Duc Minh Tran (300771859)                                   *
 * Last Modified by : Duc Minh Tran (300771859)                                *
 * Last Modified date : March 2016                                             *
 * Program description : This web game, by using create js, is kind of         *
 *                     simulation of a dice roller. User can click spin button *
 * and receive different dices everytime                                       *
 * Revision History : 1                                                        *
 *******************************************************************************
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._setupBackground("whiteBG");
            this._fadeIn(500);
            //Add rand Label
            this._rand1Lbl = new objects.Label(" ", "20px Arial", "#000000", config.Screen.CENTER_X - 75, config.Screen.CENTER_Y);
            this.addChild(this._rand1Lbl);
            //Add rand Label
            this._rand2Lbl = new objects.Label(" ", "20px Arial", "#000000", config.Screen.CENTER_X + 65, config.Screen.CENTER_Y);
            this.addChild(this._rand2Lbl);
            // add the Start button to the MENU scene
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 100);
            this.addChild(this._rollButton);
            // roll Button event listener
            this._rollButton.on("click", this._rollButtonClick, this);
            //first window
            this._firstWindow = new createjs.Bitmap(assets.getResult("Blank"));
            this._firstWindow.x = config.Screen.CENTER_X - 120;
            this._firstWindow.y = 100;
            this.addChild(this._firstWindow);
            //second window
            this._secondWindow = new createjs.Bitmap(assets.getResult("Blank"));
            this._secondWindow.x = config.Screen.CENTER_X + 20;
            this._secondWindow.y = 100;
            this.addChild(this._secondWindow);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            var rand1 = Math.round(Math.random() * 5) + 1;
            var rand2 = Math.round(Math.random() * 5) + 1;
            console.log(rand1);
            console.log(rand2);
            this._rand1Lbl.text = "" + rand1;
            this._rand2Lbl.text = "" + rand2;
            this._firstWindow.image = assets.getResult("" + rand1);
            this._secondWindow.image = assets.getResult("" + rand2);
            createjs.Sound.play("ping");
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map