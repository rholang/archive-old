(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{978:function(e,t,o){"use strict";o.r(t);t["default"]={content:"# Casper CBC\n\nIn the context of blockchain technologies, the consensus algorithm is what allows everyone on the network to confidently know the current state of things and that when they engage in transactions which change the state others will recognize the change too. \n\nFor the specific case of cryptocurrencies, this means that if I accept a payment from another user that I can be confident they actually have the amount they are offering me, and that others will recognize that I have that amount post-transaction and will accept it from me in future transactions.\n\n## Proof-of-work (PoW)\n\nProof-of-work (PoW) consensus algorithms (one famously used by BitCoin) accomplish this by making it computationally expensive to process transactions, thus making it unprofitable to attempt to scam the network (e.g. through a double spend). This has the serious drawback of consuming a great deal of energy even though the goal of providing security through making dishonest behaviour unprofitable could be accomplished in other ways. This is the main idea behind proof-of-stake (PoS); provide the same guarantees as PoW through other economic means than the expense of computational hardware. One central idea is that dishonest behaviour can be identified and punished such that it is less profitable than behaving honestly.\n\n## Correct-by-construction (CBC)\n\nCasper is a particular family of proof-of-stake algorithms with strong mathematical foundations first described by an Ethereum research group. Such foundations mean that properties of CBC Casper algorithms are provable and therefore provide the highest degree of certainty that they provide exactly what is needed for a secure and efficient network.\n",data:{title:"Casper CBC",description:"Everything you need to know to get up and running with Atlaskit"},isEmpty:false,excerpt:""}}}]);