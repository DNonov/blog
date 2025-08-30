---
title: "The real cost of dependencies"
date: 2025-08-28
draft: false
tags: ["Programming", "Mathematics"]
---

Why are you reinventing the wheel? Most likely, this is what you've been asked
every time you prefer a custom solution over a dependency. The typical
arguments against a custom solution are that either you're going to save time
with a ready-to-use dependency, or you lack the expertise to make a good custom
solution. I agree on the expertise point, not everyone has the expertise to
solve any given problem. Although on the argument about time, trivial to
implement dependencies won't save you any time. There are many packages like
is-odd[^1], pad-left[^2], url-join[^3], etc. These are not worth the cost to
depend on them.

Speaking of cost, what is the actual cost of a dependency? You just install it
and that's it! Problem solved! In the real world, a dependency might introduce
breaking changes and won't be compatible with your system anymore. In fact,
this is the most probable scenario. You'll need to spend time fixing those
incompatibilities, which are pure accidental complexity. Or in other words,
you'll spend time doing something not related to the problem your system is
designed to solve. Given enough time, this will increase the cost to maintain
the system.

We can calculate the probability of a system being compatible with its
dependencies, denoted by $P_c$. It's the product of all dependencies'
probabilities to remain compatible with the system.

$$ P_c = \prod_{i=1}^n P_i $$

If we set the time frame for a year and assume that each dependency's
probability of remaining compatible is $0.95$, then for a system with 10
dependencies there's $0.95^{10} \approx 0.60$ probability to have all
dependencies backwards compatible with the main codebase after a year. What
about a longer time frame? Then we need to add the number of years $t$ as an
exponent in the calculation.

$$ P_c = \left[ \thinspace \thinspace \prod_{i=1}^n P_i \right]^t $$

As the system matures, the value of $t$ naturally grows, and the easiest and
most efficient way to keep $P_c$ value high is to reduce the number of
dependencies $n$. If we calculate the probability of the system being
compatible with its ten dependencies in the next three years, given probability
$P_i = 0.95$ the results are kind of predictable $(0.95^{10})^3 \approx 0.22$. 

This is just three years! Imagine a long-term system with a lifespan of 10
years. It's very unlikely to have the system compatible with its dependencies;
the actual probability $P_c = 0.006$ is a little over half a per cent.

There's one more variable that can affect the $P_c$ and this is $P_i$. Until
now , we assumed the value to be $0.95$. In the real world, this value might
vary considerably.

There are different types of dependencies. The first and most stable type is
the programming language itself. Authors of programming languages are trying to
be backwards compatible with old versions of the language, especially if it's a
mainstream language. The next type is the standard library of the language. It
is a little more variable than the language, but it is quite safe to depend on
the standard library. Third type dependencies are of the form of libraries or
frameworks. They are the most variable of all. Don't forget there might be some
exceptions, but more often than not, this holds true.

Stop and think twice before you add a dependency to your system. Research about
the library or framework that you'll add as a dependency. How complex is the
problem solved by the library? Can you write the code yourself? Do you need
just a part of the library? If yes, then you can consider writing just that
part yourself and not depend on the whole library. Is it backed by some big
company? If yes, it means there's a greater chance the library/framework will
be around longer. How often are breaking changes introduced to the API? You can
check the release dates of every major version. Frequent releases of major
versions with potential breaking changes are not going to boost $P_i$. Is it
still actively maintained? If a library/framework is abundant, there is a risk
of incompatibility with other parts of the system that have already changed.
All of this will help you make better decisions and get a library with the
highest value of $P_i$.

If you have the expertise to implement the dependency, just do it. It's safest
to depend on the language itself and its standard library. You'll spend some
time on implementation now, but you'll save a ton of time later, and your
system will be way more robust. Please don't go all the way the other direction
and roll your own web server, DB, ORM, MVC framework or the next React in a
commercial system. Keep those ideas for side projects.

[^1]: [is-odd](https://www.npmjs.com/package/is-odd)
[^2]: [pad-left](https://www.npmjs.com/package/pad-left)
[^3]: [url-join](https://www.npmjs.com/package/url-join)
