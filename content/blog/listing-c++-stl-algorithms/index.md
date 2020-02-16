---
title: Listing C++ STL Algorithms
date: "2020-02-16T02:19:30Z"
description: Essentially all the C++ STL algorithms and their categories that you should know.
---

Recently, I came across a YouTube video on [105 C++ STL algorithms](https://www.youtube.com/watch?v=bFSnXNIsK4A). This made me realise how little I knew about the C++ STL, and that I should study it in greater detail to become a more effective C++ programmer.

Hence, I've decided to pen down my notes on the C++ STL here, starting with a list of algorithms and their categories in the C++ STL.

Credits to the YouTube video linked above and [the speaker's website](https://fluentcpp.com).

## Prelude: learning points

- Use STL algorithms to make your code more expressive (replace for-loops with the right algorithm)
- Understand the pre/post-requisites, time complexities, and implementations of the algorithms
- Understand what abstractions work well and complement the library with your own algorithms
- Use https://cppreference.com to read the documentation for each algorithm

## Permutations

### Heaps

- make_heap
- push_heap
- pop_heap
- sort_heap
- is_heap
- is\_heap\_until

### Sorting

- sort
- stable_sort
- partial_sort
- partial\_sort\_copy
- nth_element
- sort_heap
- inplace_merge
- is_sorted
- is\_sorted\_until

### Partitioning

- partition
- partition_copy
- stable_partition
- partition_point
- is_partition
- is\_partitioned\_until

### Other permutations

- rotate
- rotate_copy
- shuffle
- next_permutation
- prev_permutation
- reverse
- reverse_copy

### Modifiers

- stable\_sort, stable\_partition (stable_*)
- is\_sorted, is\_partitioned, is\_heap (is_*)
- is\_sorted\_until, is\_partitioned\_until, is\_heap\_until (is\_*\_until)

## Queries

### Numerics

- count
- count_if
- accumulate
- transform_reduce
- reduce
- partial_sum
- inclusive_scan
- exclusive_scan
- transform\_inclusive\_scan
- transform\_exclusive\_scan
- inner_product
- adjacent_difference
- sample

### Properties on 1 range

- all_of
- any_of
- none_of

### Properties on 2 ranges

- equal
- is_permutation
- lexicographical_compare
- mismatch

### Searching for a value in an unsorted range

- find
- find_if
- find\_if\_not
- adjacent_find

### Searching for a value in a sorted range

- equal_range
- lower_bound
- upper_bound
- binary_search

### Searching for a range within a range

- search
- search_n
- find_end
- find\_first\_of

### Searching for a relative value in range

- max_element
- min_element
- minmax_element

## Sets

- set_difference
- set_intersection
- set_union
- set\_symmetric\_difference
- includes
- merge

## Moving elements

- copy
- copy_n
- copy_if
- copy_backward
- uninitialized_fill
- move
- uninitialized_move
- move_backward
- swap_ranges

## Modifying values

- fill
- fill_n
- uninitialized_fill
- generate
- generate_n
- iota
- replace
- replace_if
- replace_copy
- replace_copy_if

## Changing structures

- remove
- remove_if
- remove_copy
- remove\_copy\_if
- erase
- unique
- unique_copy

## Raw memory

- uninitialized_fill
- uninitialized\_fill\_n
- uninitialized_copy
- uninitialized\_copy\_n
- uninitialized_move
- uninitialized\_move\_n
- destroy
- destroy_n
- uninitialized\_default\_construct
- uninitialized\_default\_construct\_n
- uninitialized\_value\_construct
- uninitialized\_value\_construct\_n

## Others

- transform
- for_each (This is meant for side-effects. Anything else is more appropriately expressed by other algorithms)
- for\_each\_n

## Boost library

- gather
- sort_subrange
- is_palindrome
- boyer_moore
- one_of
- ...and more!
