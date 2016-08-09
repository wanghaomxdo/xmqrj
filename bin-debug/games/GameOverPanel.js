var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        _super.call(this);
        this.draw();
        this.addEventListener(egret.Event.ADDED, this.showText, this);
    }
    var d = __define,c=GameOverPanel,p=c.prototype;
    p.draw = function () {
        var h = Data.getStageHeight();
        var w = egret.MainContext.instance.stage.stageWidth;
        this.graphics.beginFill(0x111111, 1);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
        this._GameOverPanelS = new GameOverPanelS(this, RES.getRes("game_json"));
        this.txt = new egret.TextField();
        this.txt.width = w;
        this.txt.y = 100;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        var btnz = this.createBitmapByName("game_json.againbt1");
        var btnf = this.createBitmapByName("game_json.share1");
        btnz.x = (w - btnz.width) / 2;
        btnf.x = (w - btnf.width) / 2;
        btnz.y = h - btnz.height * 2 - 30;
        btnf.y = h - btnf.height - 25;
        this.addChild(btnf);
        this.addChild(btnz);
        btnf.touchEnabled = true;
        btnz.touchEnabled = true;
        btnz.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        btnf.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareGame, this);
    };
    p.retunsGame = function () {
        window.location.href = "/index.php?action=jingpinyxIn";
    };
    p.showText = function () {
        this.txt.text = "你摁死了" + Data.score + "对情侣。\n真是太厉害啦。\n继续狂欢吧！";
    };
    p.startGame = function () {
        this.parent.removeChild(this);
        //history.go(0);
        Data.score = 1;
        this.dispatchEventWith("startGame");
    };
    p.shareGame = function () {
        this._ShallGamePanel = new ShallGamePanel(this, RES.getRes("game_json"));
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return GameOverPanel;
}(egret.Sprite));
egret.registerClass(GameOverPanel,'GameOverPanel');
