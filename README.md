# @enplug/babel-preset

> A babel preset for transforming your JavaScript for Enplug.

## Install

```sh
$ npm install --save-dev @enplug/babel-preset
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": [ "@enplug/babel-preset" ]
}
```

### Via CLI

```sh
$ babel script.js --presets @enplug/babel-preset
```

### Via Node API

```javascript
require( "babel-core" ).transform( "code", {
  presets: [ "@enplug/babel-preset" ]
});
```

### Notes
This config does not come with `babel-plugin-transform-runtime` which should be added to projects on an as needed basis. Smaller modules won't benifit from using the runtime transform but larger libraries that will be consumed with build tools like webpack may want to include it.

## License
MIT License

Copyright (c) 2016 Enplug

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

