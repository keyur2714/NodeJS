var http = require('http')
var url = require('url');

http.createServer(function (req,res) {    
    var qParam = url.parse(req.url, true).query;
    res.write("Hello Radhe Krishna...!" + "\n");
    res.write("Name = "+qParam.name + "\n");
    res.write("City = "+qParam.city);
    res.end();
}).listen(8081);