/*
 *******************************************************************************
 * Source file name : game.ts                                                  *
 * Author's name : Duc Minh Tran (300771859)                                   *
 * Last Modified by : Duc Minh Tran (300771859)                                *
 * Last Modified date : March 2016                                             *
 * Program description : This web game, by using create js, is kind of         *
 *                     simulation of a dice roller. User can click spin button *
 * and receive different dices everytime                                       *
 * Revision History : 1                                                        *
 *******************************************************************************
*/
/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var play;
var end;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "StartOverButton", src: "../../Assets/images/StartOverButton.png" },
    { id: "RollButton", src: "../../Assets/images/roll.png" },
    { id: "Blank", src: "../../Assets/images/blank.png" },
    { id: "1", src: "../../Assets/images/1.jpg" },
    { id: "2", src: "../../Assets/images/2.jpg" },
    { id: "3", src: "../../Assets/images/3.jpg" },
    { id: "4", src: "../../Assets/images/4.jpg" },
    { id: "5", src: "../../Assets/images/5.jpg" },
    { id: "6", src: "../../Assets/images/6.jpg" },
    { id: "ping", src: "../../Assets/sound/Ping.mp3" },
    { id: "whiteBG", src: "../../Assets/images/whiteBG.jpg" },
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map