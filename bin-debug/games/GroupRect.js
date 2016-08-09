var GroupRect = (function (_super) {
    __extends(GroupRect, _super);
    function GroupRect() {
        _super.call(this);
        this._currentBlackRectIndex = 0;
        this._currentWhiteRectIndex = 0;
        this._currentRow = 0;
        this.createRects();
    }
    var d = __define,c=GroupRect,p=c.prototype;
    p.createRects = function () {
        this._rects = [];
        for (var i = 0; i < 4; i++) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
        }
    };
    p.onClickRect = function (evt) {
        if (this._currentRow == (Data.getRectRow() - 2)) {
            evt.target.onRectClick();
            //evt.target.visible = false;
            if (evt.target.type == RectType.NONCLICKABLE) {
                this.dispatchEventWith("gameOver");
            }
            else {
                this.dispatchEventWith("clickRight");
            }
        }
    };
    p.createBlackRect = function () {
        //this.init();
        var n = Math.random();
        if (n >= 0 && n < 0.25) {
            this._currentBlackRectIndex = 0;
        }
        else if (n >= 0.25 && n < 0.5) {
            this._currentBlackRectIndex = 1;
        }
        else if (n >= 0.5 && n < 0.75) {
            this._currentBlackRectIndex = 2;
        }
        else {
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
        var num = this._currentBlackRectIndex;
        if (Math.floor(Math.random() * 3) == 0) {
            if (num == 3) {
                this._rects[num - Math.floor(Math.random() * 3 + 1)].type = RectType.NONCLICKABLE;
            }
            else if (num == 0) {
                this._rects[num + Math.floor(Math.random() * 3 + 1)].type = RectType.NONCLICKABLE;
            }
            else if (num == 1) {
                this._rects[num + Math.floor(Math.random() * 2 + 1)].type = RectType.NONCLICKABLE;
            }
            else {
                this._rects[num - Math.floor(Math.random() * 2 + 1)].type = RectType.NONCLICKABLE;
            }
        }
    };
    p.init = function () {
        for (var i = 0; i < 4; i++) {
            this._rects[i].type = RectType.NONCLICKABLE;
        }
    };
    p.move = function () {
        this._currentRow++;
        if (this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
        }
        this.y = this._currentRow * Data.getRectWidth();
    };
    return GroupRect;
}(egret.Sprite));
egret.registerClass(GroupRect,'GroupRect');
