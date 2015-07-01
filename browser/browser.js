(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.querystring = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
			if (v || '' === v || 0 === v) {
				ret.push(encode(k) + eq + encode(v))
			}
		}
	}
	return ret.join(sep)
}

},{}]},{},[1])(1)
});