---
id: running-rnode-docker
title: Running RNode (non-Docker)
permalink: docs/running-rnode-docker.html
redirect_from:

prev: getting-started.html
next: create-a-new-react-app.html
---
These are the run commands to start RNode (non-Docker)

## To connect to an existing network
```bash
docker run -it --rm --network rnode-net --name rnode1 -v $HOME/var/rnode1:/var/lib/rnode rchain/rnode:latest run  --bootstrap "<bootstrap node address>" --map-size 1099511627776
```
>Note
>
>Docker for Mac will only work with static NAT and port forwarding.  network=host does not work on Mac. See RNode supported network configuration for more information on static NAT and port forwarding.

* Bootstrap address - Enter the address of the bootstrap node you want to connect with. See RNode bootstrap addresses for bootstrap nodes supported by the RChain core development team.
* Validator private key - Insert the key if you are a validator of test net, or if you are creating a private network and have a bonds file included in your genesis block.
* Network configuration - If you want to specify your ports, include --p in the run command. If you want to specify your host, include --host in the run command.

## Create a RNode network
If this is your first time running RNode, you need to create a Docker network to support RNode operation. Unless you wipe your Docker system, you only need to do this once.

```bash
docker network create rnode-net
```

## Create the data directory
```bash
mkdir $HOME/rnode
```



## To run a standalone node
```bash
docker run -u root -it --network rnode-net --name rnode-server-local -v "$HOME/rnode":/var/lib/rnode rchain/rnode:latest run --standalone
```

## Tips for working with RNode in Docker
### Naming Containers
Once the network is created, the server container will be put into the network, and then referenced by the client.  It's easier if you give your server container a name.  This is an example of of naming a server 'rnode-server-local'.  

```bash
docker run --name rnode-server-local rchain/rnode:latest
```

### Using the --host flag
If you want to create a local docker network which consists of some nodes and a bootstrap node, you will have to specify the nodes' addresses with the --host flag. Make sure to not use the nodes' IP addresses for the --host flag. Instead use the hostnames. If the network is called 'rnode-net' and you named a docker container 'rnode-server-local', the hostname of that docker container is 'rnode-server-local.rnode-net'.

### Sharing directories with containers
To share a directory with a container use the volume command.  You will need to create a directory on your local system that will store all of the RNode related files.  Once the directory is created, you can share this directory with the Docker container by using the volume command.   Below is an example of how the volume parameter can be specified as part of a run command.

RNode requires the path /var/lib/rnode exist on startup.  Each instance of RNode requires its own separate /var/lib/rnode directory.

```bash
docker run -v "path to local directory":/var
```
