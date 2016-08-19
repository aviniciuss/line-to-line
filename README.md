# Line to Line

> A module to read files line by line, returning read lines and the total of bytes read.

# Install
```
# npm install line-to-line
```

# Test
```
$ npm install
$ npm test
```

# API

## Parameters
- stream - Stream object.

## Events
- `line` emit line of the file.

- `close` emit close of stream.

- `error` emit error of stream.

- `open` emit open of stream.

## Return
- EventEmitter

# Using
```javascript
var fs = require('fs');
var path = require('path');
var LineToLine = require('line-to-line').LineToLine;

var lineToLine = new LineToLine(fs.createReadStream(path.normalize('./path/file.csv')));

lineToLine.on('line', (line, lineCount, byteCount) => {
  console.log(line);
  console.log(lineCount);
  console.log(byteCount);
  console.log();
});

lineToLine.on('open', fd => console.log(fd));
lineToLine.on('error', err => console.log(err));
lineToLine.on('close', () => console.log('close'));
```

# License
- MIT
