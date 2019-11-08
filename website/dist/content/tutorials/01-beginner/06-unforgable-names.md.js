(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{1002:function(e,n,t){"use strict";t.r(n);n["default"]={content:'\n# Unforgable Names\n\nWe\'ve learned how to receive messages with `for` and `contract`. Both of these constructs "bind" variables. A variable is considered bound if has an actual value (a channel or a process) attached to it.\n\n## Bound and Free Variables\n\nConsider this real-world example. My sister\'s name is Sarah. When I speak to my family members about "Sarah" they know who I am talking to because they also know my sister. So "Sarah" is a bound variable. It is bound to the person who is my sister. But if I walk up to a random person on the street and talk about "Sarah" they may understand the general point of the story, but they do not know who it is about. Because for them "Sarah" is not bound to any person. For the random stranger, "Sarah" is a "free variable."\n\nGetting back to rholang, `order` is initially a free variable, but it gets bound to whatever message comes in on the `coffeeShop` channel.\n\n```javascript\nfor (order <= coffeeShop) {\n  stdout!("Coffee Order Received")\n}\n```\n\nThe same is true when we use `contract`s.\n\n```javascript\ncontract coffeeShop(order) = {\n  stdout!("Coffee Order Received")\n}\n```\n\n\nState whether `x` is bound or free in each of the following code snippets.\n\n`for (x <- y){Nil}`\n- [x] Bound\n- [ ] Free\n- [ ] Neither\n\n`for (y <- x){Nil}`\n- [ ] Bound\n- [x] Free\n- [ ] Neither\n\n`new x in { x!(true) }`\n- [x] Bound\n- [ ] Free\n- [ ] Neither\n\n`contract x(y) = { Nil }`\n- [ ] Bound\n- [x] Free\n- [ ] Neither\n\n`contract y(x) = { Nil }`\n- [x] Bound\n- [ ] Free\n- [ ] Neither\n\n`for (y <- x){Nil}`\n- [ ] Bound\n- [x] Free\n- [ ] Neither\n\n## The `new` Operator\n`for` and `contract` are perfect for binding variables inside of continuations. It turns out that the `new` operator also binds variables. What does it bind them to? Brand new channels that we can use to send messages on.\n\n```javascript\nnew pizzaShop, stdout(`rho:io:stdout`) in {\n\n  // Same contract as before\n  contract pizzaShop(order) = {\n    stdout!("Order Received.")\n  }\n  |\n  // Known customers can order because pizzaShop is bound here.\n  pizzaShop!("Extra bacon please")\n  |\n  pizzaShop!("Hawaiian Pizza to go")\n}\n```\n// But we can\'t order from here, because pizzaShop doesn\'t exist\n\n\nWhat happens when you try to order a pizza from outside of the `new` restriction.\n- [ ] The order works fine\n- [ ] The order works but takes much longer\n- [x] Error about top-level free variables\n- [ ] The code runs, but no order is received\n\nWe learned that all names quote processes. So what process does the `pizzaShop` name quote? Try printing the process to `stdout` to see\n- [ ] It quotes "pizzaShop"\n- [ ] It doesn\'t quote anything\n- [x] "Some Unforgeable hex code"\n\nIn rholang channels created with `new` don\'t give access to the underlying process that they quote. You can think of them as being "pure channels" if you like.\n\n## Private vs Unforgeable\n\n![Although the messages can no longer be stolen, they can still be eavesdropped on. You\'ve been warned.](./images/unforgable-eavesdropping.png)\n\n`new` is known as the restriction operator because it restricts use of the bound names that it creates to within its curly braces or "lexical scope". Within the world of the rholang these new names really are only visible within the correct scope, but remember that human programmers can look in to that world from the outside. That is especially true when working in a blockchain context.\n\nSo while a competing pizza shops (from outside the curly braces) can not _consume_ pizza orders intended for our shop, they can still read the orders with a block explorer. Occasionally programmers call `new` names "private", but a better term is "unforgeable", which explains the answer to the previous question.\n\n## Acknowledgement Channels\n\n![We acknowledge communications all the time in conversations](./images/unforgable-roger.png)\n\nOne common use of unforgeable names is "acknowledgement channels", usually called "ack" channels for short. Instead of confirming orders by printing to the screen and disturbing _everyone_, the pizza shop should really just let the _customer_ know that the order has been placed.\n\nTo do that the pizza shop needs to know how to contact the customer. So the customer should supply an acknowledgement channel to be called back on. Traditionally such a channel is named `ack`.\n\n```javascript\nnew alice, bob, pizzaShop in {\n\n  // Now we take an order and an ack channel\n  contract pizzaShop(order, ack) = {\n    // Instead of acknowledging via stdout, we use ack\n    ack!("Order Received.")\n  }\n  |\n\n  // Known customers can order because pizzaShop is bound here.\n  pizzaShop!("Extra bacon please", *alice)\n  |\n  pizzaShop!("Hawaiian Pizza to go", *bob)\n}\n```\n\nWhy don\'t the acknowledgements in the previous example show up on the screen?\n- [ ] There is a bug in the code\n- [ ] The orders were not received correctly\n- [x] The confirmation was not sent to `stdout`\n\n\n\n## Sending Names Gives Permission\nWe just saw how the customer can give the shop an ack channel to receive order confirmation. It turns out we can do even better. With our previous code, Bob could contact Alice on her ack channel. That means Bob could send a forged ack making Alice think the order was placed when really it wasn\'t. Really Alice and Bob should keep their unforgeable names under tight control. Because giving someone that name gives them the capability to contact you.\n\n```javascript\nnew pizzaShop in {\n\n  // Take orders and acknowledge them\n  contract pizzaShop(order, ack) = {\n    ack!("Order Received.")\n  }\n  |\n  \n  // Order a pizza and send a private ack channel.\n  new alice in {\n    pizzaShop!("One medium veggie pizza", *alice)\n  }\n}\n```\n\nThe solution is to create a new unforgeable name, and give it to the pizza shop so that only they can call you back. Even though the pizza shop is _outside_ of the `new alice`, it can still send on the channel because Alice gave it the channel\'s name. This is a wonderful way to delegate privileges.\n\nIn this example we trust the shop to only _send_ on the ack channel, but notice that it could also receive if it wanted to. We\'ll learn how to give out only some of those permissions in the next lesson on bundles.\n\nBob also wants to order a pizza and give a unforgeable ack channel. Where should he create his unforgeable channel?\n- [x] On his own line, after the alice code\n- [ ] On the same line Alice did\n- [ ] On the very first line of the program\n\n## `stdoutAck` and `stderrAck`\n\nNow that you understand ack channels, you should know about two other ways to print to the screen. They are channels called `stdoutAck` and `stderrAck`. They work just like their cousins from lesson 1, but they take an ack channel.\n\n```javascript\nnew myAckChannel,\n    stdout(`rho:io:stdout`),\n    stdoutAck(`rho:io:stdoutAck`) in {\n    \n  stdoutAck!("Print some words.", *myAckChannel)\n  |\n  for (acknowledgement <- myAckChannel) {\n    stdout!("Received an acknowledgement.")\n  }\n}\n```\n\nBy the way, did you ever notice the handful of stuff that always starts in a fresh tuplespace? Four of those things are the built-in receives for the screen-printing channels. The others are for cryptography. We\'ll discuss them later.\n\n\n### Exercise\n`stdout!("1") | stdout!("2") | stdout!("3")`\nNotice that this program does not print the numbers in any particular order. The calls happen concurrently. Imagine we really need these lines to print in order. Modify the code to use ack channels and ensure that the numbers get printed in order.\n\n### Exercise\nPredict how this program will run (what it outputs and how it reduces in the tuplespace). Then run it to test your prediction.\n\n```javascript\nnew myChan in {\n  myChan!("Hi There")\n}\n|\nfor (msg <- myChan) {stdout!(*msg)}\n```\n\nIf your prediction for the previous exercise was wrong, modify the program so it actually does what you predicted it would.\n\n\n\n## Quiz\n\nWhich name is bound in `for(x <- y){Nil}`\n- [x] `x`\n- [ ] `y`\n- [ ] `Nil`\n\n\nWhich name is bound in `new x in {Nil}`\n- [x] `x`\n- [ ] `y`\n- [ ] `Nil`\n\n\nIf `pizzzaShop` is a name, then what is `@pizzaShop`?\n- [ ] A name\n- [ ] A process\n- [x] Invalid syntax\n\n\n\nWhy did the pizzaAck code send `*bob` as an ack channel instead of `bob`?\n- [ ] No reason; it\'s just a style choice.\n- [x] Because `bob` is a channel, but we have to send processes.\n- [ ] That\'s special syntax for ack channels.\n',data:{title:"Unforgable Names",description:"Everything you need to know to get up and running with Atlaskit"},isEmpty:false,excerpt:""}}}]);