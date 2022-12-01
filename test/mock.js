require.extensions[".scss"] = function () {
  return null;
};
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM('‹div id="app"></div>', {
  url: "http://localhost",
});
const { document } = window;
global.XMLHttpRequest = window.XMLHttpRequest;
global.window = window;
global.document = document;
