// *
//  * Exercise: Create some modules!
//  *
//  * When you think you have finished, run the command:
//  *   npm run s2.modules
//  * This will run a series of tests which should all pass.
//  */
'use strict';

/*
 * Create a single module (using an IIFE) which contains functionality to parse
 * URLs.
 *
 * We have started you off with the basic structure.
 *
 *     https    ://   www.example.com  /   hello  ?  foo=1&bar=2
 * |          |     |                |   |      |  |             |
 * | protocol |     |    domain      |   | path |  | querystring |
 */

var UrlParser = (function (url) {
  function protocol(url) {
    var proto = new URL(url).protocol.split("").splice(0, 5).join("");
    return proto;
  }
  function domain(url) {
    let domain = new URL(url).host;
    return domain;
  }
  function path(url) {
    let pathname = new URL(url).pathname.split("/").join("");
    return pathname;
  }
  function querystring(url) {
    let query = new URL(url).search.split("?").join("");
    return query;
  }
  return {
    protocol,
    domain,
    path,
    querystring,
  };
})("http://www.mymainsite.com/somepath/path2/path3/path4 ?foo=1&bar=2");
/*
 * Create a module that can support multiple instances (like in our example).
 * The module should be a function with several additional methods attached as
 * attributes.
 *
 * Example:
 * var exampleBuilder = createUrlBuilder('https://example.com');
 *
 * var url = exampleBuilder({ query: { foo: 1, bar: 2 }, path: 'hello' });
 *
 * console.log(url); // https://example.com/hello?foo=1&bar=2
 *
 * exampleBuilder.
 */
var createUrlBuilder = function (host) {
  // let url = "https://example.com/hello?foo=1&bar=2";
  var getQueryStr = query => Object.entries(query).map(entArr => entArr.join("=")).join('&');
  var builder = function ({ query, path }) {
    return `${builder.path(path)}?${getQueryStr(query)}`
  }
  builder.path = path => `${host}/${path}`
  builder.query = query => {
    return `${host}?${getQueryStr(query)}`
  }
  return builder;
};


module.exports = {
  UrlParser,
  createUrlBuilder,
};