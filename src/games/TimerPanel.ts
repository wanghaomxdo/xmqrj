class TimerPanel extends egret.Sprite{
	
	private txt:egret.TextField;
	private txt1:egret.TextField;
	private _timer:egret.Timer;
	private _TitleUI:TitleUI;
	private _PhotoUI:PhotoUI;
	private _num:number=20;
	private _timers:number=20;
	public constructor(){
		super();
		this.draw();
		this.createTimer();
	}

	private draw(){
		var w = egret.MainContext.instance.stage.stageWidth;

		this.graphics.beginFill(0x000000);
        this.graphics.drawRect(0,0,w,60);
        this.graphics.endFill();

		this._TitleUI = new TitleUI(this,RES.getRes("game_json"));
		this._PhotoUI = new PhotoUI(this,RES.getRes("game_json"));

		this.txt=new egret.TextField();
		//this.txt.width= w;
		this.txt.y=20;
		this.txt.x=w-200;
		this.txt.textColor=0xff0000;
		//this.txt.textAlign=egret.HorizontalAlign.CENTER;
		this.txt.text="20'00''";
		this.addChild(this.txt);

		this.txt1=new egret.TextField();
		this.txt1.x = 120;
		this.txt1.y = 20;
		this.txt1.textColor=0xff0000;
		this.txt1.text=" = 0";
		this.addChild(this.txt1);
	}

	private createTimer(){
		this._timer=new egret.Timer(1000,this._num);
		this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
		this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimercom,this);
	}

	private onTimer(){
		this._timers-=1;
		this.txt.text = this._timers+"'00''";
	}

	public _numb:number = 0;
	public num()
	{
		this._numb+=1;
		this.txt1.text = " = "+this._numb;
	}
	public num1()
	{
		this._numb = 0;
		this.txt1.text = " = 0";
	}

	private onTimercom(){
		this.txt.text="00'00''";
		this.dispatchEventWith("gameOver");
	}

	public start(){
		this.txt.text="20'00''";
		this._timers=20;
		this._timer.reset();
		this._timer.start();
	}

	public stop(){
		this._timer.stop();
	}

}