---
layout: post
title: How I keep my code clean
date: 2025-06-23
categories: notes dev
---

Here are some patterns I follow to keep code clean and readable.

These aren't hard and fast rules, and valid exceptions do exist. But these are
some guidelines I use for myself when writing code.

## Name things clearly

My personal pet peeve when working with UNIX and Windows APIs is the naming of
things. I get there were real memory limitations when they came about, but
this is no excuse for code written today.

Here are a few bangers from UNIX:

* `fcntl`
* `exec`
* `setvbuf`

And some from Windows:

* `HWND`, `HCONV`, `HDC`
* `LPCSTR`, `WPARAM`

### Globals

Ideally all code elements would be namespaced and written in plain English.
This would make the code you're looking at much easier to read at a glance.

The names should be as long as they are relevant. In C, where items can be
accessible from other compilation units, should be as long as required and in
the format of `LibraryContextFunction`. ([SDL] is a pretty good example, they
amalgamate the context and function into the same name).

In other languages you can generally pick and chose which items are available
in your context. So the names can be shorter than something like `Lib_GetThisParticularThing(ThisParticular* self)`.

[SDL]: https://wiki.libsdl.org/SDL3/FrontPage

### Locals

The rules for locals can be relaxed a bit. But there is still have a guideline.

Unless, it's implementing a mathematical process, the variables should
indicate their importance and lifetime.

i.e. `i` and `j` are OK for number loops (`for i in range(100)`), but not OK
for for-each loops, where you're iterating over objects (`for item in items`).
If you're mixing the two, they should be named something like `index`, or
`item_index` when nesting).

## Return early

Whenever I write a function, I take

When writing a function, you should have the "happy" path as the primary path.

If you're writing a condition where the "unhappy" path leads to less work
being done, consider inverting the `if` to have the early return, and any other
work needed on the "unhappy" path.

I find this pattern quite useful for input validations.

```rust
// bad example
fn colorFromHsl(hue: Number, saturation: Number, lightness: Number) -> Color {
    if (hue in 0..360) {
        if (saturation in 0..1) {
            if (lightness in 0..1) {
                ...
            } else {
                throw RangeError("lightness must be between 0 and 1");
            }
        } else {
            throw RangeError("saturation must be between 0 and 1");
        }
    } else {
        throw RangeError("hue must be between 0 and 360");
    }
}

// good example
fn colorFromHsl(hue: Number, saturation: Number, lightness: Number) -> Color {
  if (!(hue in 0..360)) throw RangeError("hue must be between 0 and 360");
  if (!(saturation in 0..1)) throw RangeError("saturation must be between 0 and 1");
  if (!(lightness in 0..1)) throw RangeError("lightness must be between 0 and 1");

  ...
}
```

If your `if` statements get a good bit longer, it may be time [make your functions simpler](#keep-functions-simple).

## Limit indentation

While I'm sure some developers want to war it out over the usage of tabs and
spaces, or 2-space, or 4-space, or 8-space. I hope there is a bit more general
agreement on the fact that deeply nested code is generally a bad idea.

In a function, you should ideally not nest more than 2-3 times. If you do, you
should take as a hint to simplify, deduplicate or break out that section into
its own function.

## Use abstractions when available

Some programming languages provide abstractions so you can focus about what
you want to achieve, and less on how you want to achieve it.

It's different for every language. Some of these will come with costs, others
less so. In some cases, it will allow you to speed up execution.

### Collection helpers

These are the usual `map`, `filter`, `sort` operations on collections.

* in C#, it's called [LINQ].
* in Java, you have [Stream].
* in Ruby, collections generally implement the sort of methods you have on [Array].
* and in Python, these take the form of [list comprehensions](https://www.geeksforgeeks.org/python-list-comprehension/).

[LINQ]: https://learn.microsoft.com/en-us/dotnet/csharp/linq/
[Stream]: https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html
[Array]: https://ruby-doc.org/core-2.7.0/Array.html

In the languages I mentioned above, these come with readability at cost of
performance (but not by much) and execution on those will generally be delayed
until they're needed.

In Java and C#, if you have a large collection, you can also speed it up by
parallelising processing with [BaseStream.parallel()](https://docs.oracle.com/javase/8/docs/api/java/util/stream/BaseStream.html#parallel--)
or [PLINQ](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/introduction-to-plinq), respectively.

In languages like C++ and Rust, the compiler generally optimises them into the
most efficient instructions given the constraints (remember, we state what we want, as opposed to how
it's done).

```text
// bad example
let names = new List<String>();
for person in people {
  if not matchSearch(person) {
    next;
  }

  names.append(person.name);
}

names.sort();

// good example
let names = people
  .filter(matchSearch)
  .map(person => person.name)
  .sorted();
```
