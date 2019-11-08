(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{1010:function(e,n,t){"use strict";t.r(n);n["default"]={content:'\n# Additional Syntax \nBy now you can already build some actual projects. And you should do it! Before we dive into the next unit, let\'s learn some more practical syntax so you have the real-world tools you need need to build that next killer dapp.\n\n## Binary Operators\nThe first new syntax will be some binary operators. Binary operators take two operands, which is why they\'re called _bi_ -nary. Most of these are for arithmetic. Consider these examples.\n\n```javascript\nnew c2f, f2c in {\n\n  /**\n   * Converts Celcius temperatures to Farenheit. The conversion\n   * multiply by 9/5 and add 32\n   */\n  contract c2f(celcius, return) = {\n    return!((*celcius * 9 / 5) + 32)\n  }\n  |\n\n  contract f2c(farenheit, return) = {\n    Nil // TODO you complete this contract\n  }\n  |\n\n  new stdout(`rho:io:stdout`) in {\n    // 0 C should be 32 F\n    c2f!(0, *stdout)\n    |\n    // 100 C should be 212 F\n    c2f!(100, *stdout)\n  }\n}\n```\n\n### Exercise\nYour turn to implement the `f2c` contract. You can use the same two test cases in reverse to make sure you\'re getting the right result.\n\nThe final binary operator you should know is `++` which is used for "concatenation" or connecting two smaller things to make a bigger thing. The operator works for lists, which we\'ll learn about in the next unit, as well as strings which we already know about.\n\n```javascript\nnew greeter in {\n  contract greeter(name, return) = {\n    return!("Hello there, " ++ *name)\n  }\n  |\n  new stdout(`rho:io:stdout`) in {\n    greeter!("Joshy", *stdout)|\n    greeter!("Tom", *stdout)\n  }\n}\n```\n\nWhat would the code `stdout!("I" ++ "<3" ++ "rholang")` output?\n- [ ] I <3 rholang\n- [ ] ["I", "<3", "rholang"]\n- [x] I<3rholang\n- [ ] I++<3++rholang\n\n\n\n## Receiving Processes?\n\nWe always send ____ and receive ____.\n- [x] processes, names\n- [ ] processes, processes\n- [ ] names, names\n- [ ] names, processes\n- [ ] no such restriction\n\n\x3c!-- TODO: Another standing at a mailbox drawing. Maybe mix it up with the kind of mailbox that mounts on the front of your house or a mail slot or something. "Awww man, bills again? I wanted love letters." --\x3e\n\nThat was just a nice refresher from last unit. Hope your memory is holding up so far. If you\'ve been writing your own rholang code, you may have found yourself really wishing you could receive processes directly so you didn\'t have to type all those `*`s. This is a common situation, and luckily rholang has a nice solution. We do always have to receive names, but we can bind them to name syntax like `@myValue`. Since `@myValue` is a name, `myValue` must be a process.\n\nThis syntax allows us to do things like\n`for (@number <- someChan){double!(2 * number)}``\n\nWhat code could be parred with the previous code to leave the number `24` on `double`?\n- [ ] @number!(12)\n- [x] someChan!(12)\n- [ ] @number!(24)\n- [ ] double!(48)\n\n### Exercise\nRevisit the telephone game from lesson 3 and show that we could have used the `@message` pattern so `message` would be a process.\n\nWhat should replace the ... in `for(@x <- @y){stdout!(...)}` to make the program valid?\n- [ ] `@x`\n- [x] `x`\n- [ ] `*x`\n\n\n## Ifs and Conditions\nIn nearly every programming language the program\'s behavior can vary depending on some condition. For example I run on the trails _if_ it is nice out, but stick to the roads in _if_ it is rainy. In rholang the syntax is to do that is.\n\n```\nif ( /* condition */ ) {\n  Nil // Do this if condition is true\n}\nelse {\n  Nil // Do this if condition is false\n}`\n```\n\nThe situations where you will use `if` are limitless and include guessing a secret word correctly, setting the high score in a video game, determining which poker hand is higher, and calculating the winner of an election. This example contract shows how you might check the status of a bank account.\n\n```javascript\nnew stdout(`rho:io:stdout`) in {\n  for (@balance <= @"signTest") {\n    if (balance > 0) {\n      stdout!("Account in good standing.")\n    } else {\n      stdout!("Account overdrawn.")\n    }\n  }\n}\n|\n@"signTest"!(5)\n```\n\n### Exercise\nThe accounting program has a problem. It says that accounts with a balance of zero are overdrawn. But really zero should be in good standing. You can fix this using the "greater than or equal" operator, `>=`. Make sure you add a few tests to make sure it works.\n\n\n## Comparison Operators\nNow that you know how to use the `if`/`else` construct, there are lots of good comparison operators at your disposal.\n* `a > b` Is a greater than b?\n* `a < b` Is a less than b?\n* `a == b` Is a equal to b?\n* `a <= b` Is a less than _or_ equal to b?\n* `a >= b` Is a greater than _or_ equal to b?\n* `a != b` Is a unequal to b?\n\nThese operators work on both numbers and text strings. Text strings are sorted lexicographically, which is a lot like alphabetically. But be careful! If you try to compare a number to a string, it will just be another stopped process.\n\nWhich of these are true?\n- [ ] 4 < 3\n- [ ] "b" < "a"\n- [x] 5 <= 6\n- [ ] "hello" != "hello"\n\n### Exercise\n\nWrite a rholang program that requires the user to send in their name. In most cases the contract will simply reply with "hello", but if their name is the same as yours, it will tell them so.\n\n## Boolean Operators\nRholang also has the classic Boolean operators AND, OR, and NOT. The syntax is\n\n* `a and b` true when both `a` and `b` are true\n* `a or b` true when either `a` or `b` is true\n* `not a` true when `a` is false\n\nWhat would `stdout!(true and true)` output?\n- [x] true\n- [ ] false\n- [ ] neither; that\'s invalid syntax\n\nWhat would `stdout!(not true)` output?\n- [ ] true\n- [x] false\n- [ ] neither; that\'s invalid syntax\n\nWhat would `stdout!((not not true) or false)` output?\n- [x] true\n- [ ] false\n- [ ] neither; that\'s invalid syntax\n\n### Exercise\nWrite a contract that tells a caller whether they are eligible to vote. In order to vote you must be a certain age and of a certain country. You can pick the age and country. To use the contract, I would par in `canIVote!("Nigeria", 30)"`.\n\n### Exercise\nThe contract above only works for one specific country. Use what we learned about factories to enable creating many of these eligibility checkers. To create a new checker for Canada, where the voting age is 18 par in `checkerFactory!(canadaChecker, "Canada", 18)`. Then a 41-year-old Estonian would check whether he can vote in Canada with `canadaChecker!("Estonia", 41)`. Spoiler alert: He cannot vote in Canada.\n',data:{title:"Additional Syntax",description:"Everything you need to know to get up and running with Atlaskit"},isEmpty:false,excerpt:""}}}]);