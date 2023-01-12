const express = require('express');
const app = express();
const hostname = require('os').hostname();

app.get('/', (req, res) => {
    res.send(
        `<!DOCTYPE html>` +
        '<html>' +
            '<body>' +
                '<p>Hello World</p>' +
                'Hostname: ' + hostname +
            '</body>' +
        '</html>'
    );
});

app.listen(3333, '0.0.0.0', () => {
    console.log('\x1b[36m%s\x1b[0m',`listening on port 3333`);
});