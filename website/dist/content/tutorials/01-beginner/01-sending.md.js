(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{1013:function(n,e,t){"use strict";t.r(e);e["default"]={content:'# Sending \nThere is a long-standing tradition in programming that your first program should say "Hello World". Here\'s the simplest rholang code to put that text on the screen.\n\n## Say Hello\n\n!["Person waiving hello"](./images/sending-helloWorld.png)\n\n```javascript\nnew stdout(`rho:io:stdout`) in {\n  stdout!("Hello World!")\n}\n```\n\n### Exercise\nMake the program print "Rholang rocks!" instead of "Hello World".\n\n## WTH is stdout?\n\n![Channels are like mailboxes for sending messages](./images/sending-mailbox.png)\n\nThe heart of rholang is communicating on channels. Channels are communication lines that you use to send and receive messages. To send a message on a channel, you use the `!` character.\n\n![Redo this diagram!](./images/sending-sendSyntax.png)\n\nWe created the channel `stdout` on the first line of the program with `new stdout`. You\'ll create lots of channels as you learn rholang. We also gave our channel a special power by including `(rho:io:stdout)`. More on that later, but for now just know that you need that part in parentheses to make text actually appear on the screen.\n\n\n## Using other channels\n\n![Sent messages wait to be received here in "message purgatory"... JK, it\'s called the "tuplespace"](./images/sending-mailboxes.png)\n\nYou can actually send messages on lots of channels, not just `stdout`. But unlike `stdout` they won\'t display on the screen because we won\'t add any special powers to them.\n\n```javascript\nnew randoChannel in {\n  randoChannel!("This won\'t be on the screen")\n}\n```\n\nSo where do the other channels go then? Nowhere! Not yet anyway. The messages just sit there waiting for someone (or some process) to receive them. We\'ll learn how to receive messages in the next lesson. The place where messages sit in the meantime is called the "tuplespace".\n\nMake sure your message is sitting in the tuplespace. You should see some text like this depending on which developer environment you use.\n\n```javascript\nStorage Contents:\n @{"RandoChannel"}!("This won\'t be on the screen") | for( x0, x1 <= @{Unforgeable(0x01)} ) { Nil } | for( x0, x1, x2, x3 <= @{"secp256k1Verify"} ) { Nil } | for( x0, x1 <= @{"sha256Hash"} ) { Nil } | for( x0, x1 <= @{Unforgeable(0x03)} ) { Nil } | for( x0, x1, x2, x3 <= @{"ed25519Verify"} ) { Nil } | for( x0, x1 <= @{"blake2b256Hash"} ) { Nil } | for( x0 <= @{Unforgeable(0x02)} ) { Nil } | for( x0 <= @{Unforgeable(0x00)} ) { Nil } | for( x0, x1 <= @{"keccak256Hash"} ) { Nil }\n```\n\n\n\n## Doing two things at once\n![Rather than following an ordered list, all ingredients are added concurrently.  Looks delicions](./images/sending-cooking.png)\n\nIn rholang we don\'t tell the computer to do one thing, then another, then a third. Rather we tell it all the things to do, and it does them "concurrently," or all at once.\n\n```javascript\nnew chan1, stdout(`rho:io:stdout`) in {\n  stdout!("I\'m on the screen")\n  |\n  chan1!("I\'m in the tuplespace")\n}\n\n```\n\nThe `|` is pronounced "parallel", or "par" for short.\n\n\n### Exercise\nSend the message "1 large pepperoni please" on a channel called "pizza shop".\n\n### Exercise\nSend "Hi Mom" on the channel "Mom\'s Phone".\n\n### Exercise\nPrint two messages, "Rick" and "Morty", on the screen in one program.\n\n\n\n## Quiz\n\nWhat will `stdout!("Programming!")` print to the screen?\n- [x] Programming!\n- [ ] stdout!\n- [ ] Nothing\n\n\nWhat channel does `what!("Up")` send a message on?\n- [ ] `Up`\n- [x] `what`\n- [ ] `what`\n- [ ] `stdout`\n\n\nWhich does rholang do first in\n\n```javascript\nstdout!("Dogs")\n|\nstdout!("Cats")\n```\n- [ ] prints "Dogs"\n- [ ] prints "Cats"\n- [x] Neither. They are concurrent\n\n\n### Exercise\nThere is also a special channel called `rho:io:stderr`. Check out what happens when you send to it. ([what\'s the difference?](https://en.wikipedia.org/wiki/Standard_streams))\n',data:{title:"Sending",description:"Everything you need to know to get up and running with Atlaskit"},isEmpty:false,excerpt:""}}}]);