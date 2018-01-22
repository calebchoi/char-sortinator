const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.set('port', 8080);

app.use(express.static(__dirname + '/../../dist'));
app.use(bodyParser.json());

app.post('/input', function(req, res) {
  const array = req.body.input.split('');
  const sorted = array.sort((a,b) => {
    return a > b ? -1 : 1;
  });
  const result = [req.body.input, sorted.join('')];
  res.send(JSON.stringify(result));
});

let port = 8080;

app.listen(app.get('port'), () => {
  console.log('listening on port ' + port);
});