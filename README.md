# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emanuelbalogun/lotide`

**Require it:**

`const _ = require('@emanuelbalogun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `flatten(arr)`: flatten arrays to 1-dimension e.g _flatten(["1",["2","3"]]) =>["1,"2","3"]
* `takeUntil(arr,callback)`: returns the element of the array until the call back function is satisfied
* `head(arr)`: Returns the head of the array i.e the first elemnt of the array
* `letterPosition(sentence)`: Returns the postions of a letter in a sentence
* `map(array, callback)` : Returns arrays that satisfy the callback function
* `middle(arr)` : Return as the middle of the array as another array
* `without(sourcearray,itemToRemove) `: Return sourcearray without the the itemToRemove
* `tail(array) ` : Returns the array without the head
* `findkey(obj,callback) ` : Returns the object key where the callback condition is satisfied
* `findKeyByValue(obj,searchvalue)` : Return the key of the object where the value is same as searchvalue
* `countLetters(arg) ` : Return the count of each distinct letter in the arg
* `eqObjects(obj1,obj2) ` : Return boolean after comparing the equality of two objects 
* `eqArray(arr1, arr2) ` : Return boolean after comparing the equality of two arrays