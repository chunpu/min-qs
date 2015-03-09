exports.parse = function(qs, sep, eq) {
	qs += ''
	sep = sep || '&'
	eq = eq || '='
	var decode = exports.decode || decodeURIComponent

	var ret = {}
	qs = qs.split(sep)
	for (var i = 0; i < qs.length; i++) {
		var arr = qs[i].split(eq)
		if (2 == arr.length) {
			var k = arr[0]
			var v = arr[1]
			if (k) {
				try {
					k = decode(k)
					v = decode(v)
					ret[k] = v
				} catch (ignore) {}
			}
		}
	}
	return ret
}

exports.stringify = function(obj, sep, eq) {
	obj = obj || {}
	sep = sep || '&'
	eq = eq || '='
	var encode = exports.encode || encodeURIComponent

	var ret = []
	for (var k in obj) {
		if (Object.hasOwnProperty.call(obj, k)) {
			var v = obj[k]
			if (v || '' == v || 0 == v) {
				ret.push(encode(k) + eq + encode(v))
			}
		}
	}
	return ret.join(sep)
}
