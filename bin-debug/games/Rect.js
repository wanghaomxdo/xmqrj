var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.call(this);
        this._colors = [0x000000, 0xffffff, 0xff0000, 0x0000ff];
        this._currentColor = 1;
        this._type = RectType.NONCLICKABLE;
        this.touchEnabled = true;
        this.draw();
    }
    var d = __define,c=Rect,p=c.prototype;
    p.draw = function () {
        this.width = Data.getRectWidth();
        this.height = Data.getRectWidth();
        //this.graphics.lineStyle(1,0x000000);
        //this.graphics.beginFill(this._colors[this._currentColor]);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.graphics.endFill();
    };
    d(p, "type"
        ,function () {
            return this._type;
        }
        ,function (val) {
            this._type = val;
            if (this._type == RectType.CLICKABLE) {
                //this._currentColor=0;
                this._BlackUI = new BlackUI(this, RES.getRes("game_json"));
            }
            else if (this._type == RectType.NONCLICKABLE) {
                //this._currentColor=1;
                this._WhiteUI = new WhitUI(this, RES.getRes("game_json"));
            }
            this.draw();
        }
    );
    p.onRectClick = function () {
        if (this._type == RectType.CLICKABLE) {
            //this._currentColor=3;
            this.removeChild(this._BlackUI);
            this._TrueUI = new TrueUI(this, RES.getRes("game_json"));
        }
        else if (this._type == RectType.NONCLICKABLE) {
            //this._currentColor=2;
            this.removeChild(this._WhiteUI);
            this._TrueUI = new TrueUI(this, RES.getRes("game_json"));
        }
        this.draw();
    };
    return Rect;
}(egret.Sprite));
egret.registerClass(Rect,'Rect');
