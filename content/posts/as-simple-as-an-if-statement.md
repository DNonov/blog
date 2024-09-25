---
title: "As simple as an if statement"
date: 2024-09-4
draft: true
tags: ["Mathematics", "Programming", "Paper"]
---

We use `if` statements all the time. They are the backbone of flow control in
pretty much all the modern and not so much programming languages. But, do we 
really understand them in deep? Why there are some different opinions on how
to use them if we understand them so well? I believe, if a well known topic is 
backed up by either formal proof or some sort of empirical evidence based on 
study. There is no space for opinions. And it's needless to say; opinions on 
the topic exist.

Statement like "Nested if's are bad." is a common advise found in programming books.
And yet there are some people against it. Do we believe the books? Do we believe
the people? How the books' authors came to this and other conclusions? How the
critics came to theirs? In the following blog post I'll try to get to the bottom
of the story.

The structured programming theorem[^1] sets the beginning of the structured
programming paradigm. And brings the `if` statement as its natural extension.
In short the theorem says:

You can compute every computable function in only three structures:
* **sequence** - Execute sequence of statements
* **select** - Execute statement based on boolean expression
* **iteration** - Repeatedly execute statement while boolean expression is true

These instructions are sufficient to describe instruction cycle of a CPU and an
operation of a Turing machine. In short just having those three structures in
your language makes it Turning complete. Although, the theorem gives you
abstractions is not very clear how to use them effectively. Many people worked
on the structured programming later to address this issue. One of the pioneers
in structured programming Edsger Dijkstra[^2] even wrote a famous paper[^3] in 
attempt to abolish `goto` use forever.

[^1]: [Structured Programming Theorem](https://en.wikipedia.org/wiki/Structured_program_theorem)
[^2]: [Edsger W. Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra)
[^3]: [Go To Statements Considered Harmful](https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf)
