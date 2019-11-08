export declare type SupportedLanguages = 'abap' | 'actionscript' | 'ada' | 'arduino' | 'autoit' | 'c' | 'c++' | 'coffeescript' | 'csharp' | 'css' | 'cuda' | 'd' | 'dart' | 'delphi' | 'elixir' | 'erlang' | 'fortran' | 'foxpro' | 'go' | 'graphql' | 'groovy' | 'haskell' | 'haxe' | 'html' | 'java' | 'javascript' | 'json' | 'julia' | 'kotlin' | 'latex' | 'livescript' | 'lua' | 'mathematica' | 'matlab' | 'objective-c' | 'objective-j' | 'objectpascal' | 'ocaml' | 'octave' | 'perl' | 'php' | 'powershell' | 'prolog' | 'puppet' | 'python' | 'qml' | 'r' | 'racket' | 'restructuredtext' | 'ruby' | 'rust' | 'sass' | 'scala' | 'scheme' | 'shell' | 'smalltalk' | 'sql' | 'standardml' | 'swift' | 'tcl' | 'tex' | 'text' | 'typescript' | 'vala' | 'vbnet' | 'verilog' | 'vhdl' | 'xml' | 'xquery';
export declare const SUPPORTED_LANGUAGE_ALIASES: readonly {
    name: string;
    alias: string[];
    value: string;
}[];
export declare const normalizeLanguage: (language?: string | undefined) => string;
