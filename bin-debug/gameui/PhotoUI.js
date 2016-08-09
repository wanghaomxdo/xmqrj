/**
 * Created by Administrator on 2015/4/15.
 */
var PhotoUI = (function (_super) {
    __extends(PhotoUI, _super);
    function PhotoUI(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        this.texture = textures.getTexture("photo_bg");
        this.width = 90;
        this.height = 60;
        this.y = 0;
        this.x = w - 90;
        root.addChild(this);
    }
    var d = __define,c=PhotoUI,p=c.prototype;
    return PhotoUI;
}(egret.Bitmap));
egret.registerClass(PhotoUI,'PhotoUI');
