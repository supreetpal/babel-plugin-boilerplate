# babel-plugin-boilerplate

Add a description for the plugin here

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-boilerplate
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["boilerplate"]
}
```

### Via CLI

```sh
$ babel --plugins boilerplate script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["boilerplate"]
});
```
