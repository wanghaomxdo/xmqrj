class Rect extends egret.Sprite{

	private _colors:Array<number>=[0x000000,0xffffff,0xff0000,0x0000ff];
	private _currentColor:number = 1;
	private _type:string=RectType.NONCLICKABLE;
	public constructor(){
		super();
		this.touchEnabled=true;
		this.draw();
	}
	private _TrueUI:TrueUI;
	private _BlackUI:BlackUI;
	private _WhiteUI:WhitUI;
	public draw(){
		this.width = Data.getRectWidth();
		this.height = Data.getRectWidth();
		//this.graphics.lineStyle(1,0x000000);
		//this.graphics.beginFill(this._colors[this._currentColor]);
		this.graphics.drawRect(0,0,this.width,this.height);
		this.graphics.endFill();
	}

	public get type():string{
		return this._type;
	}

	public set type(val:string){

			this._type = val;
			if(this._type == RectType.CLICKABLE){
				//this._currentColor=0;
				this._BlackUI = new BlackUI(this,RES.getRes("game_json"));

			}else if(this._type == RectType.NONCLICKABLE){
				//this._currentColor=1;
				this._WhiteUI = new WhitUI(this,RES.getRes("game_json"));
			}
			this.draw();
		
	}

	public onRectClick(){
		if(this._type == RectType.CLICKABLE){
			//this._currentColor=3;
			this.removeChild(this._BlackUI);
			this._TrueUI = new TrueUI(this,RES.getRes("game_json"));
		/*	var idTimeout:number = egret.setTimeout( function( arg ){
			 this.removeChild(this._TrueUI);
			 }, this, 1000, "egret"
			 );*/
		}else if(this._type == RectType.NONCLICKABLE){
			//this._currentColor=2;
			this.removeChild(this._WhiteUI);
			this._TrueUI = new TrueUI(this,RES.getRes("game_json"));
/*			var idTimeout:number = egret.setTimeout( function( arg ){
					this.removeChild(this._TrueUI);
				}, this, 1000, "egret"
			);*/
		}
		this.draw();
	}
}