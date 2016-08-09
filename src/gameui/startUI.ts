/**
 * Created by Administrator on 2015/4/11.
 */
class startUI extends egret.Bitmap
{

    public constructor(root:egret.DisplayObjectContainer,textures:egret.SpriteSheet)
    {
        super();
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.texture = textures.getTexture('star_page');
        this.width = w;
        this.height =h;
        root.addChild(this);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}