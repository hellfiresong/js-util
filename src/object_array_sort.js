/**
 * JS 对象数组排序算法，一般配合JS原生sort排序函数使用
 * @author  hellfiresong
 * @date    2015/10/18
 */
function by(name){
	return function(o, p){
		var a, b;
		if (typeof o === "object" && typeof p === "object" && o && p) {
			a = o[name];
			b = p[name];
			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		}
		else {
			throw ("error");
		}
	}
}

//Test case
console.log([{'name': 'FengLiu Cheng'},{'name': 'Cheng Liufeng'}, {'name': 'Liufeng Cheng'}].sort(by('name')));
