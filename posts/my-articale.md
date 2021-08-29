---
title: My First Review
slug: my-articale
tags: 'math programming testing'
abstract: 'Following is a review of my new favorite mechanical keyboard. Post
content quality notwithstanding, you can see that only item in common between
the two articles is the slug, which is functioning here as an identifier.'
isPublished: true
publishDate: 10.05.21
updateDate: 10.05.21
---

Following is a review of my new favorite mechanical keyboard.[^1] Post content
quality notwithstanding, you can see that only item in common between the two
articles is the slug, which is functioning here as an identifier. If you’d
rather not explicitly define the slug this way, you must then instead ensure
that the translated article titles are identical, since the slug will be
auto-generated from the article title.

Programming with pure functions will involve more copying of data, and in some
cases this clearly makes it the incorrect implementation strategy due to
performance considerations. As an extreme example, you can write a pure
`DrawTriangle()` function that takes a `framebuffer` as a parameter and returns
a completely new `framebuffer` with the triangle drawn into it as a result.
Don't do that.

Returning everything by value is the natural functional programming style, but
relying on compilers to always perform return value optimization can be
hazardous to performance, so passing reference parameter for output of complex
data structures is often justifiable, but it has the unfortunate effect of
preventing you from declaring the returned value as const to enforce single
assignment.

There will be a strong urge in many cases to just update a value in a complex
structure passed in rather than making a copy of it and returning the modified
version, but doing so throws away the thread safety guarantee and should not be
done lightly. List generation is often a case where it is justified. The pure
functional way to append something to a list is to return a completely new copy
of the list with the new element at the end, leaving the original list
unchanged. Actual functional languages are implemented in ways that make this
not as disastrous as it sounds, but if you do this with typical C++ containers
you will die.

``` haskell
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}

import Yesod

data WebApp = WebApp

instance Yesod WebApp

mkYesod "WebApp" [parseRoutes|
  / HomeR GET
|]

getHomeR = defaultLayout [whamlet|
  <div>Hello, world!
|]

main = warpEnv WebApp
```

A significant mitigating factor is that performance today means parallel
programming, which usually requires more copying and combining than in a single
threaded environment even in the optimal performance case, so the penalty is
smaller, while the complexity reduction and correctness benefits are
correspondingly larger.

When you start thinking about running, say, all the characters in a game world
in parallel, it starts sinking in that the object-oriented approach of updating
objects has some deep difficulties in parallel environments. Maybe if all of the
object just referenced a read only version of the world state, and we copied
over the updated version at the end of the frame… Hey, wait a minute…

# Action Items

Survey some non-trivial functions in your codebase and track down every bit of
external state they can reach, and all possible modifications they can make.
This makes great documentation to stick in a comment block, even if you don't do
anything with it. If the function can trigger, say, a screen update through your
render system, you can just throw your hands up in the air and declare the set
of all effects beyond human understanding.

``` console
$ ls -la
total 332
drwxrwxr-x   9 dim dim   4096 May 24 15:16 .
drwxrwxr-x  33 dim dim  12288 May 30 23:22 ..
drwxrwxr-x   8 dim dim   4096 Jun  5 14:20 .git
drwxrwxr-x   5 dim dim   4096 Jun  1 20:02 .next
drwxrwxr-x 325 dim dim  12288 May 23 22:55 node_modules
drwxrwxr-x   3 dim dim   4096 Jun  5 12:29 pages
drwxr-xr-x   2 dim dim   4096 Jun  5 14:20 posts
drwxrwxr-x   2 dim dim   4096 May 22 10:57 public
drwxrwxr-x   2 dim dim   4096 Jun  5 12:49 styles
-rw-rw-r--   1 dim dim    386 Oct 26  1985 .gitignore
-rw-rw-r--   1 dim dim    492 May 24 15:16 package.json
-rw-rw-r--   1 dim dim 271611 May 23 22:55 package-lock.json
-rw-rw-r--   1 dim dim   1581 Oct 26  1985 README.md
$ cd styles/
$ tree -l
.
├── globals.css
├── Home.module.css
└── prism.css
```

The next task you undertake, try from the beginning to think about it in terms
of the real computation that is going on. Gather up your input, pass it to a
pure function, then take the results and do something with it.

As you are debugging code, make yourself more aware of the part mutating state
and hidden parameters play in obscuring what is going on.

Modify some of your utility object code to return new copies instead of
self-mutating, and try throwing const in front of practically every non-iterator
variable you use.s this is extra space

``` typescript
import {IO} from 'fp-ts/lib/IO';
import {Monoid} from 'fp-ts/lib/Monoid';

export function getIOMonoid<A>(M: Monoid<A>): Monoid<IO<A>> {
  return {
    concat: (x, y) => () => M.concat(x(), y()),
    empty: () => M.empty
  }
};


import {fold} from 'fp-ts/lib/Monoid';
import {replicate} from 'fp-ts/lib/Array'

/** a primitive 'Monoid' instance for 'void' */
export const monoidVoid: Monoid<void> = {
  concat: () => undefined,
  empty: undefined
}
```



[^1]: This is a note under line.
