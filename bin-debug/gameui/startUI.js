/**
 * Created by Administrator on 2015/4/11.
 */
var startUI = (function (_super) {
    __extends(startUI, _super);
    function startUI(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.texture = textures.getTexture('star_page');
        this.width = w;
        this.height = h;
        root.addChild(this);
    }
    var d = __define,c=startUI,p=c.prototype;
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return startUI;
}(egret.Bitmap));
egret.registerClass(startUI,'startUI');
