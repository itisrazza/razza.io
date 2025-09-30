---
layout: post
title:  "JavaScript: Function vs Arrow Syntax"
date:   2020-05-01
categories: notes javascript
---

In JavaScript, there are two ways of defining functions, with the `function` keyword from day 1, and using the arrow syntax from ES6.

```jsx
function helloWorld(name) {
  console.log(`Hello, ${name}!`);
}
```

```jsx
const helloWorld = name => {
  console.log(`Hello, ${name}!`);
}
```

Most of the time, you are likely to see them as anonymous functions passed as callbacks or actions.

```jsx
setTimeout(function() {
  console.log("Hello 5 seconds later");
}, 5000);
```

```jsx
setTimeout(() => {
  console.log("Hello 5 seconds later");
}, 5000);
```

But what is the difference between these two?

Simply put, `function` binds the value for `this` when the function is declared, where the arrow syntax doesn't. The value for `this` in the arrow syntax function will simply be inherited from the context calling it.

# Example

Below is a very quick example of how it works.

```jsx
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

# Read More

[ECMAScript 2015 Language Specification - ECMA-262 6th Edition](https://262.ecma-international.org/6.0/#sec-bound-function-exotic-objects)
