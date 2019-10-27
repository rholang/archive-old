# Running RNode (non-Docker)
These are the run commands to start RNode (non-Docker)

## To connect to an existing network

> **Note**
>
> Please fill in the ``<network ID>``. The current network ID is posted on [RChain public testnet information](https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information)
```bash
rnode run --network <network ID> --map-size 1099511627776 --bootstrap "rnode://25a48e34b10c5917aa21bdbbf45da56d3e7129c6@node0.testnet.rchain-dev.tk?protocol=40400&discovery=40404"
```

* `--network` ... - Network ID, used to differentiate between multiple RChain networks. The current network ID is posted on [RChain public testnet information](https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information)
* `--bootstrap` ... - Address of the bootstrap node you want to connect with. The bootstrap node of Public Testnet address is
rnode://25a48e34b10c5917aa21bdbbf45da56d3e7129c6@node0.testnet.rchain-dev.tk?protocol=40400&discovery=40404.
the RChain public testnet.
* `--map-size` 1099511627776 - LMDB map size. This is an interim solution until the sufficient size is set automatically.

## To run a standalone node
```bash
rnode run -s
```


