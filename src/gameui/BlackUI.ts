/**
 * Created by Administrator on 2015/4/14.
 */
class BlackUI extends egret.Bitmap
{

    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        var Arr = ["0","1","2","3"];
        var num = Math.floor(Math.random() * Arr.length + 1)-1;
        var lovers:string = "lovers_"+num;
        //console.log( lovers );
        this.texture = textures.getTexture(lovers);
        this.width = w/4;
        this.height = w/4;
        root.addChild(this);

    }

}