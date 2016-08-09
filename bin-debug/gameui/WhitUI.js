/**
 * Created by Administrator on 2015/4/14.
 */
var WhitUI = (function (_super) {
    __extends(WhitUI, _super);
    function WhitUI(root, textures) {
        _super.call(this);
        var w = egret.MainContext.instance.stage.stageWidth;
        var Arr = ["0", "1", "2", "3"];
        var num = Math.floor(Math.random() * Arr.length + 1) - 1;
        var lovers = "single_" + num;
        //console.log( lovers );
        this.texture = textures.getTexture(lovers);
        this.height = w / 4;
        this.width = w / 5.5;
        root.addChild(this);
    }
    var d = __define,c=WhitUI,p=c.prototype;
    return WhitUI;
}(egret.Bitmap));
egret.registerClass(WhitUI,'WhitUI');
