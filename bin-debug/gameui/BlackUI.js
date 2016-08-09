/**
 * Created by Administrator on 2015/4/14.
 */
var BlackUI = (function (_super) {
    __extends(BlackUI, _super);
    function BlackUI(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        var Arr = ["0", "1", "2", "3"];
        var num = Math.floor(Math.random() * Arr.length + 1) - 1;
        var lovers = "lovers_" + num;
        //console.log( lovers );
        this.texture = textures.getTexture(lovers);
        this.width = w / 4;
        this.height = w / 4;
        root.addChild(this);
    }
    var d = __define,c=BlackUI,p=c.prototype;
    return BlackUI;
}(egret.Bitmap));
egret.registerClass(BlackUI,'BlackUI');
