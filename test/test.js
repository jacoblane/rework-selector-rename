// this needs work

var rework = require('rework')
    , fs = require('fs')
    , assert = require('assert')
    , rename = require('..')
    ;

describe('rework-selector-rename', function(){
  it('should do nothing', function(){
    var actual = rework(fs.readFileSync('test/fixtures/fixture.css', 'utf8'))
        .use(rename([]))
        .toString();
    var expected = rework(fs.readFileSync('test/fixtures/fixture.css', 'utf8'))
        .toString();
    assert.equal(actual, expected, 'Output should match input')
  });
  it('should rename selectors', function(){
    var replacements = [
        [".black", ".color-black"]
      , [ /^\.u-/, "."]
      , [ /[A-Z]/g, function(m) { return '-' + m.toLowerCase() }]
    ];
    var actual = rework(fs.readFileSync('test/fixtures/fixture.css', 'utf8'))
        .use(rename(replacements))
        .toString();
    var expected = rework(fs.readFileSync('test/expected/expected.css', 'utf8'))
        .toString();
    assert.equal(actual, expected, 'Output should match input')
  });
});
