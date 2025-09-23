---
title: "Unnecessary complexity"
date: 2025-09-23
draft: false
tags: ["Programming"]
---

Some programmers are attracted to complexity as a moth to a candle flame.
Unsurprisingly, their fate is the same as the moth's; they get burned every
time. Complexity that has gotten out of hand inevitably leads to failure.

The worst manifestation of complexity is an overengineered solution to a simple
problem. Here's a perfect example: there was a tweet with a piece of code which
generates an array of all months as strings. It was promoted as a good solution
to the problem.

``` javascript
const MONTHS = Array.from({ length: 12 }, (_, index) => {
    const date = new Date();
    date.setMonth(index);
    return date.toLocaleDateString(null, { month: "long" })
})
```

This is not a good solution to this problem! There are so many ways this can go
wrong. The solution I prefer is intentionally simple, and there's no extra
probability of bug occurrence. Just a hard-coded array of strings. 

``` javascript
const MONTHS = [
    "January", "February", "March",
    "April"  , "May"     , "June",
    "July"   , "August"  , "September",
    "October", "November", "December"
];
```

I can hear the critics: 'This is not flexible enough!'. Do we really need that
much flexibility? The probability of a new month being added, removed or
renamed is approaching zero. On the other hand, what is the probability of
introducing a bug from the code above? I'd say larger than the probability of a
month being renamed.

Here's the twist: the snippet I showed wasn't even the original, it had a bug
baked in. Didn't notice? That's the point. It's that easy to introduce a bug
into the system.

``` javascript
const MONTHS = Array.from({ length: 12 }, (_, index) => {
    const date = new Date();
    date.setMonth(index);
    return date.toLocaleDateString(undefined, { month: "long" })
})
```

The original code and `null` as the first parameter passed to the
`toLocaleDateString` instead of `undefined`, which will get the default
language. This small difference leads to a runtime error. This same parameter
will be another talking point for the 'flexibility critics'. Because you can
use any IETF language tag[^1] and get the months translated to it. I can see
how this is valuable as a method on the date object in a standard library in
order to solve a more general problem. Not so much in the software system that
solves a specific problem. 

I can bet your problem is just a specific problem of the general. Most apps only
need to be translated into a few languages. Hard-coded arrays are cheaper and
predictable compared to debugging the snippet above.

This example case is trivial, but the same pattern repeats at large scales.
Teams adopt general, complex solutions when a simple one would suffice. Often,
teams include a whole library just to use some small part of it. As I already
wrote[^2], all dependencies have a high cost.

We'll naturally arrive at more robust and better-designed solutions if we apply
KISS[^3] and YAGNI[^4] more often.

[^1]: [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag)
[^2]: [The real cost of dependencies](https://dnonov.com/posts/the-real-cost-of-dependencies)
[^3]: [KISS](https://en.wikipedia.org/wiki/KISS_principle)
[^4]: [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
