---
title: "Changing bases with logarithms"
date: 2026-07-25
draft: false
tags: ["Mathematics"]
---

I'm a big fan of back-of-the-envelope calculations[^1]. I'm not very good at
doing them, but it feels so good to get some rough idea about the answer in a
few seconds. One of the keys to being good at them is to know some tricks to
simplify the unknown or difficult problem to some easier or familiar problem.

In programming, software engineering and computer science, you very often need
to work with powers of two and powers of ten. It is very diffictul to multiply
and divide numbers in your head when the base is different. So what's the trick
to do it easier? First we need to change one of the bases to the other. Powers
of ten are easier to work in your head. We're going to use a trick with
logarithms to simplify the calculation and change the base from two to ten.
Let's try to change $2^{10}$.

$$ 2^{10} = 10^{x} $$
$$ \log_{10}(2^{10}) = \log_{10}(10^{x}) $$
$$ 10 \log_{10}(2) = x \log_{10}(10) $$
$$ 10 \log_{10}(2) = x; \quad \log_{10}(2) \approx 0.3010300 $$
$$ x = 10 * 0.3 $$
$$ x \approx 3 $$

Then $2^{10} \approx 10^{3}$, now we have a very simple algorithm:  multiply the
exponent by $0.3$ and change the base to ten. Now having this trick up our
sleeves, we can have a go at some calculations.

$$\frac{2^{24}}{10^{5}} = \frac{10^{7.2}}{10^{5}} = 10^{7.2 - 5} = 10^{2.2} $$

The first expression is hard to evaluate in your head, but using the trick we can 
easily get the answer with basic arithmetic. We can also compare numbers $
2^{32} $  and $ 10^{15} $ easy becomes $ 10^{9.6} $ and $ 10^{15} $.

Now the bad news is that this trick is an approximation. The actual value of
the $ \frac{2^{24}}{10^{5}} = 167.77216$. Our approximation is $10^{2.2} =
158.489319246$. It's pretty close, but the error is going to grow as the
exponent of $2$ grows. We can reduce the error by using more digits of
$\log_{10}(2)$ not just $0.3$ but this makes the calculation more complicated.

The actual value is $167.77216$ and our aproximation is $10^{2.2} =
158.489319246$. Not far off, right? But here comes the bad news. The error of
our approximation is going to grow as the exponent of $2$ grows. We can reduce
the error by using more digits of $\log_{10}(2)$, not just $0.3$, but this makes
the calculation more complicated. It's a tradeoff between speed and accuracy.

{{< figure src="/images/Figure_1.png" alt="Description" align="center" >}}

It's evident from the graph above that approximation works pretty well for
small values of the exponent. Another caveat is how we handle negative numbers.
If the exponent is odd, we have to take the absolute value and then add the
negative sign at the end.


[^1]: [back-of-the-envelope calculations](https://en.wikipedia.org/wiki/Back-of-the-envelope_calculation)
