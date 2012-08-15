
## statekeeper

Reusable state "transitions" via mixins. Inspired by [configurable.js](https://github.com/visionmedia/configurable.js)

### Install

```shell
npm install statekeeper
```

### Usage

Plain objects:
```javascript
  var statekeeper = require('statekeeper');
  var obj = {};

  statekeeper(obj);

  obj.state('ready');
  obj.state() => 'ready'
  obj.readyAt => <date>
```

If the object being mixed in as an "emit" method, it will be called with
the state and any argument.

```javascript
  var statekeeper = require('statekeeper');
  var EE = require('events').EventEmitter;
  var obj = new EE();

  statekeeper(obj);

  obj.on('say', function(what){
    // what === 'hello'
  });

  obj.state('hello', 'world');
  obj.state() => 'hello'
```

### License

(The MIT License)

Copyright (c) 2012 Garrett Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



