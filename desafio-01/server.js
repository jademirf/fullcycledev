const express = require('express'),
	app = express();

app.get('/', function(req, res) {
  res.send('Maratona Full Cycle 2.0');
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`servidor funcionando na porta: ${PORT}!`);
});