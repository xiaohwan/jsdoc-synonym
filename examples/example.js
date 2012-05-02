/**
 * @namespace
 */
var ns = {};
(function() {
	/**
	 * @class
	 * @constructor
	 */
	ns.ClassA = function() {};
	/**
	 * DO
	 */
	ns.ClassA.DO = function() {};
	/**
	 * @synonym ns.ClassA.prototype
	 */
	var a = ns.ClassA.prototype;
	/**
	 * do
	 */
	a.do = function() {};
	/**
	 * Do
	 */
	ns.ClassA.prototype.Do = function() {};
})();
(function() {
	/**
	 * @class
	 * @constructor
	 */
	ns.ClassB = function() {};
	/**
	 * @synonym ns.ClassB.prototype
	 */
	var a = ns.ClassB.prototype;
	/**
	 * get
	 */
	a.get = function() {};
})();
/**
 * @synonym ns.ClassB
 */
var B = ns.ClassB;
/**
 * GET
 */
B.GET = function(){};
/**
 * get
 */
B.prototype.get = function(){};
