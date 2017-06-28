const express = require('express');
const helmet = require('helmet');
let path = require('path');
const app = express();
const DIST_DIR =  path.join(__dirname, "dist"),HTML_FILE = path.join(DIST_DIR, "/index.html");
app.use(helmet());


 app.use(express.static(DIST_DIR));
  app.get('*', function response(req, res){res.sendFile(HTML_FILE);
  });app.listen(3000,function(){
  console.log('Example app listening on port 3000!')
});
