const express = require('express');
const router = new express.Router();
const {exec} = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  exec('dir', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.send('test');
});

module.exports = router;
