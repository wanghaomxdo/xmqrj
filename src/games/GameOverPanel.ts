class GameOverPanel extends egret.Sprite{
	public constructor(){
		super();
		this.draw();
		this.addEventListener(egret.Event.ADDED,this.showText,this);
	}

	private txt:egret.TextField;
	private txt1:egret.TextField;
	private txt2:egret.TextField;
	private txt3:egret.TextField;
	private txt4:egret.TextField;
    private _GameOverPanelS:GameOverPanelS;
	private _ShallGamePanel:ShallGamePanel;

	public draw(){
		var h = Data.getStageHeight();
		var w = egret.MainContext.instance.stage.stageWidth;
		this.graphics.beginFill(0x111111,1);
		this.graphics.drawRect(0,0,w,h);
		this.graphics.endFill();
        this._GameOverPanelS = new GameOverPanelS(this,RES.getRes("game_json"));

		this.txt=new egret.TextField();
		this.txt.width = w;
		this.txt.y=100;
		this.txt.textColor = 0xff0000;
		this.txt.textAlign=egret.HorizontalAlign.CENTER;
		this.addChild(this.txt);

		var w = egret.MainContext.instance.stage.stageWidth;
		var h = egret.MainContext.instance.stage.stageHeight;
		var btnz = this.createBitmapByName("game_json.againbt1");
		var btnf = this.createBitmapByName("game_json.share1");
		btnz.x = (w - btnz.width)/2;
		btnf.x = (w - btnf.width)/2;
		btnz.y = h - btnz.height*2 - 30;
		btnf.y = h - btnf.height - 25;
		this.addChild(btnf);
		this.addChild(btnz);
		btnf.touchEnabled = true;
		btnz.touchEnabled = true;
		btnz.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
		btnf.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shareGame,this);
	}

	private retunsGame():void
	{
		window.location.href = "/index.php?action=jingpinyxIn";
	}

	private showText(){
		this.txt.text="你摁死了"+Data.score+"对情侣。\n真是太厉害啦。\n继续狂欢吧！";
		}

	private startGame(){
		this.parent.removeChild(this);
		//history.go(0);
		Data.score = 1;
		this.dispatchEventWith("startGame");
	}

	private shareGame(){

		this._ShallGamePanel = new ShallGamePanel(this,RES.getRes("game_json"));

	}
	/**
	 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
	 */
	private createBitmapByName(name:string):egret.Bitmap {
		var result:egret.Bitmap = new egret.Bitmap();
		var texture:egret.Texture = RES.getRes(name);
		result.texture = texture;
		return result;
	}
}