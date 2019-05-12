import SDK_Base from "./SDK_Base";

let WeChat = wx;

export default class SDK_WX extends SDK_Base {

    /**
     * 用于分享的画布
     */
    shareCanvas = null;

    /**
     * 
     */

    init(){
        let that = this;
        this.shareCanvas = WeChat.createCanvas();


        WeChat.onShow(() => {




        });


    };


    async loadData(keyOrKeys: string | string[], callback: (data: {}) => void) {
        return new Promise((resolve, reject) => {
            let data = {};
            if (Array.isArray(keyOrKeys)) {
                for (let i = 0; i < keyOrKeys.length; ++i) {
                    data[keyOrKeys[i]] = WeChat.getStorageSync(keyOrKeys[i]);
                }
                if (callback) {
                    resolve(data);
                    callback(data);
                }
            } else {
                data[keyOrKeys] = WeChat.getStorageSync(keyOrKeys);
                if (callback) {
                    resolve(data);
                    callback(data);
                }
            }
        });
    }

    saveData(key: string, value: string, success: Function = null, fail: Function = null) {
        return new Promise((resolve, reject) => {
            let saveObj = {
                key: key,
                data: value,
                success: function () {
                    success && success();
                    // console.log("save data success : " + "{" + "key = " + key + " , value = " + value + "}");
                },
                fail: function () {
                    fail && fail();
                    // console.log("save data fail : " + "{" + "key = " + key + " , value = " + value + "}");
                }
            };
            WeChat.setStorage(saveObj);
        });
    }

    removeData(keyOrKeys:string | string[]){
        if (keyOrKeys) {
            let keys = [];
            if (Array.isArray(keyOrKeys))
                for (let i = 0; i < keyOrKeys.length; ++i)
                    keys.push(keyOrKeys[i]);
            else
                keys.push(keyOrKeys);
            for (let i = 0; i < keys.length; ++i) {
                let currentKey = keys[i];

                let saveObj = {
                    key: currentKey,
                    data: null,
                    success: function () {
                    },
                    fail: function () {
                    }
                };
                WeChat.setStorage(saveObj);
            }
        } else {
            console.error("You can not clear all the savedata via SDK!");
        }
    }

    createImage(){
        return WeChat .creatImage();
    };


}
