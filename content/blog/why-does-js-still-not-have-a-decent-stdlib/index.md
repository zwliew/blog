---
title: Why does JavaScript Still Not Have a Decent Standard Library?
date: 2020-02-29T06:20:22Z
description: "Despite the popularity of JavaScript, it still doesn't a standard library that rivals that of other popular languages like C++ and Java?"
---

It's 2020. According to Stack Overflow's Developer Survey in 2019, JavaScript is by far the most popular technology worldwide, sitting comfortably at 67.8% usage<sup>1</sup>.

If so, why do we still not have a standard library that provides the utilities like those for Python, Java and C++? The lack of such a library greatly hinders the productivity in writing JavaScript applications, and prevents it from being used for various applications.

Without a decent standard library, many common utilities have to be implemented from scratch, which is a recipe for disaster. Data structures capable of handling large inputs efficiently are tricky to implement both correctly and efficiently. Algorithms for manipulating data are similar in this regard. Surely, you don't want subtle bugs to run rampant in your program?

Furthermore, the lack of a decent standard library inevitably decreases productivity. Productivity, in the form of time spent, is a major concern when it comes to iterating quickly. Rolling your own implementation takes much time. Sure, you could opt to find a library that fits your needs on npm<sup>2</sup>. However, it is time-consuming to sieve out the well-maintained, correct, and efficient libraries from the many other low-quality ones. Whichever option you choose, you will end up wasting time.

Besides, the algorithmic knowledge of JavaScript developers suffer due to the lack of a standard library with proper implementations of algorithms and data structures. There has been an influx of JavaScript developers without prior formal knowledge of data structures and algorithms in recent years. They may not know much else other than arrays, hash tables, and sorts. They may not know of efficient techniques for computing values needed in their systems. They may also be unaware of the costs involved in manipulating the data in their programs.

Examples of inefficient algorithms in the wild include popping from the head of an array, lack of use of hash tables, and bubble sorting an array.

Note that the aforementioned examples are all really simple mistakes. In reality, applications handle way more complex data. In such cases, an in-depth understanding of data structures and algorithms is necessary.

The issue of the lack of understanding of data structures and algorithms amongst JavaScript developers can be largely mitigated with a well-maintained, correct, and efficient standard library. The availability of such implementations inform developers of better techniques compared to the ones they already know. The lower bound of the algorithmic knowledge of JavaScript developers increases. Ultimately, developers write more efficient programs.

While writing JavaScript applications, I've found the need for data structures and algorithms like queues, binary search, and selection algorithms. I've also needed simple numeric functions every now and then. Without a decent standard library, I've resorted to writing implementations of such functions from scratch. Every time I use my implementation of these functions, I remind myself, “_Why does JavaScript still not have a decent standard library?_”.

\[1\]: Data sourced from the [Stack Overflow Developer Survey 2019 - Most Popular Technologies](https://insights.stackoverflow.com/survey/2019#most-popular-technologies).

\[2\]: There are many of such libraries: [Moment.js](https://momentjs.com/), [Lodash](https://lodash.com/), and more. However, searching for such libraries that also fit your need is akin to searching for a needle in a haystack.
