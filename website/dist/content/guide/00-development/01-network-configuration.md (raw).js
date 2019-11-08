(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{949:function(n,o){n.exports="---\ntitle: Network Configuration\ndescription: Everything you need to know to get up and running with Atlaskit\n---\n# Network Configuration\n\nBy default RNode continuously attempts to connect to other peers. Successful connection to other nodes on the RChain network requires connectivity support from your network. \n\n> **Note**\n>\n> Please ensure, that your internet service provider or web-hoster has assigned you an IPV4 address. If your ISP is using dual stack or IPV6 (dual stack assignes you an IPV6 address), there is currently no bootstrap node, which you can connect to.\n\n> **Note**\n>\n>Normally the RNode Application is doing everything for you automatically, so you can go directly to [Installing RNode](./installing-rnode). Only in cases, where RNode is waiting for it's first connection for a longer time, you have to read the following instructions.\n\n## Background\n\nThe RNode software runs as a server on the RChain network.  The RNode communications software uses gRPC, which uses TLS to secure TCP connections between validators and read-only nodes. The RChain network is a peer to peer network. For a RNode server instance to properly communicate with the rest of the network, secure bi-directional communication must be possible. Validators must be able to send queries to each other and must be able to receive connections from other validators.\n\n## Supported Network Configuration\n\nRChain communications software supports this network configuration.\n\nRNode server → Router → Internet\n\nThe RNode server needs to be directly connected to the router.  The router needs to either support UPnP or have static NAT with port forwarding configured for ports 40400 - 40430.  If you wish to use a different set of ports, specify those at runtime with the --p option.\n\n## How Universal Plug and Play (UPnP) Works\n\nRNode supports the UPnP protocol, commonly available on retail routers today. When RNode detects a UPnP gateway device, such as your wireless router, the node software will configure the router's firewall rules automatically. In many small business and home networks, this allows the user to run RNode as a validator without having to reconfigure their network.\n\n> **Note**\n>\n>Node operators running Docker on Mac OS X will not be successful running RNode with UPnP. If you want to run with Docker on Mac OS X, you must configure static NAT and port forwarding manually. See \"Routers without UPnP Support\" below.\n\n\n## Test your network\n\n* Go to [http://canyouseeme.org](http://canyouseeme.org)\n* Enter '40400' for the port\nA success message means your configuration should be successful connecting to the RChain network.\n\nAn error message means your network configuration may not be successful connecting to the RChain network. You need to investigate your configuration and possibly make changes.\n\n## Routers without UPnP Support\nIf your router does not support UPnP, you will have to configure Static NAT and Port forwarding manually.\n\n>Information\n>\n>Refer to your router's documentation and user guide for specific instructions. \n\nAt a high level, you should:\n\n1. Assure the machine running RNode is connected to the router and turned on.\n2. Configure static NAT for the machine in the router configuration interface. \n3. Configure port forwarding for ports 40400 - 40430\nWhen configuration is complete, it should look something like this: \n <br><br/>\n\n<table>\n  <tr>\n    <th>Device</th>\n    <th>Allowed Applications </th>\n    <th>Protocol</th>\n    <th>Port Number</th>\n  </tr>\n  <tr>\n    <td>MyRNodeServer</td>\n    <td>RChain</td>\n    <td>tcp</td>\n    <td>40400-40430</td>\n  </tr>\n \n\n## Running Docker\nRunning RNode in Docker has additional network configuration requirements. You must. include explicit port mapping options in your run command with the --p option..  \n\nExample run command:\n```javascript\ndocker run -it -p 40400:40400 --name my_rnode_server -v \"$HOME/var\":/var rchain/rnode:latest run --default-timeout 6000 --no-upnp -b rnode://address_of_bootstrap_node\n```\n\n> **Note**\n>\n>Node operators running Docker on Mac OS X will not be successful running RNode with UPnP. If you want to run with Docker on Mac OS X, you must configure static NAT and port forwarding manually. See \"Routers without UPnP Support\" below.\n\n## Successful Connection\nLook in the console for connection confirmation.  Below is an example showing the run command through the confirmation of connection to the bootstrap node.\n\n```javascript\nroot@salt:~# rnode run --default-timeout 6000 -b rnode://7fa70d245268ed19253f18c802fccd22668a0211@52.119.8.68:40400 --validator-private-key d19bab22bed4d72422e5ae2dc37982635e1d894f5a63dc4f790836a86a05b7ba\n18:08:34.299 [main] INFO  c.r.n.configuration.Configuration$ - Starting with profile default\n18:08:34.321 [main] INFO  c.r.n.configuration.Configuration$ - Using configuration file: /root/.rnode/rnode.toml\n18:08:34.330 [main] WARN  c.r.n.configuration.Configuration$ - Can't load the configuration file: File /root/.rnode/rnode.toml not found\nINFO - trying to open ports using UPnP....\nINFO - No gateway devices found\nINFO - No need to open any port\n18:08:43.937 [main] INFO  c.r.node.configuration.Configuration - flag --host was not provided, guessing your external IP address\n18:08:44.190 [main] INFO  c.r.node.configuration.Configuration - guessed 52.119.8.64 from source: AmazonAWS service\nUsing data_dir: /root/.rnode\nNo certificate found at path /root/.rnode/node.certificate.pem\nGenerating a X.509 certificate for the node\nGenerating a PEM secret key for the node\n18:08:46.224 [main] INFO  coop.rchain.node.NodeRuntime - RChain Node 0.6.1 (acde1c1a2bc983838a38118653905b0c85ab9c58)\n18:08:46.225 [main] INFO  coop.rchain.node.NodeRuntime - Starting node that will bootstrap from rnode://7fa70d245268ed19253f18c802fccd22668a0211@52.119.8.68:40400\n18:08:46.501 [main] INFO  o.h.b.c.nio1.NIO1SocketServerGroup - Service bound to address /127.0.0.1:40402\n18:08:46.502 [main] INFO  org.http4s.server.blaze.BlazeBuilder -   _   _   _        _ _\n18:08:46.503 [main] INFO  org.http4s.server.blaze.BlazeBuilder -  | |_| |_| |_ _ __| | | ___\n18:08:46.503 [main] INFO  org.http4s.server.blaze.BlazeBuilder -  | ' \\  _|  _| '_ \\_  _(_-<\n18:08:46.503 [main] INFO  org.http4s.server.blaze.BlazeBuilder -  |_||_\\__|\\__| .__/ |_|/__/\n18:08:46.503 [main] INFO  org.http4s.server.blaze.BlazeBuilder -              |_|\n18:08:46.549 [main] INFO  org.http4s.server.blaze.BlazeBuilder - http4s v0.18.0 on blaze v0.12.11 started at http://127.0.0.1:40402/\n18:08:46.585 [kamon.prometheus.PrometheusReporter] INFO  kamon.prometheus.PrometheusReporter - Started the embedded HTTP server on http://0.0.0.0:40403\n18:08:46.659 [main] INFO  coop.rchain.node.api.GrpcServer$ - gRPC server started, listening on\n18:08:47.003 [main] INFO  coop.rchain.node.NodeRuntime - Listening for traffic on rnode://d533e024910f1c4c57eae88c0945a29fdc2ada6a@52.119.8.64:40400.\n18:08:47.025 [main] INFO  coop.rchain.comm.rp.Connect$ - Initialize protocol handshake to rnode://7fa70d245268ed19253f18c802fccd22668a0211@52.119.8.68:40400\n18:08:49.608 [grpc-default-executor-0] INFO  coop.rchain.comm.rp.Connect$ - Peers: 1.\n18:08:49.615 [grpc-default-executor-0] INFO  coop.rchain.comm.rp.Connect$ - Connected to rnode://7fa70d245268ed19253f18c802fccd22668a0211@52.119.8.68:40400.\n```\n\n## Error Messages\nThe RNode software automatically attempts to detect a UPnP gateway.  If you see the following message and are not able to connect to the bootstrap node, then you need to check that your network configuration is correct and your router supports UPnP.\n\n```\nINFO - trying to open port using uPnP....\nINFO - [OK] no gateway found, no need to open any port.\n```\nRNode will make 5 attempts to connect to the bootstrap.  After the fifth attempt, RNode will exit.  If your RNode cannot connect, you will see the following message.\n```\nFailed to connect to bootstrap (attempt 1/5)\n```\n"}}]);