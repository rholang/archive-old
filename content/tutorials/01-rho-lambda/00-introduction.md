---
title: Rholang and Lambda Calculus
description: Everything you need to know to get up and running with Atlaskit
---
# Rholang and Lambda Calculus
Written by Lucius Gregory Meredith and Alex Bulkin

How to represent data as computational behavior

## Introduction and motivation
One of the most remarkable discoveries of the computational calculi, such as the 𝛌-calculus, and the π-calculus, comes under the heading “data as behavior”. The paradigmatic example is Church’s encoding of the natural numbers (https://en.wikipedia.org/wiki/Church_encoding), building on the insights of Peano Arithmetic (https://en.wikipedia.org/wiki/Peano_axioms). Essentially the idea isID that numbers are computations, aka programs, or processes. In this scheme 0 is the program that does nothing, and we have a higher order program, sometimes called successor, that takes a program representing a number and adds 1 to it. 

The programmatic interpretation of data, such as quantity or number is as useful as it is possible to interpret other arithmetic operations, such as multiplication, calculation of inverses, and radicals, consistently within the representation. The extent to which this can be done efficiently within the model is the extent to which it affords a number of potentially interesting capabilities, such as using programmatic representations of quantity to capture notions such as infinite precision calculation.

Another example of data as behavior is Church’s encoding of the booleans (https://en.wikipedia.org/wiki/Church_encoding). Such encodings also have the added benefit of providing a rich set of examples through which to understand the model of computation being used to represent the familiar data types. As such, any model of computation worth its salt needs to be able to provide this basic account of data as behavior for the bulk of the familiar data types, such as the natural numbers and the booleans.

The mobile process calculi are no different in this respect and Milner understood this, which was part of the motivation for the paper: [the Polyadic π-calculus: a Tutorial](http://www.lfcs.inf.ed.ac.uk/reports/91/ECS-LFCS-91-180/) in which he provides just such encodings, and then goes on to provide encodings of the fundamental collection type, the linked list. The rho calculus, and rholang (the blockchain contracting language based on it), being derived from the π-calculus, and into which one can give a full and faithful translation of the π-calculus is able to directly support Milner’s encoding of these basic data types.

However, the higher-order nature, as well as the reflective nature of the calculus makes it possible to not only give much more compact encodings, but also to encode quite simply and directly much more sophisticated notions of numbers, such as Conway’s surreal numbers. Here we provide a brief description of these encodings with a discussion of the intuitions behind them.
