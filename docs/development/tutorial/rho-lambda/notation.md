---
id: notation
title: Notation
permalink: tutorial/rho-lambda/notation.html
---

## Notational semantics
It is traditional in the programming language semantics community and literature to use double brace notation to denote the meaning function taking an expression, say e, in a source language, say S, to its interpretation in a target language, say T. More precisely, we type the meaning function ⟦-⟧ : S -> T, and write ⟦e⟧ to denote the application of the function to e. In general, such functions may take ancillary arguments, which are applied to the right. Thus, if the function is ⟦-⟧( - ) : S x A -> T we would write ⟦e⟧ ( a ). to denote the interpretation of e with the ancillary context a.