# MathQuill

This is David Lippman's fork of [Desmos's fork](https://github.com/desmosinc/mathquill) of [MathQuill](http://mathquill.com)

MathQuill is a web formula editor designed to make typing math easy and beautiful.


## Changes

This fork builds on Desmos's work, and adds:
- Matrix support, including public API functions
- addCommand config option for adding simple symbols via config
- quickPlusMinus config option for +- to generate \pm
- extended autoCommands to allow ^ at start of command to indicate symbol must be at the start
- Added root as alternate command for nthroot
- Added charsThatBreakOutOfSupSubVar and charsThatBreakOutOfSupSubOp to allow control of which kind
  of expressions a symbol would break out of supsub for.
- Added autoSubscriptBrackets option so typing (HO)3 would trigger autosubscript on the 3
- Added autoParenOperator option for auto-inserting a paren when next char is typed after operator,
  a fancier version of autoParenthesizedFunctions
- Fix blur issue with .selection()
- Add getSelection() API method
- Fixed issue causing Android Chrome typing to not register
- Adjusted iOS mathspeak for variables hack to avoid ugly TalkBack output
- Add listCharReturnsTo option for having a comma break out back to baseline or top bracket
- Add a dynamic layout fix for subscript, superscripts, and nthroot index to get it to position 
  more reasonably.

Note the `/docs/` have _not_ been updated to reflect these changes.

## Open-Source License

MathQuill was originally created by [Han](http://github.com/laughinghan), [Jeanine](http://github.com/jneen), and [Mary](http://github.com/stufflebear) (<maintainers@mathquill.com>)

The Source Code Form of MathQuill is subject to the terms of the Mozilla Public
License, v. 2.0: [http://mozilla.org/MPL/2.0/](http://mozilla.org/MPL/2.0/)

The quick-and-dirty is you can do whatever if modifications to MathQuill are in
public GitHub forks. (Other ways to publicize modifications are also fine, as
are private use modifications. See also: [MPL 2.0 FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/))
