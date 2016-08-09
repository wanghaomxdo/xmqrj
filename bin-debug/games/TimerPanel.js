var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        _super.call(this);
        this._num = 20;
        this._timers = 20;
        this._numb = 0;
        this.draw();
        this.createTimer();
    }
    var d = __define,c=TimerPanel,p=c.prototype;
    p.draw = function () {
        var w = egret.MainContext.instance.stage.stageWidth;
        this.graphics.beginFill(0x000000);
        this.graphics.drawRect(0, 0, w, 60);
        this.graphics.endFill();
        this._TitleUI = new TitleUI(this, RES.getRes("game_json"));
        this._PhotoUI = new PhotoUI(this, RES.getRes("game_json"));
        this.txt = new egret.TextField();
        //this.txt.width= w;
        this.txt.y = 20;
        this.txt.x = w - 200;
        this.txt.textColor = 0xff0000;
        //this.txt.textAlign=egret.HorizontalAlign.CENTER;
        this.txt.text = "20'00''";
        this.addChild(this.txt);
        this.txt1 = new egret.TextField();
        this.txt1.x = 120;
        this.txt1.y = 20;
        this.txt1.textColor = 0xff0000;
        this.txt1.text = " = 0";
        this.addChild(this.txt1);
    };
    p.createTimer = function () {
        this._timer = new egret.Timer(1000, this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimercom, this);
    };
    p.onTimer = function () {
        this._timers -= 1;
        this.txt.text = this._timers + "'00''";
    };
    p.num = function () {
        this._numb += 1;
        this.txt1.text = " = " + this._numb;
    };
    p.num1 = function () {
        this._numb = 0;
        this.txt1.text = " = 0";
    };
    p.onTimercom = function () {
        this.txt.text = "00'00''";
        this.dispatchEventWith("gameOver");
    };
    p.start = function () {
        this.txt.text = "20'00''";
        this._timers = 20;
        this._timer.reset();
        this._timer.start();
    };
    p.stop = function () {
        this._timer.stop();
    };
    return TimerPanel;
}(egret.Sprite));
egret.registerClass(TimerPanel,'TimerPanel');
