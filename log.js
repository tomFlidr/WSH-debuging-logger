// debug log
var log = function (obj, level) {
	var str = '';
	var newLine = '\r\n';
	var realType = String(Object.prototype.toString.apply(obj)).replace('[object ','').replace(']','');
	if (!level) level = 0;
	if (typeof(obj) == 'undefined' && realType == 'Object') {
		str += 'undefined [' + realType + ']';
		return str;
	} else if (obj === null && realType == 'Object' && typeof(obj) == 'object') {
		str += 'null [' + realType + ']';
	} else if (realType == 'Object' || realType == 'Array') {
		str = '[' + realType + ']' + newLine;
		var indent = '     ';
		for (var i = 0; i < level; i += 1) {
			indent += '     ';
		}
		try {
			for (var key in obj) {
				if (realType == 'Array' && (key == 'forEach' || key == 'indexOf')) continue;
				if (/[^0-9]/gi.test(key)) {
					var strKey = '"' + key + '"';
				} else {
					var strKey = "'" + key + "'";
				}
				str += indent + strKey + ' => ' + log(obj[key], level + 1) + newLine;
			}
		} catch (e) {
			WScript.Echo(e.message);
		}
	} else {
		if (realType == 'String') {
			str += '"' + String(obj) + '" [' + realType + ']';
		} else if (realType == 'Boolean') {
			str += String(obj).toUpperCase() + ' [' + realType + ']';
		} else if (realType == 'Function') {
			str += '[Function]';
		} else {
			str += String(obj) + ' [' + realType + ']';
		}
	}
	if (level === 0) {
		WScript.Echo(str);
	} else {
		return str;
	}
};
