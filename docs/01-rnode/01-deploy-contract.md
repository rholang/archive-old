# Deploy a Rholang contract
Deploy a Rholang source file to Casper on an existing running node. The deploy will be packaged and sent as a block to the network depending on the configuration of the Casper instance.

## Deploy commands
The deploy command requires the following specifications in addition to the Rholang file:
* `--phlo-limit  <arg>`             The amount of phlo to use for the
                                    transaction (unused phlo is refunded).
                                    Must be positive integer.
* `--phlo-price  <arg>`             The price of phlo for this transaction
                                    in units dust/phlo. Must be positive
                                    integer.
* `--private-key-path  <arg>`       The deployer's file with encrypted
                                    private key.

##Deploy a Rholang contract to a known validator
Unless you are a validator in the RChain network or a private network, you will typically deploy Rholang to a known validator with the intent to add the contract to the blockchain.

```bash
rnode --grpc-host <address of known validator> deploy --phlo-limit <value> --phlo-price <value> --private-key-path <path to encrypted private ke> <path to .rho file>
```
## Deploy a Rholang contract to a known validator in Docker
```bash
docker run -it --rm --network rnode-net --name rnode-deploy1 -v $HOME/var/rholang:/var/ rchain/rnode:latest --grpc-host <address of known validator> deploy --from "0x1" --phlo-limit <value> --phlo-price <value> --private-key-path <path to encrypted private key> <path to Rholang file>
```
## Deploy returns a DeployID
A successful deploy returns a DeployID. You can use this ID to locate your deploy in a proposed block.

For example:

Here is a deploy made from an observer node to a validating node on a testnet:
```bash
root@kelly:~# rnode --grpc-host node1.devnet.rchain-dev.tk deploy --phlo-price 10000000 --phlo-limit 1 --private-key-path /keys tut-philosophers.rho
Password for private key file: ******
Response: Success!
DeployId is: 3045022100bbabe879eed9194ef371f312b0fa36d402409111d307a1cb01cc8c519fdb741502206051ecfcd79aad31764ab7b65ceec4c537489ea7359fc8f80472e74c819b4cb1
```
Once we hav the DeployID, we can locate the block containing that deploy.
```bash
root@kelly:~# rnode --grpc-host node1.devnet.rchain-dev.tk find-deploy --deploy-id 3045022100bbabe879eed9194ef371f312b0fa36d402409111d307a1cb01cc8c519fdb741502206051ecfcd79aad31764ab7b65ceec4c537489ea7359fc8f80472e74c819b4cb1
blockInfo {
blockHash: "2b7848babd7ea4bee52bd7e9990a5119a98b9482ac28e5e9b181bbf1a480d8bf"
blockSize: "35679"
blockNumber: 315
version: 1
deployCount: 2
tupleSpaceHash: "d7aa5b8e0a9a6bf1bbfd3f19715ad08996b5fdde8eb64200763a742d1f348ea7"
timestamp: 1560208996576
faultTolerance: -1.0
mainParentHash: "fb17569ab340486e2bcfb33910a87ea30f598288af2c420397f055f03b2687ec"
parentsHashList: "fb17569ab340486e2bcfb33910a87ea30f598288af2c420397f055f03b2687ec"
parentsHashList: "9100f449f0fa3501fc058eb78534545f27d79503366078033c33625636391604"
sender: "0443a5170db3ec242341864617f752a0e54d34213793b96c5708db72ce62a75e1a37af8f1dcb93b208fe807f408a30f6acd343330a5d27b3434c759ac5d231679f"
```
If the deploy has not yet been proposed in a block, you will receive the following:

```bash
Couldn't find block containing deploy with id:3045022100bbabe879eed9194ef371f312b0fa36d402409111d307a1cb01cc8c519fdb741502206051ecfcd79aad31764ab7b65ceec4c537489ea7359fc8f80472e74c819b4cb1
```
