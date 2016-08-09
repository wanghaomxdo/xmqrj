class Data{
	private static _rectWidth:number = 0;
	public static score:number = 0;
	private static _rectRow:number= 0 ;

	public static getRectWidth():number{
		if(Data._rectWidth==0){
			Data._rectWidth = egret.MainContext.instance.stage.stageWidth/4;
		}
		return Data._rectWidth;
	}

	public static getRectRow():number{
		if(Data._rectRow==0){
			Data._rectRow = Math.ceil(egret.MainContext.instance.stage.stageHeight/Data.getRectWidth());
		}
		return Data._rectWidth;
	}

	public static getStageHeight():number{
		return egret.MainContext.instance.stage.stageHeight
	}
}