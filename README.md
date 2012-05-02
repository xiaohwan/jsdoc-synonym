jsdoc-synonym
=============
A JSDoc plugin creates symbol synonym explicitly;

Author: [xiaohwan@gmail.com](xiaohwan@gmail.com)
URL: [https://github.com/xiaohwan/jsdoc-synonym/](https://github.com/xiaohwan/jsdoc-synonym/)
URL: [http://code.google.com/p/jsdoc-synonym/](http://code.google.com/p/jsdoc-synonym/)

Usage:
Put src/synonym.js into JSDOC_ROOT/app/plugin/
Then use @synonym when you define a variable, like:
<pre><code>
/**
 * @synonym Class.prototype
 */
var proto = Class.prototype;
/**
 * get
 */
proto.get = function() {
};
</code></pre>

See samples for more usages
