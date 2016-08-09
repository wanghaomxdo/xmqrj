/**
 * Created by Administrator on 2015/4/14.
 */
class WhitUI extends egret.Bitmap
{

    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        var Arr = ["0","1","2","3"];
        var num = Math.floor(Math.random() * Arr.length + 1)-1;
        var lovers:string = "single_"+num;
        //console.log( lovers );
        this.texture = textures.getTexture(lovers);
        this.height = w/4;
        this.width = w/5.5;
        root.addChild(this);

    }

}