---
layout: post
title: You don't need JavaScript for navigation
date: 2025-04-11
categories: notes webdev
---

When I was implementing the website redesign, for the mobile navigation menu
it was important to find a way to collapse it into a single button.

In the past I had done it with a bit of JavaScript, but have since learnt of a
way to do it with simple CSS.

## HTML Markup

Starting with the HTML, the navigation markup is going to look something like
so:

```html
<nav>
  <input type="checkbox" id="nav-collapse">
  <label class="nav-toggle" for="nav-collapse">Menu</label>

  <div class="nav-contents">
    <a href="https://razza.io/">Razza's Website</a>
    <a href="https://github.com/itisrazza">GitHub</a>
    <!-- put whatever links you want here -->
  </div>
</nav>
```

We're using the checkbox's state the DOM holds for us. We can use the `label`
element to use our own elements to change the state of the checkbox. That way,
we can make the button look however we want.

## CSS Styling

As far as styling goes, we first need to hide the checkbox and links you want
collapsed.

```css
nav #nav-collapse {
  display: none;
}

nav .nav-contents {
  display: none;
}
```

To make the navigation contents visible again, we use the CSS sibling operator
`~` to show them when the invisible checkbox gets checked.

```css
nav #nav-collapse:checked ~ .nav-contents {
  display: flex; /* or block, or whatever else you want */
}
```

You can also use it to change how the button looks if you'd like.

## In Action

A full example is available on [Codepen].

[Codepen]: https://codepen.io/itisrazza/pen/xbxoaPd

If you open this website on mobile, or in a smaller window, you can also see
the same mechanism in action.
