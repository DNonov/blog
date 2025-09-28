---
title: "Search in git history"
date: 2025-09-28
draft: false
tags: ["Programming", "Git"]
---

Often, I need to retrieve a deleted code snippet from Git's history. The usual
flow is to remember the commit message and fuzzy search it in the `git log`.
Then I look at the diffs in the commit to get the snippet.

I decided to make the process easier and write a bash script. But, while
looking for the right Git commands and flags, I found the solution already
implemented in Git. There are two general strategies to approach the problem:
search by location and search by name. Which approach we use depends on what we
remember about the code snippet.

Let's take a scenario where we remember vaguely the location of the code
snippet. Something like 'on the bottom of the file utils.py'. If the file is 60
lines long and the snippet is about ten lines of code, we can find it with the
following command.

```git
git log -L 50,60:utils.py
```

We'll get a list of all commits with diffs in the given location. Then we can
find the snippet in the list.

The second strategy requires information about a unique string, such as the
name of a function or variable, to filter out the results better. Let's say
we're looking for a function `get_valid_ports`.

```bash
git log --patch -S "get_valid_ports"
```

Now, we'll get all commits containing `get_valid_ports`. 

I know we won't need this daily, but it's nice to know this kind of search is
possible and easy. Git is far more powerful than just clone, commit and push.
Solid knowledge of it will save us priceless time.
