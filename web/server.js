import express from 'express';
import parseUrl from "parse-url";
import axios from "axios";
import http from 'http';
import { dirname } from 'path';
const app = express();

const isLocal = () => (req, res, next) => (req.connection.remoteAddress === '::ffff:127.0.0.1'|| req.connection.remoteAddress === '::1' ? true:false)
    ? next()
    : res.json({'state':'You\'re not locally'});





app.get('/login', function(req, res) {
    console.log(req.headers);
    res.statusCode = 200;
    if (req.query.url) {
        var url = req.query.url
    const parsed = parseUrl(req.query.url);
    console.log(parsed);
    if(parsed.resource.match(/^(127.0.0.1|localhost|0.0.0.0|)$/) || parsed.resource.includes(']') || parsed.resource.startsWith('127') || !parsed.resource.includes('.')){
        res.send('Not good');
    } else{
axios.get(parsed.href)
  .then(response => {
    //res.send(response.data.url);
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
    }
} else{
    res.sendFile('index.html', { root: '.' });
}
});


app.get('/admin', function(req, res) {
    console.log(req.headers);
    res.statusCode = 200;
    res.end('FLAG : o&@dzooSeFZ34ml6M0Pd5YZb% ');
});

app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});