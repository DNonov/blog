---
title: "No silver bullet - review"
draft: true
date: 2024-07-16
tags: ["Paper", "Programming", "Productivity"]
ShowToc: true
---

'No silver bullet'[^1] is one of the most famous papers in computer science.
Frederick Brooks[^2] explores different ideas around productivity gains on
software development. The main idea in the paper is that software development
consist of two type of tasks essential and accidental. The essential part is
the complex conceptual structure that compose the abstract software entity. On
the other hand accidental part is representation of the abstract essential part
in programming languages, algorithms etc.

Exploring the mass market to avoid construction what can be bought. Using rapid
prototyping as part of a planned iteration in establishing software
requirements. Growing software organically, adding more and more function to
system as they are run, used and tested. Identifying and developing the great
conceptual designers of the rising generation.

The essence of a software entity is a construct of interlocking concepts: data
sets, relationship among data items, algorithms, and invocation of functions.
This essence is abstract, in that conceptual construct is the same under many
different representations. It is nonetheless highly precise and richly
detailed.

I believe the hard part of building software to be the specification, design,
and testing of this conceptual construct, not the labor of representing it and
testing the fidelity of the representation. We still make syntax errors, to be
sure; but they are fuzz compared to the conceptual errors in most systems.
If this is true, building software will always be hard. There is inherently no
silver bullet.
Let us consider the inherent properties of this irreducible essence of modern
software systems: complexity, conformity, changeability and invisibility.

Likewise, a scaling-up of a software entity is not merely a repetition of the
same elements in larger size, it is necessarily an increase in the number of
different elements. In most cases, the elements interact with each other in
some non-linear fashion and the complexity of the whole increases much more
than linearly.
The complexity of software is an essential property, not an accidental one.
Hence, descriptions of a software entity that abstract away its complexity
often abstract away its essence. Mathematics and the physical sciences for
three centuries made great strides by constructing simplified models of complex
phenomena, deriving properties from the models and verifying those properties
experimentally. This worked because the complexities ignored in the models were
not the essential part of the phenomena. It does not work when the complexities
are the essence.

### Complexity:

Many of the classical problems of developing software products derive from this
essential complexity and its non-linear increases with size. From the
complexity comes the difficulty of communication among team members, which
leads to product flaws, cost overruns, schedule delays. From the complexity
comes the difficulty of enumerating, much less understanding, all the possible
states of the program, and from that comes the unreliability. From the
complexity of the functions comes the difficulty of invoking those function,
which makes programs hard to use. From complexity of structure comes the
difficulty of extending programs to new function without creating side effects.
From complexity of structure come the unvisualized states that constitute
security trapdoors.

### Conformity:

Much of the complexity he must master is arbitrary complexity, forced without
rhyme or reason by the many human institutions and systems to which his
interfaces must conform.
In many cases the software must conform because it has most recently come to
the scene. In others, it must conform because it is perceived as the most
conformable. But in all cases, much complexity comes from conformation to other
interfaces; this cannot be simplified out by any redesign of the software
alone.

### Changeability:

The software entity is constantly subject to pressure for change.
Partly this is because the software in a system embodies its function, and the
function is the part which most feels the pressures of change. Partly it is
because software can be change more easily - it is pure thought-stuff,
infinitely malleable.
All successful software gets change. Two processes are at work. As software
product is found to be useful, people try it in new cases at the edge of or
beyond the original domain. The pressures for extended function come chiefly
from users who like the basic function and invent new uses for it.
Second, successful software also survives beyond the normal life of the machine
vehicle for which it is first written.
In short, the software product is embedded in a cultural matrix of application,
users, laws, and machine vehicles. These all change continually, and their
changes inexorably force change upon the software product.

### Invisibility:

Software is invisible and unvisualizable.
The reality of software is not inherently embedded in space.
This lack not only impedes the process of design within one mind, it severely
hinders communication among minds.


## Accidental difficulties

### Languages:

Surely the most powerful stroke for software productivity, reliability, and
simplicity has been the progressive use of high-level languages for
programming.

It frees a program from much of its accidental complexity. An abstract program
consist of conceptual constructs: operations, data types, sequences and
communication. The concrete machine program is concerned with bits, registers,
conditions, branches, channels, disks, and such. To the extent that the
high-level language embodies the constructs one wants in the abstract program
and avoids all lower ones, it eliminates a whole level of complexity that was
never inherent in the program at all.

### Time-sharing:

Time-sharing preserves immediacy, and hence enables one to maintain an overview
of complexity. The slow turnaround of batch programming means that one
inevitably forgets the minute, if not the very thrust, of what he was
thinking when he stopped programming and called for compilation and execution.
The principal effect is to shorten system response time. As it goes to zero, at
some point it passes the human threshold of noticeability, about 100
milliseconds.
Beyond that no benefits are to be expected.

### Unified programming environments:

They attack the accidental difficulties of using programs together, by providing
integrated libraries, unified formats, and pipes and filters.


## Hopes for silver bullet


### High level languages

### OOP

Each removes one more accidental difficulty from the process, allowing the
designer to express the essence of his design without having to express large
amounts of syntactic material that add no new information content. For both
abstract types and hierarchical types, the result is to remove a higher-order
sort of accidental difficulty and allow a higher-order expression of design.

### Artificial Intelligence

The hard thing about building software is deciding what one wants to say, not
saying it. No facilitation of expression can give more than marginal gains.

### Expert systems

### Automatic programming

### Graphical programming

### Program verification

Much of the effort in modern programming goes into testing and repair of bugs.

### Environments and tools

### Workstations


## Programming attacks on the conceptual essence

All the technological attacks on the accidents of the software process are
fundamentally limited by the productivity equation:

$$ time\ of\ task = \sum_{i}(frequency)_i * (time)_i $$

If, as I believe, the conceptual components of the task are now taking most of
the time, then no amount of activity on the taks components that are merely the
expression of the concepts can give large productivity gains.

Hence we must consider those attacks that address the essence of the software
problem, the formulation of these complex conceptual structures.


### Buy versus build

The most radical possible solution for constructing software is not to
construct it at all.

### Requirements Refinement and Rapid Prototyping

The hardest single part of building a software system is deciding precisely
what to build. No other part of the conceptual work is so difficult as
establishing the detailed technical requirements, including all the interfaces
to people, ot machines, and to otehr software systems. No other part of the
work so cripples the resulting system if done wrong. No other part is more
difficult to rectify later.

Therefore the most important function that the software builder does for his
client is the iterative extraction and refinement of the product requirements.
For the truth is the client does not know what he wants. He usually does not
know what question must be answered, and he almost never has thought ofthe
problem in the detail taht must be specified.

I would go a step further and assert that it is really impossible for a client
even working with software engineer, to specify completly, precisely, and
correctly the exact requirements of a modern software product beforehaving
built and tried some versions of the product he is specifying.

Therefore one of the most promising of the current technological efforts, and
one which attacks the essence not the accidents of the software problem is the
development of approaches and tools rapid prototyping of systems as part of the
itreative specification of requirements.

### Incremental Development - Grow not build software

If as I believe, the conceptual structure we construct today are too
complicated to be accurately spedified in advance and too complex to be built
faultlessly, then we must take a radically different approach.

That is the system should first be made to run, even though it does nothing
useful except call the proper set of dummy subprograms. Then, bit by bit it is
fleshed out with the subprograms in trun being developed into actions or calls
to empty stubs in the level below.

### Great designers

Study after study show that the very best designers produce structures that are
fasters, smaller, simpler, cleaner and produced with less effort. The
difference between the great and the average appreach an order of magnitude.

My fist proposal is that each software organisation must determine and proclaim that
great designers are as important to its success as great managers are and that they can be
expected to be similarly nurtured na rewarded.

[^1]: [No sliver bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet)
[^2]: [Frederick Brooks](https://en.wikipedia.org/wiki/Fred_Brooks)
