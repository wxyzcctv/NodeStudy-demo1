var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " recevied");

        route(handle, pathname, res, req);

    }

    http.createServer(onRequest).listen(8080)
    console.log('请在浏览器中打开：http://localhost:8080')
}

exports.start = start