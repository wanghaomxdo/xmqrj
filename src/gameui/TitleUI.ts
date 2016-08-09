/**
 * Created by Administrator on 2015/4/15.
 */
class TitleUI extends egret.Bitmap
{

    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        this.texture = textures.getTexture("title_bg");
        this.width = 70;
        this.height = 50;
        this.y = 5;
        this.x = 50;
        root.addChild(this);
    }

}