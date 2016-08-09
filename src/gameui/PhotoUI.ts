/**
 * Created by Administrator on 2015/4/15.
 */
class PhotoUI extends egret.Bitmap
{

    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        this.texture = textures.getTexture("photo_bg");
        this.width = 90;
        this.height = 60;
        this.y = 0;
        this.x = w - 90;
        root.addChild(this);
    }

}