var http = require('http'), 
    fs = require('fS');


fs.readFile('index.html', function(err,html){
    if (err){
        throw err;
    }
    http.createServer(function (req, res) {
        console.log('Got request for ' + req.url);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    }).listen(process.env.PORT);
});