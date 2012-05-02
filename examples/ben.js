/**
 * This is for the case mentioned in 
 * http://groups.google.com/group/jsdoc-users/browse_thread/thread/2f59f9d18bedc056
 */
(function() {
	"use strict";
	/** Creates a new Foo. 
	 * 
	 * @class Represents a foo. 
	 * @synonym Foo
	 */
	function Foo() {
		this.rand = Math.random();
	}
	window.Foo = Foo;
	Foo.prototype = {
		/** Produces a human-readable representation of the foo. 
																											   */
		toString: function() {
			return "Foo<" + this.rand + ">";
		}
	};
} ());

// ++++++++++++++++++++++++++++++++++++++++++++++++

(function() {
	/**
	 * get
	 */
	Foo.prototype.get = function() {};
})();

(function() {
	var Foo = function() {};
	/**
	 * set
	 */
	Foo.prototype.set = function() {};
	// NOTE: this should not be counted as a member of Foo actually. A defect of JSDoc?
})();

// NOTE: refer to prototype;
(function() {
	/**
	 * @synonym Foo.prototype
	 */
	var bar = Foo.prototype;
	/**
	 * do
	 */
	bar.do = function() {};
})();
