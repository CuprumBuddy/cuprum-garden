---
date: 2025-04-20T13:05:07+03:00
lastmod: 2025-04-20T17:43:37+03:00
title: "🎥 Linear Algebra: Vectors, what even are they? (3blue1brown)"
description: 
keywords:
  - Math
  - Vectors
  - "Linear Algebra"
  - Scalars
categories:
  - source
  - video
tags:
  - Math
  - Vectors
  - "Linear Algebra"
  - Scalars
draft: false
publishDate: 2025-04-20
expiryDate: 
layout:
---

{{< katex >}}

<iframe width="560" height="315" src="https://www.youtube.com/embed/fNk_zzaMoSs?si=h08p_WrfAeegxvTf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> Title: Vectors, what even are they?
> 
> Author: Grant Sanderson
> 
> URL: https://www.3blue1brown.com/lessons/vectors (YouTube video + transcript)
> 
> Date: 2016-08-06 (published), 2025-03-13 (updated)
> 
> License: “Under the standard YouTube license, you are free to embed the videos in your own site or blog, as long as it is not behind a paywall. In both cases, attribution is of course appreciated”. (from [FAQ](https://www.3blue1brown.com/faq))

---

This post turned out to be more personal that I expected. I didn’t try to retell Grant’s video nor take notes from it: I believe the transcript does both of these jobs good enough. Therefore expect to read a bunch of anecdotes with occasional references to other mathematical fields, terms, etc.

What I found interesting is three different definitions of a vector: I don’t have much experience with linear algebra, but for some reason I’m used to one vector definition at a time. To be more precise, I vaguely remember “vector is a directed line segment” from high school. (In this video it’s called “physics student perspective”, i.e. “arrows pointing in space” (c).)

That’s why I was surprised to learn that matrices are vectors and vice versa – for some reason I prefer matrices over vectors. 

Anyways, this brings us to the mathematician’s perspective – physics student perspective plus computer science perspective ‘where "vector" is pretty much a fancy word for list’. It’s worth noting that the mathematician’s definition is an example of Yoneda lemma:

> [A] vector can be anything where there's a sensible notion of adding two vectors and multiplying a vector by a number, operations that we'll talk about later in this chapter.

For reference, Yoneda lemma, simply put, states that to describe an object one needs to describe all its relationships with other objects. (Yep, it’s “referencing category theory concepts while studying way simpler subjects” time.)

Another explanation that caught my eye was:

>Whenever you catch a number like \(2\), $\frac{1}{3}$​, or \(−1.5\) acting like this, scaling some vector [during multiplication and division by number operations, making the resulting vector shorter, longer, or changing its direction to the opposite one], you call it a "scalar". In fact, throughout linear algebra, one of the main things numbers do is scale vectors, so it's common to use the word _scalar_ interchangeably with the word _number_.

To give another definition:

>**Scalar quantities** or simply **scalars** are [physical quantities](https://en.wikipedia.org/wiki/Physical_quantity "Physical quantity") that can be described by a single pure number (a [_scalar_](https://en.wikipedia.org/wiki/Scalar_\(mathematics\) "Scalar (mathematics)"), typically a [real number](https://en.wikipedia.org/wiki/Real_number "Real number")), accompanied by a [unit of measurement](https://en.wikipedia.org/wiki/Unit_of_measurement "Unit of measurement"), as in "10 cm" (ten [centimeters](https://en.wikipedia.org/wiki/Centimeter "Centimeter")). <…> Scalars do not represent a direction.
>
>– [Scalar (physics)](https://en.wikipedia.org/wiki/Scalar_(physics)) (Wikipedia)

I absolutely adore how reading Wikipedia can help to discover unexpected connections between ideas. I thought “oh, how interesting to define a vector as *scaling thing* in the first sentence and as *just a number* only in a second one”, and then I saw this:

> The term "scalar" has origin in the [multiplication of vectors by a unitless scalar](https://en.wikipedia.org/wiki/Scalar_multiplication "Scalar multiplication"), which is a _[uniform scaling](https://en.wikipedia.org/wiki/Scaling_\(geometry\) "Scaling (geometry)")_ [transformation](https://en.wikipedia.org/wiki/Geometric_transformation "Geometric transformation").
> 
> – [Scalar (physics)](https://en.wikipedia.org/wiki/Scalar_(physics)) (Wikipedia)

So scalar really started as a “thing which scales other things” in the first place and “just a number” in the second.
