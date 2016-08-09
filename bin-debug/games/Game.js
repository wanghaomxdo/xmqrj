var Game = (function () {
    function Game(root) {
        this._root = root;
        this.createGroupsRect();
        this.createTimer();
        this.startGame();
    }
    var d = __define,c=Game,p=c.prototype;
    p.createGroupsRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();
        var groupRect;
        for (var i = 0; i < this._row; i++) {
            groupRect = new GroupRect();
            groupRect.addEventListener("gameOver", this.gameOver, this);
            groupRect.addEventListener("clickRight", this.nextRow, this);
            this._rectGroups.push(groupRect);
            groupRect.y = Data.getRectWidth() * i;
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    };
    p.gameOver = function () {
        this._timerPanel.stop();
        if (!this.gameOverPanel) {
            this.gameOverPanel = new GameOverPanel();
            this.gameOverPanel.addEventListener("startGame", this.initGame, this);
        }
        this._root.addChild(this.gameOverPanel);
    };
    p.nextRow = function () {
        this._timerPanel.num();
        for (var i = 0; i < this._row; i++) {
            var tw = egret.Tween.get(this._rectGroups[i]).to({ y: this._rectGroups[i].y + 120 }, 200);
            this._rectGroups[i].move();
        }
        Data.score++;
    };
    p.createTimer = function () {
        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener("gameOver", this.gameOver, this);
        this._root.addChild(this._timerPanel);
    };
    p.initGame = function () {
        this._timerPanel.start();
        this._timerPanel.num1();
        Data.score = 0;
        this._root.removeChild(this._rectRoot);
        this.createGroupsRect();
        this.createTimer();
        this.startGame();
    };
    p.startGame = function () {
        /*if(Data.score != 0)
        {
            this._timerPanel.start();
            this._timerPanel.num1();
            Data.score = 0;
            return Game;
        }*/
        //Data.score = 0;
        for (var i = 0; i < this._row; i++) {
            if (i != (this._row - 1)) {
                //this._rectGroups[i].init();
                this._rectGroups[i].y = Data.getRectWidth() * i;
                this._rectGroups[i]._currentRow = i;
                this._rectGroups[i].createBlackRect();
            }
        }
        this._timerPanel.start();
    };
    return Game;
}());
egret.registerClass(Game,'Game');
