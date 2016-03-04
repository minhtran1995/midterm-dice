// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _rand1Lbl: objects.Label;
        private _rand2Lbl: objects.Label;

        private _rollButton: objects.Button;

        private _firstWindow: createjs.Bitmap;
        private _secondWindow: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add rand Label
            this._rand1Lbl = new objects.Label(
                " ", "20px Arial",
                "#000000",
                config.Screen.CENTER_X-75, config.Screen.CENTER_Y);
            this.addChild(this._rand1Lbl);
            
            //Add rand Label
            this._rand2Lbl = new objects.Label(
                " ", "20px Arial",
                "#000000",
                config.Screen.CENTER_X+65, config.Screen.CENTER_Y);
            this.addChild(this._rand2Lbl);


            // add the Start button to the MENU scene
            this._rollButton = new objects.Button(
                "RollButton",
                config.Screen.CENTER_X+30,
                config.Screen.CENTER_Y + 100);
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
            this._secondWindow.x = config.Screen.CENTER_X+20 ;
            this._secondWindow.y = 100;
            this.addChild(this._secondWindow);
            
            
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        
        
        private _rollButtonClick(event: createjs.MouseEvent) {
            var rand1 = Math.round(Math.random() * 5) + 1;
            var rand2 = Math.round(Math.random() * 5) + 1;


            console.log(rand1);
            console.log(rand2);
            
            this._rand1Lbl.text = ""+rand1;
            this._rand2Lbl.text = ""+rand2;

            this._firstWindow.image = assets.getResult("" + rand1);
            this._secondWindow.image = assets.getResult("" + rand2);
            
            createjs.Sound.play("ping");
        }
    }
}