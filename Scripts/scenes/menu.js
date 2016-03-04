/*
 *******************************************************************************
 * Source file name : menu.ts                                                  *
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
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            this._setupBackground("whiteBG");
            this._fadeIn(500);
            //Add Menu Label
            this._menuLabel = new objects.Label("Dice Roller", "60px Arial", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            this._fadeOut(500, function () {
                // Switch to the mainGame Scene
                scene = config.Scene.PLAY;
                changeScene();
            });
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map