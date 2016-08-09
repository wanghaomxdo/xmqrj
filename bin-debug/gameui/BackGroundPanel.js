/**
 * Created by Administrator on 2015/4/11.
 */
var BackGroundPanel = (function (_super) {
    __extends(BackGroundPanel, _super);
    function BackGroundPanel(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.texture = textures.getTexture('game_bg');
        this.width = w;
        this.height = h;
        root.addChild(this);
    }
    var d = __define,c=BackGroundPanel,p=c.prototype;
    return BackGroundPanel;
}(egret.Bitmap));
egret.registerClass(BackGroundPanel,'BackGroundPanel');
