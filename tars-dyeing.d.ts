export interface DyeingObject {
  dyeing: boolean,
  key?: string,
  args?: any
}

/**
 * 获得染色对象
 * @param dyeing 是否需要染色
 * @param key 染色附加信息 `key`
 * @param args 程序的附加参数
 */
export function gen (dyeing: boolean, key?: string, args?: any): DyeingObject

/** 判断一个传入的对象是否是染色对象 */
export function is (obj: DyeingObject): boolean