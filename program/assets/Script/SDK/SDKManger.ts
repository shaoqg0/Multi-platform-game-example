//### 所有sdk入口，最优先调用，使用需要等待SDK初始化全部完成后才能执行其它操作


export enum PlatForm {
    None = "None",
    Web = "Web",            //网页版
    WeChat = "WeChat",      //微信小游戏
    FaceBook = "FaceBock",  //facebook 游戏
    BaiDu = "BaiDu",        //百度小游戏
    DouYin = "DouYing",     //抖音小游戏
    HuaWei = "Huawei"       //华为快游戏


}


const { ccclass, property } = cc._decorator;

@ccclass
export default class SDKManager extends cc.Component {

    static instance: SDKManager = null;

    private _currentSDK  = null;

    onLoad() {
        SDKManager.instance = this;

    }


    init() {
        //获取当前的SDK 平台，默认为网页版本



    }


}
