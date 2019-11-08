(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{957:function(e,n){e.exports='---\ntitle: Commands for RNode\ndescription: Everything you need to know to get up and running with Atlaskit\n---\n# Commands for RNode\nCommands for calling rnode\n\n## Available shell commands\nWith RNode running, use `--help` to see available commands and subcommands.\n\n## Calling the API\nThe RNode API is a server side API. To access the local RNode server once you have RNode running, open a new window and invoke the RNode api with:\n\n```bash\nrnode <API call>\n```\n\n### Calling the API from a remote server\nYou can call the API of a remote RNode server by specifying the host server and host server port.\n\n<table class="wrapped confluenceTable tablesorter tablesorter-default" resolved="" role="grid">\n    <colgroup>\n        <col>\n            <col>\n                <col>\n                    <col>\n    </colgroup>\n    <thead>\n        <tr role="row" class="tablesorter-headerRow">\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Option: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Option</div>\n            </th>\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Description: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Description</div>\n            </th>\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Syntax: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Syntax</div>\n            </th>\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Argument Format: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Argument Format</div>\n            </th>\n        </tr>\n    </thead>\n    <tbody aria-live="polite" aria-relevant="all">\n        <tr role="row">\n            <td class="confluenceTd">Host Server</td>\n            <td class="confluenceTd">The IP address of the server that will receive the call</td>\n            <td class="confluenceTd">--grpc-host</td>\n            <td class="confluenceTd">100.10.25.75</td>\n        </tr>\n        <tr role="row">\n            <td class="confluenceTd">Host Server port</td>\n            <td class="confluenceTd">The port for the gRPC API on the server listening for calls</td>\n            <td class="confluenceTd">--grpc-port</td>\n            <td class="confluenceTd">40401</td>\n        </tr>\n    </tbody>\n</table>\n\nThis is an example of an API call to a remote server\n```bash\n./bin/rnode --grpc-host IP.Address.of.server --grpc-port 40401 repl\n```\n\n## Find your node address, version, and peer count\nYou can ask RNode to provide its status to report the RNode address, version, and peer count.\n\n```bash\ncurl -s http://localhost:40403/status\n```\nReport status in Docker\n```bash\nsudo docker exec -ti <containername> curl -s http://localhost:40403/status\n```\nExample of a status request response\n```bash\n{"address":"rnode://4fa269b79e781af2c079713772cfc5dbd7dc1569@52.119.8.64?protocol=40400&discovery=40404","version":"RChain Node 0.9.4.git8a4c9939 (8a4c99394c3a22831c2eadef7cdde7dec35238d7)","peers":7,"nodes":44}\n```\nRNode offers two types of counts of peers. peers are the number of nodes you are connected to via the Kademlia protocol and the ones that are able to pass messages such as blocks. nodes are the number of nodes found as part of node discovery.\n\n## Get a count of blocks in the DAG\nUse this command to show the number of blocks in the DAG according to your node. \n\n\nReport status in Docker\n```bash\nrnode show-blocks\n```\nGet a count of blocks in Docker\n\nReport status in Docker\n```bash\ndocker run -it --rm --network rnode-net --name rnode -v $HOME/var/rholang:/var/ rchain/rnode:latest --grpc-host rnode2 show-blocks\n```\n\n## Generate a public/private key set\nYou can use the RNode software to generate either a secp256k1 public/private key set to use when deploying Rholang or in other scenarios where providing keys is a requirement. With the release of RNode v0.9.7 the platform uses the secp256k1 algorithm. \n\n```bash\nrnode keygen --algorithm secp256k1 --private-key-path <arg>\n```\n\n'}}]);