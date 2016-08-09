/**
 * Created by Administrator on 2015/4/11.
 */
class ShallGamePanel extends egret.Bitmap
{

    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;

        this.texture = textures.getTexture('share');
        this.width = w;
        this.x = 0;
        this.y = 0;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        root.addChild(this);
    }

    private startGame(){
        this.parent.removeChild(this);
    }
}