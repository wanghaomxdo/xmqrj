/**
 * Created by Administrator on 2015/4/11.
 */
class GameOverPanelS extends egret.Bitmap
{
    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.texture = textures.getTexture('score_bg');
        this.width = w;
        this.height =h;
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

    private morGame():void
    {
        window.location.href = "http://7online.sinaapp.com/index.php";
    }


}