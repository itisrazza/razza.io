---
layout: post
title:  "JavaScript: Function vs Arrow Syntax"
date:   2020-05-01
categories: notes javascript
resources:
  - id: ecma262-bound-functions
    label: ECMAScript 2015 spec
    description: "ECMAScript 2015 Language Specification - ECMA-262 6th Edition"
    url: https://262.ecma-international.org/6.0/#sec-bound-function-exotic-objects
    type: Specification
    icon: journal-code
---

<div class="callout callout-migrated" markdown="1">
<i class="bi bi-clock-history"></i> Originally published on [Notion](https://www.notion.so/razza/JavaScript-Function-vs-Arrow-Syntax-4dcc1e49dbe3404b8558a403688e921f).

This article is the one originally posted with a few markup changes, spelling and grammatical fixes.
</div>

In JavaScript, there are two ways of defining functions: one using the `function` keyword available since day 1, and one using the arrow syntax introduced in ES6.

```js
function helloWorld(name) {
  console.log(`Hello, ${name}!`);
}
```

```js
const helloWorld = name => {
  console.log(`Hello, ${name}!`);
}
```

Most of the time, you are likely to see them as anonymous functions passed as callbacks or actions.

```js
setTimeout(function() {
  console.log("Hello 5 seconds later");
}, 5000);
```

```js
setTimeout(() => {
  console.log("Hello 5 seconds later");
}, 5000);
```

But what is the difference between these two?

Simply put, `function` binds the value for `this` when the function is declared, whereas the arrow syntax doesn't. The value for `this` in an arrow function is inherited from the enclosing lexical scope.

# Example

Here's an example.

```js
let someObject = {
  value: "This is a dummy value",

  functionSyntax: function() {
    console.log(this);
  },

  arrowSyntax: () => console.log(this)
}

someObject.functionSyntax();  // this == someObject
someObject.arrowSyntax();     // this == global object
```

```
// someObject.functionSyntax();
{
  value: 'This is a dummy value',
  functionSyntax: [Function: functionSyntax],
  arrowSyntax: [Function: arrowSyntax]
}

// someObject.arrowSyntax();
{
  // node.js global object
  // or web browser's Window object
}
```

