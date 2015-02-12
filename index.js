'use strict';

/**
 * Module exports
 */

module.exports = rename;


/**
 * @param {Array} arr Array of match/replace pairs
 * @return {Function}
 */

function rename(arr) {
  return function(style) {
    style.rules = style.rules.map(function(rule) {
      if (!rule.selectors) { return rule; }
      rule.selectors = rule.selectors.map(function(selector) {
        for (var i = 0, l = arr.length; i < l; i++) {
          var r = arr[i];
          selector = selector.replace(r[0], r[1]);
        }
        return selector;
      });
      return rule;
    });
  };
}
