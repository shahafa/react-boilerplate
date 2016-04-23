const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname, './../dist');
app.use(express.static(staticPath));

app.route('/').get((req, res) => {
  res.sendFile('index.html', {
    root: staticPath
  });
});

app.get('/api/currentTime', (req, res) => {
  res.send({
    time: new Date()
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port %s!', process.env.port || 3000);
});
