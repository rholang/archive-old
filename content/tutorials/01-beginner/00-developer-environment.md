---
title: Development Environment
description: Everything you need to know to get up and running with Atlaskit
---
# Beginners Tutorial
Written by Joshy Orndorff

In order to run the rholang snippets in this tutorial, you will need some kind of development environment. This is not an exhaustive guide to rholang development tools or stacks. Rather, it shows a few common basic development environments to get you started. 

## RChain Cloud 
Members of the RChain community provide a public web-based [online rholang interpreter](http://rchain.cloud) ([mirror](https://rchaincloud.inblock.io)). This tool is the easiest way to get started and does not require installing any software.

## VSCode Plugin
This is the Visual Studio Code extension for the Rholang programming language. It has support for syntax highlighting and code evaluation with error highlighting.
[Marketplace VSCode](https://marketplace.visualstudio.com/items?itemName=tgrospic.rholang)

## Cryptofex IDE
Pyrofex is developing an up-and-coming integrated development environment called [Cryptofex](https://cryptofex.io/). Cryptofex runs natively on windows, mac, and linux/. It offers rholang syntax highlighting and is capable of evaluating rholang code internally or with a running RNode. The IDE also supports ethereum development.

## Local Node
The tried and true way to run rholang code is to start up your own local RNode and use its rholang interpreter. First, you'll have to [install RNode](https://rchain.atlassian.net/wiki/spaces/CORE/pages/428376065/User+guide+for+running+RNode) for your platform.

For novice learners there are step-by-step guides on setting up a node using [AWS](https://blog.rchain.coop/running-rnode-0-5-3-on-amazon-ec2/) or [Docker](https://blog.rchain.coop/running-rnodev-0-6-x-with-docker/).

Once RNode is installed, you can run a basic standalone node
```bash
$ rnode run -s -n
```

In a separate terminal, you can use RNode's eval mode to evaluate code.

```javascript
$ rnode eval intersection.rho
Evaluating from intersection.rho

Result for intersection.rho:
Deployment cost: CostAccount(39,Cost(1132))
Storage Contents:
 @{Unforgeable(0xb19519ab773d1ec4ce96f1b71b748552e4a084dfc9942371717f5cb87e818879)}!(@{"name"}!(Nil)) | @{Unforgeable(0xb19519ab773d1ec4ce96f1b71b748552e4a084dfc9942371717f5cb87e818879)}!(@{"age"}!(Nil)) | @{"world"}!("hello") | for( x0, x1 <= @{Unforgeable(0x01)} ) { Nil } | for( x0, x1, x2, x3 <= @{"secp256k1Verify"} ) { Nil } | for( x0, x1 <= @{"sha256Hash"} ) { Nil } | for( @{{@{"name"}!(_) | _ /\ @{"age"}!(_) | _}} <= @{Unforgeable(0xb19519ab773d1ec4ce96f1b71b748552e4a084dfc9942371717f5cb87e818879)} ) { @{Unforgeable(0x00)}!("Both name and age were in the data") } | for( x0, x1 <= @{Unforgeable(0x03)} ) { Nil } | for( x0, x1, x2, x3 <= @{"ed25519Verify"} ) { Nil } | for( x0, x1 <= @{"blake2b256Hash"} ) { Nil } | for( x0 <= @{Unforgeable(0x02)} ) { Nil } | for( x0 <= @{Unforgeable(0x00)} ) { Nil } | for( x0, x1 <= @{"keccak256Hash"} ) { Nil }
```

Some of RNode's output is shown in the same terminal that you run the code in. But other output comes directly from the node (the first terminal). So be sure to check both places until you're familiar with what output is displayed where.
