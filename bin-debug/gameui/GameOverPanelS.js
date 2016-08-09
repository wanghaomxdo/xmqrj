/**
 * Created by Administrator on 2015/4/11.
 */
var GameOverPanelS = (function (_super) {
    __extends(GameOverPanelS, _super);
    function GameOverPanelS(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.texture = textures.getTexture('score_bg');
        this.width = w;
        this.height = h;
        root.addChild(this);
        /*//更多游戏
        var morGame:egret.Sprite = new egret.Sprite;
        var morGageText:egret.TextField = new egret.TextField();
        morGame.graphics.beginFill(0xFCAD26,1);
        morGame.graphics.drawRoundRect(w*0.5,h-40,w,60,20);
        morGame.graphics.endFill();
        morGame.anchorX = 0.5;
        morGame.anchorY = 0.5;
        morGame.touchEnabled = true;  //开启触摸

        morGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.morGame, this);  //点击按钮跳转
        root.addChild(morGame);

        morGageText.text = "更多游戏";
        morGageText.anchorX = 0.5;
        morGageText.anchorY = 0.5;
        morGageText.x = w*0.5;
        morGageText.y = h-40;
        morGageText.textColor = 0xFFFFFF;
        root.addChild(morGageText);*/
    }
    var d = __define,c=GameOverPanelS,p=c.prototype;
    p.morGame = function () {
        window.location.href = "http://7online.sinaapp.com/index.php";
    };
    return GameOverPanelS;
}(egret.Bitmap));
egret.registerClass(GameOverPanelS,'GameOverPanelS');
