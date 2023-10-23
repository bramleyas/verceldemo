const fs = require('fs');
const express = require('express');
const app = express();
Object.entries(require("./url.json")).forEach(([path, url]) => app.get(path, (_, r) => { r.redirect(url); /*fs.writeFile('./log.csv', `${path}\n`, { flag: 'a' }, err => { console.log(err); });*/ }));
app.get('/', (req, res) => {
  res.send('You should be redirected soon...<br>Not working? Email <a href="mailto:admin@nnvikings.com">admin@nnvikings.com</a>')
});
app.listen(8000, () => {
  console.log('server started');;
});
