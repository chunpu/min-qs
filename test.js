var assert = require('assert')
var qs = require('./')


describe('parse', function() {
console.log(location.href)
	it('should return object', function() {
		var ret = qs.parse('a=1&b=foo')
		assert.deepEqual(ret, {
			a: 1,
			b: 'foo'
		})
	})

	it('should decode', function() {
		var ret = qs.parse('%23=%20&b=%23%24')
		assert.deepEqual(ret, {
			'#': ' ',
			b: '#$'
		})
	})

	it('can custom seq and eq', function() {
		var ret = qs.parse('a:1;b:2', ';', ':')
		assert.deepEqual(ret, {
			a: 1,
			b: 2
		})
	})

	it('return empty obj when meet shit', function() {
		var invalid = [undefined, null, function() {}, '', 100, {}]
		for (var i = 0; i < invalid.length; i++) {
			var ret = qs.parse(invalid[i])
			assert.deepEqual(ret, {})
		}
	})
})

describe('stringify', function() {
	it('basic', function() {
		var ret = qs.stringify({
			a: 1,
			b: 'foo'
		})
		assert('a=1&b=foo' == ret || 'b=foo&a=1' == ret)
	})

	it('should encode both key and value', function() {
		var dirty = {
			'#': ' ',
			b: '#$'
		}
		assert.deepEqual(dirty, qs.parse(qs.stringify(dirty)))
	})

	it('can custom sep and eq', function() {
		var ret = qs.stringify({
			a: 1,
			b: 2
		}, ';', ':')
		assert('a:1;b:2' == ret || 'b:2;a:1' == ret)
	})

	it('should return empty string when meet shit', function() {
		var invalid = [undefined, null, '', {}, 100, function() {}]
		for (var i = 0; i < invalid.length; i++) {
			var ret = qs.stringify(invalid[i])
			assert.deepEqual(ret, '')
		}
	})
})
