var fs = require('fs');
var path = require('path');
var LineToLine = require('../distribution/LineToLine').LineToLine;

var lineToLine = new LineToLine(fs.createReadStream(path.normalize('./test/fixtures/MOCK_DATA.csv')));

lineToLine.on('line', (line, lineCount, byteCount) => {
  console.log(line);
  console.log(lineCount);
  console.log(byteCount);
  console.log();
});

lineToLine.on('open', fd => console.log(fd));
lineToLine.on('error', err => console.log(err));
lineToLine.on('close', () => console.log('close'));
