---
id: concurrency
title: Research
permalink: research/concurrency.html
redirect_from:
prev: getting-started.html
next: create-a-new-react-app.html
---
# Rholang

The Rho [R]evolution
Rho-calculus offers a completely different paradigm to computation on distributed systems.

### The 'concurrency puzzle'
A blockchain is —as the name implies— deeply *sequential*: it's a sequence (chain) of transaction blocks. This inherent sequential nature means that all transactions that happen on-chain need to be serialized and then assigned to a block. Everything happens truly "one at a time", like waiting in line at the local post office. Obviously, this serialisation leads to tremendous scaling challenges when one tries to scale a blockchain to the size of the internet.

The challenge then, to solve scaling, is to find pathways to achieve horizontal scaling —multiple things happening at the same time— while still being able to acheive consensus on a shared state, and avoid problems of doublespend and similar.


### The breakthrough
Rho-calculus represents an organic approach to distributed system programming by expressing the communication and coordination of many processes executing in parallel composition. The Rho-calculus execution model is fundamentally concurrent and naturally suited for writing software that can be formally verified. These properties give Rho-calculus scaling avenues without compromising security or other core properties. This is entirely unique.

For blockchains, fine-grained concurrency and provable end-to-end correctness are the two fundamental properties to unlock industrial-scale scalability, and the security to run contracts that are “too big to fail.”

### Rholang, meet Casper

RChain combines Rho-calculus with the Casper consensus mechanism to offer massive scalability and extremely high reliability. Built from the ground up to support massive scale DApps that need the robustness & reliability of correct-by-construction smart contracts.