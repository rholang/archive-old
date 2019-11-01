---
title: Getting Started
description: Everything you need to know to get up and running with Atlaskit
---
Recently we learned how unforgeable names can restrict the use of a channel to those who know the name. We've also see how state channels can be used to store data and methods can be used to modify encapsulated data. In this lesson we'll see how methods that are placed on unforgeable names lead to a tremendously useful design pattern known as "object capabilities".

## Object Capabilities

An everyday example of an object capability is the key to your home or car. Possessing the object gives you the capability to enter the home or start the car. With object you also have the ability to delegate by giving to key or a copy of the key to someone else.

In this lesson we'll build up a few example projects that uses state channels, and object capabilities. We'll see that object capabilities can be used more generally than bundles to grant permissions such as reading and writing data, but also more abstract capabilities like reseting a counter or deleting a facebook account.

## ATC Revisited
Let's revisit the air traffic control example from lesson 4. Previously controllers were able to broadcast weather and runway information by using a repeated send. But they were not able to update the information. And we all know weather can change unpredictably. So in this example we'll store the current information on a state channel, and give the controllers a capability to update it as necessary.

```javascript
new stationFactory, stdout(`rho:io:stdout`) in {
  contract stationFactory(initialMessage, getInfo, setInfo) = {
    new currentMessage in {
      // Populate the initial message
      currentMessage!(*initialMessage)
      |

      // Owner can update the message anytime
      contract setInfo(newMessage) = {
        for (msg <- currentMessage) {
          currentMessage!(*newMessage)
        }
      }
      |

      // User tunes in for latest message
      contract getInfo(return) = {
        for (msg <- currentMessage){
          return!(*msg)
          |
          currentMessage!(*msg)
        }
      }
    }
  }
  |

  // Controllers create new station with private set capability
  // and public get capability
  new airportInfo, set in {
    stationFactory!("Weather is nice", *airportInfo, *set)
  }
  |
  // Listener tunes in to receive latest message
  airportInfo!(*stdout)
}
```

It may seem natural to use a read-only bundle for tuning into the station. However, if we use a bundle, then the first listener to receive the message, would consume it from the state channel. It wouldn't be left for other pilots to receive. In order to ensure that the message is persisted like we want, we handle all access to the state channel ourselves, and only give the pilots a capability to query for the the correct message.

How would the ATCs update the information?
- [x] `set!("Strong crosswinds, be advised")`
- [ ] `setInfo!("Strong crosswinds, be advised")`
- [ ] `getInfo!("Strong crosswinds, be advised")`
- [ ] `stationFactory.setInfo!("Strong crosswinds, be advised")`

### Exercise
Write more thorough tests to make sure the ATCs can update the status successfully, and that pilots cannot

## Savings Account
In this example we'll write code to model a simple savings account in rholang. It will have deposit, withdraw, and check methods.

Unlike with our counter, a savings account needs to be secure. We don't want just anyone knowing our balance, or worse, withdrawing it.

Here is some starter code to consider

```javascript
new openAccount in {
  // This contract registers a new account and creates its methods.
  contract openAccount(initialDeposit, deposit, withdraw, check) = {
    new balanceCh in {
      balanceCh!(*initialDeposit)
      |

      // Withdraw Contract
      contract withdraw(amount, ack) = {
        for (old <- balanceCh) {
          balanceCh!(*old - *amount) |
          ack!(Nil)
        }
      }

      // Deposit Contract

      // Check contract
    }
  }
  |

  // Customer Sarah creates an uses an account
  new sarahDeposit, sarahWithdraw, sarahCheck, ack in {
    openAccount!(10, *sarahDeposit, *sarahWithdraw, *sarahCheck) |
    sarahWithdraw!(3, *ack) |
    for (_ <- ack) {
      Nil// TODO check balance here
    }
  }
}
```

### Exercise
Fill in the remaining methods in the account.

Which contract serves as a factory?
- [ ] `check`
- [ ] `withdraw`
- [ ] `deposit`
- [x] `openAccount`

Our current savings account allows negative balances, but probably it shouldn't. Think about how you might try to solve that issue. We'll learn the proper tool to do that in our next lesson.

## Stealing Funds
Try to write the code Eve would need to par in to steal Sarah's funds. I bet you can't think of any. That's because only Sarah has access to the unforgeable names that control the account.


If Sarah wanted to allow her friend Stephanie to deposit into her bank account, but not check or withdraw, what code should she run?
- [ ] `stephanie!(*sarahWithdraw)`
- [x] `stephanie!(*sarahDeposit)`
- [ ] `sarahWithdraw!("enable", *stephanie)`
- [ ] `openAccount!(10, *sarahDeposit, @"sarahWithdraw", @"sarahCheck")`


## Two Kinds of Factories
So far all of our factory methods have required us to pass in names on which to build the contracts. In the savings account example, those names were `check`, `deposit`, and `withdraw`. I call this a "BYOC" or "bring your own channel" factory. The BYOC technique has the advantage that the user can supply any names she likes including names she got from other contracts or public names.

Another technique is to allow the factory to create the necessary unforgeable names and send them back to the caller. I call this the a "full service" factory. If you don't require the flexibility of passing in arbitrary names, a full service factory is often less hassle.

### Exercise
Convert the savings account from byoc factory to to full service factory.

Now that you've converted the savings account, is it still possible for Sarah to make her deposit capability public?
- [ ] No; she can no longer pass in a public name
- [ ] No; she doesn't have access to do so
- [x] Yes; she just needs to make the new capability public herself
- [ ] Yes; just like before


## Abortable Rocket Launch
Back when we first learned the join operator we considered a scenario in which two operators must both give clearance to launch a rocket. We desired that they should also be able to retract the clearance.

This problem can be solved by giving the operator an abort button when they give their launch command.

```javascript
new rocketFactory in {

  // When a new rocket is setup, a launch capability for each for each operator is passed in
  contract rocketFactory(aliceLaunch, bobLaunch, ack) = {
    new aliceReadyCh, bobReadyCh in {
      // Start out neither ready
      aliceReadyCh!(false)|
      bobReadyCh!(false)|

      contract aliceLaunch(ack) = {
        new aliceAbort in {
          for (_ <- aliceReadyCh) {
            aliceReadyCh!(true)
          }
          |
          contract aliceAbort(ack) = {
            for(_ <- aliceReadyCh) {
              aliceReadyCh!(false)
              |
              ack!(Nil)
            }
          }
          |
          ack!(*aliceAbort)
        }
      }
      |
      Nil // Bob contract goes here
      | ack!(Nil)
    }
  }
  |
  // Make a new rocket to test
  new aliceLaunch, bobLaunch, ack in {
    rocketFactory!(*aliceLaunch, *bobLaunch, *ack)|
    for (_ <- ack){
      Nil // Tests go here
    }
  }
}
```

### Exercise
Complete the above code with bob's launch logic and integration tests.

## Design Patterns
There are many common Object Capability design patterns. Many of the are explained and illustrated in [A Picturebook of Secure Cooperation](http://erights.org/talks/efun/SecurityPictureBook.pdf)

### Exercise
We will encounter many of these patterns as we work through the upcoming examples, but I encourage you to implement one or two of them in rholang right now.
