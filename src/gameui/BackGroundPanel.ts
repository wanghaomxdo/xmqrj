/**
 * Created by Administrator on 2015/4/11.
 */
class BackGroundPanel extends egret.Bitmap
{
    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.texture = textures.getTexture('game_bg');
        this.width = w;
        this.height =h;
        root.addChild(this);
    }

}