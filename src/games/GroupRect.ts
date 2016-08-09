class GroupRect extends egret.Sprite{
	private _rects:Array<Rect>;
	private _currentBlackRectIndex:number=0;
	private _currentWhiteRectIndex:number=0;
	public _currentRow:number = 0;

	public constructor(){
		super();
		this.createRects();
	}

	private createRects(){
		this._rects=[];
		for(var i = 0;i<4;i++){
			var rect:Rect=new Rect();
			this._rects.push(rect);
			rect.x=rect.width*i;
			this.addChild(rect);
			rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickRect,this);
		}
	}

	private onClickRect(evt:egret.TouchEvent){
        if(this._currentRow == (Data.getRectRow() - 2)) {
            evt.target.onRectClick();
			//evt.target.visible = false;
            if (evt.target.type == RectType.NONCLICKABLE) {
                this.dispatchEventWith("gameOver");
            } else {
                this.dispatchEventWith("clickRight");
            }
        }
	}

	public createBlackRect(){
		//this.init();
		var n:number =Math.random();
		if(n>=0&&n<0.25){
			this._currentBlackRectIndex=0;
		}else if(n>=0.25&&n<0.5){
			this._currentBlackRectIndex=1;
		}else if(n>=0.5&&n<0.75){
			this._currentBlackRectIndex=2;
		}else{
			this._currentBlackRectIndex=3;
		}
		this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
		var num:number = this._currentBlackRectIndex;
		if(Math.floor(Math.random()*3) == 0)
		{
			if(num == 3)
			{
				this._rects[num-Math.floor(Math.random()*3+1)].type=RectType.NONCLICKABLE;
			} else if(num == 0)
			{
				this._rects[num+Math.floor(Math.random()*3+1)].type=RectType.NONCLICKABLE;
			}else if(num == 1)
			{
				this._rects[num+Math.floor(Math.random()*2+1)].type=RectType.NONCLICKABLE;
			}else
			{
				this._rects[num-Math.floor(Math.random()*2+1)].type=RectType.NONCLICKABLE;
			}
		}

	}

	public init(){
		for(var i=0;i<4;i++){
			this._rects[i].type=RectType.NONCLICKABLE;
		}
	}

	public move(){
		this._currentRow++;
		if(this._currentRow==Data.getRectRow()){
			this._currentRow=0;
		}
		this.y=this._currentRow*Data.getRectWidth();
	}

}