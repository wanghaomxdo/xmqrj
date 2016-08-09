/**
 * Created by Administrator on 2015/4/11.
 */
var ShallGamePanel = (function (_super) {
    __extends(ShallGamePanel, _super);
    function ShallGamePanel(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        this.texture = textures.getTexture('share');
        this.width = w;
        this.x = 0;
        this.y = 0;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        root.addChild(this);
    }
    var d = __define,c=ShallGamePanel,p=c.prototype;
    p.startGame = function () {
        this.parent.removeChild(this);
    };
    return ShallGamePanel;
}(egret.Bitmap));
egret.registerClass(ShallGamePanel,'ShallGamePanel');
