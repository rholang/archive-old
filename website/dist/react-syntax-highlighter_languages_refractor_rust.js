(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[236],{924:function(e,t,a){"use strict";e.exports=r;r.displayName="rust";r.aliases=[];function r(e){e.languages.rust={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:true}],string:[{pattern:/b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/,greedy:true},{pattern:/b?"(?:\\.|[^\\\r\n"])*"/,greedy:true}],char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,alias:"string"},"lifetime-annotation":{pattern:/'[^\s>']+/,alias:"symbol"},keyword:/\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,attribute:{pattern:/#!?\[.+?\]/,greedy:true,alias:"attr-name"},function:[/\w+(?=\s*\()/,/\w+!(?=\s*\(|\[)/],"macro-rules":{pattern:/\w+!/,alias:"function"},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,"closure-params":{pattern:/\|[^|]*\|(?=\s*[{-])/,inside:{punctuation:/[|:,]/,operator:/[&*]/}},punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/}}}}]);