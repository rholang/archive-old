---
title: Rholang
description: Everything you need to know to get up and running with Atlaskit
---
# Rholang
Rholang is a new programming language designed for use in distributed systems.  Like all newborn things, it is growing and changing rapidly. This document describes the syntax in Rholang.

Rholang is "process-oriented": all computation is done by means of message passing.  Messages are passed on "channels", which are rather like message queues; however, the channels behave more like bags (multisets) rather than queues, since there is no implicit ordering on messages.  

Rholang is completely asynchronous, in the sense that while you can read a message from a channel and then do something with it, you can't send a message and then do something once it has been received, at least, not without explicitly waiting for an acknowledgment message from the receiver. Every channel has a name, and every name denotes a unique channel.

## Getting started

Get started with Rholang by selecting one of the options below.
* __Run Rholang on RNode__ - Write Rholang contracts in an editor of your choice and run them on RNode using either the REPL or EVAL modes. [Get started](https://github.com/rchain/rchain/releases) with the latest version of RNode.
* __Run Rholang on a web interface__ - This [web interface](http://rchain.cloud) was created by a RChain community member.
* __Run Rholang using Cryptofex IDE__ - This closed source [IDE](http://cryptofex.io/download) was created by Pyrofex.
* __Write Rholang using an IntelliJ plugin__ - This [Rholang IntelliJ plugin](https://github.com/tgrospic/rholang-idea) was created by a RChain community member.

## Rholang language specification
[Language specification](https://developer.rchain.coop/assets/rholang-spec-0.2.pdf)

