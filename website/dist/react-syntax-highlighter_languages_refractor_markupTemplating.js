(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[194],{648:function(e,n,t){"use strict";e.exports=a;a.displayName="markupTemplating";a.aliases=[];function a(e){(function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language!==a)return;var i=t.tokenStack=[];t.code=t.code.replace(r,function(e){if("function"===typeof o&&!o(e))return e;var r=i.length;var u;while(-1!==t.code.indexOf(u=n(a,r)))++r;i[r]=e;return u});t.grammar=e.languages.markup}},tokenizePlaceholders:{value:function(t,a){if(t.language!==a||!t.tokenStack)return;t.grammar=e.languages[a];var r=0;var o=Object.keys(t.tokenStack);function i(u){for(var c=0;c<u.length;c++){if(r>=o.length)break;var p=u[c];if("string"===typeof p||p.content&&"string"===typeof p.content){var s=o[r];var l=t.tokenStack[s];var g="string"===typeof p?p:p.content;var f=n(a,s);var k=g.indexOf(f);if(k>-1){++r;var v=g.substring(0,k);var d=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l);var m=g.substring(k+f.length);var h=[];v&&h.push.apply(h,i([v]));h.push(d);m&&h.push.apply(h,i([m]));"string"===typeof p?u.splice.apply(u,[c,1].concat(h)):p.content=h}}else p.content&&i(p.content)}return u}i(t.tokens)}}})})(e)}}}]);