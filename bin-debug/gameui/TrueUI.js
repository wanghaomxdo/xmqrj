/**
 * Created by Administrator on 2015/4/14.
 */
var TrueUI = (function (_super) {
    __extends(TrueUI, _super);
    function TrueUI(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        this.texture = textures.getTexture("blood");
        this.width = w / 4;
        this.height = w / 6;
        this.y = 30;
        root.addChild(this);
    }
    var d = __define,c=TrueUI,p=c.prototype;
    return TrueUI;
}(egret.Bitmap));
egret.registerClass(TrueUI,'TrueUI');
