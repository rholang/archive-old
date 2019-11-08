(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{987:function(e,t){e.exports="---\nid: rho-calculus\ntitle: Rho-Calculus\npermalink: research/rho-calculus.html\nredirect_from:\nprev: getting-started.html\nnext: create-a-new-react-app.html\n---\n\nMuch of the innovations that RChain brings to the world of blockchain and driven by fundamental breakthroughs in distributed systems programming, with the development of the Rho-calculus. Below, find an overview of the most relevant papers and sources underpinning the RChain technology.\n\n##Introduction into the Rho-Calculus\n\n[Intro to Design of Computational Calculi][intro] \n\n[intro]: https://www.rchain.coop/blog/intro-to-design-of-computational-calculi-4-1-injecting-names-into-rho-calculus/\n\n\n## Rho-calculus\n\nthe RChain execution model is derived from the syntax and semantics of rho-calculus. The rho-calculus is a variant of the π-calculus that was introduced in 2004 to provide the first model of concurrent computation with reflection. “Rho” stands for reflective, higher-order.\n\nThose unfamiliar with the π-calculus are strongly encouraged to explore it. The π-calculus is the first formal system to successfully model networks where nodes may regularly join and drop from the network. It assumes fine-grained concurrency and process communication i.e. two processes may be introduced by a third process. The rho-calculus extension inherits all of those features and adds reflection.\n\n- [The Polyadic pi-Calculus: A Tutorial](http://www.lfcs.inf.ed.ac.uk/reports/91/ECS-LFCS-91-180/) –by Robin Milner\n- [Higher category models of the pi-calculus](https://arxiv.org/abs/1504.04311) —by Mike Stay &amp; Lucius Gregory Meredith\n- [Logic as a Distributive Law (PDF)](https://arxiv.org/pdf/1610.02247v3.pdf) —by Mike Stay &amp; Lucius Gregory Meredith\n- [Contracts, Composition, and Scaling: The Rholang specification](https://developer.rchain.coop/assets/rholang-spec-0.2.pdf)  \n  Draft version 0.2 Feb 2018  \n  Lucius Gregory Meredith, Jack Pettersson, Gary Stephenson, Michael\n  Stay, Kent Shikama, Joseph Denman\n\n\n## Casper CBC\nCasper is a family of Proof of Stake consensus protocols, developed in collaboration with Vlad Zamfir.\n\n- [A Template for Correct-by-Construction Consensus Protocols](https://github.com/ethereum/research/blob/master/papers/cbc-consensus/AbstractCBC.pdf) –by Vlad Zamfir\n- [Casper the Friendly Ghost](https://github.com/ethereum/research/blob/master/papers/CasperTFG/CasperTFG.pdf) –by Vlad Zamfir\n- [The History of Casper (Medium series)](https://medium.com/@Vlad_Zamfir/the-history-of-casper-part-1-59233819c9a9) —by Vlad Zamfir\n\n\n## RChain Platform Architecture\n\n - [RChain Platform Architecture][archdoc] by Ed Eykholt, Lucius Meredith, Joseph Denman July 2017\n\n**Abstract**: The RChain Platform Architecture description provides a\nhigh-level blueprint of the RChain decentralized, economically\nsustainable public compute infrastructure. While the RChain design is\ninspired by that of earlier blockchains, it also realizes decades of\nresearch across the fields of concurrent and distributed computation,\nmathematics, and programming language design. The platform includes a\nmodular, end-to-end design that commits to correct-by-construction\nsoftware and industrial extensibility.\n\n[archdoc]: https://rchain-architecture.readthedocs.io/en/latest/\n"}}]);