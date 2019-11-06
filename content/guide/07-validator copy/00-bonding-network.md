---
title: Bonding to a network
description: Everything you need to know to get up and running with Atlaskit
---
# Bonding to a network
To participate in the RChain proof-of-stake consensus protocol, you must stake bond on the network to become a bonded validator. Information about this process is not yet available.


## Joining the RChain test net
You can join the RChain test net. Please see [RChain public testnet](https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information) information for details about the version of software and the bootstrap address.

## Monitoring the Node
RNode features integration with Prometheus. [These instructions](https://github.com/rchain/rchain/blob/master/docker/node/README.md) describe a method for getting started with RNode metrics collection and display using Prometheus via Docker-compose.

## Visualizing the blockchain
To support debugging we have a process to collect information from the node and use it in graphviz to create a visualization of the DAG. Below are instructions for two methods for using this tool.

## Visualizing the blockchain when there are >6,000 lines
Once an active network has been running for a few hours, your call to vdag will likely generate >6,000 lines of output. In this scenario, you will need to have installed the Graphviz software and use it to create a .png file. Please see https://www.graphviz.org/download/ for information about installing and running Graphviz.

Once installed use the following command to generate a .png file based on vdag output.

```bash
rnode vdag | dot -Tpng >vdag.png
```

## Creating a private blockchain
You can create your own blockchain network. 

Prerequisites for a private blockchain

* 1 bootstrap node
* 2 other node instances running on a network where they can communicate with each other (peers of each other). 
* Keys for the node instances (these will be required for signing and creating the bond.txt file)
* A bond.txt file accessible by all node instances. You can either supply it, or use the system generated bonds file.
* A Rholang file to deploy across the network.

Steps to create a private blockchain

* Start the bootstrap node. This is the 1 node operating in standalone mode.
* Include the address of the bootstrap node in your run command for the peer nodes.
