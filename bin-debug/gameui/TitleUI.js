/**
 * Created by Administrator on 2015/4/15.
 */
var TitleUI = (function (_super) {
    __extends(TitleUI, _super);
    function TitleUI(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        this.texture = textures.getTexture("title_bg");
        this.width = 70;
        this.height = 50;
        this.y = 5;
        this.x = 50;
        root.addChild(this);
    }
    var d = __define,c=TitleUI,p=c.prototype;
    return TitleUI;
}(egret.Bitmap));
egret.registerClass(TitleUI,'TitleUI');
