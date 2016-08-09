/**
 * Created by Administrator on 2015/4/14.
 */
class TrueUI extends egret.Bitmap
{

    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        this.texture = textures.getTexture("blood");
        this.width = w/4;
        this.height = w/6;
        this.y = 30;
        root.addChild(this);

    }

}