Read babel plugin handbook -> https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md
Try http://astexplorer.net/#/Pcw9baefXI for a visual understanding.

# babel-plugin-boilerplate

Add a description for the plugin here

## Example

**In**

```js
let tips = [
  "Paste or drop some JavaScript here and explore the syntax tree created by chosen parser.",
  "You can use all the cool new features from ES6 and even more. Enjoy!"
];

function printTips() {
  tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
}
```

**Out**

```js
let spit = ["Paste or drop some JavaScript here and explore the syntax tree created by chosen parser.", "You can use all the cool new features from ES6 and even more. Enjoy!"];

function spiTtnirp() {
  spit.hcaErof((pit, i) => elosnoc.gol(`Tip ${ i }:` + pit));
}
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
