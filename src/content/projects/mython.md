---
title: Mython Interpreter
tagline: An interpreter for a Python-like language, with its own lexer, parser and runtime, built from scratch in C++17.
year: 2025
status: completed
role: Yandex Practicum project
order: 9
accent: '#a78bfa'
cover:
  type: image
  src: /media/mython/mython-run.svg
  alt: Mython running its test suite and a demo program
gallery:
  - type: image
    src: /media/mython/mython-program.svg
    caption: A Mython program with classes, inheritance and method overriding.
  - type: image
    src: /media/mython/mython-run.svg
    caption: Real output. The built-in test suite passes, then the program runs with dynamic dispatch.
skills: [C++, Interpreters, Parsing, OOP, Unit Testing, Data Structures]
workflow:
  - title: Lex
    description: Source text becomes tokens, including Python-style indentation as INDENT and DEDENT tokens.
  - title: Parse
    description: A recursive-descent parser builds an abstract syntax tree.
  - title: Execute
    description: AST nodes run against closures in a runtime with classes, methods and inheritance.
  - title: Test
    description: 57 unit tests cover the lexer, runtime objects, AST nodes and full programs.
highlights:
  - Classes, inheritance, methods, if/else, and/or/not, and str()
  - 57 unit tests across lexer, parser and runtime
links:
  - label: Source code
    url: https://github.com/Motyst/mython
    kind: repo
---

Mython (short for *mini-Python*) is a simplified subset of Python, and this is a full interpreter for it written in **C++17**. It covers the three stages of a real language implementation: a lexer that understands significant indentation, a parser that builds an AST, and a runtime that executes it.

The images above come from building the repo and running a demo program through the interpreter.
