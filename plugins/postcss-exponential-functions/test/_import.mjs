import assert from 'assert';
import plugin from '@csstools/postcss-exponential-functions';
plugin();

assert.ok(plugin.postcss, 'should have "postcss flag"');
assert.equal(typeof plugin, 'function', 'should return a function');
