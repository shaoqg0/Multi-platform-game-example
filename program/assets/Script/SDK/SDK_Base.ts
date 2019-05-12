



//
//  其它平台必须实现的接口

export default abstract class SDK_Base {

    abstract init();

    /**
     * 保存数据
     */
    abstract saveData(key: string | string[], value: string | number | boolean);

    /**
     * 载入数据 ,返回promise, 
     */
    abstract async loadData(keys: string | string[], callBack: (data: {}) => void): Promise<{}>;

    /**
     * 移除指定key值
     */
    abstract removeData(keys: string | string[]);

    /**
     * 创建Image对象，并返回
     */
    abstract createImage();




}