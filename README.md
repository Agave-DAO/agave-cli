agave-cli
=========

create votes in the Agave DAO that change parameters of the Agave Protocol

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/agave-cli.svg)](https://npmjs.org/package/agave-cli)
[![CircleCI](https://circleci.com/gh/HoneyIsMoney/agave-cli/tree/master.svg?style=shield)](https://circleci.com/gh/HoneyIsMoney/agave-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/agave-cli.svg)](https://npmjs.org/package/agave-cli)
[![License](https://img.shields.io/npm/l/agave-cli.svg)](https://github.com/HoneyIsMoney/agave-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g agave-cli
$ agave COMMAND
running command...
$ agave (-v|--version|version)
agave-cli/0.0.0 linux-x64 node-v14.17.5
$ agave --help [COMMAND]
USAGE
  $ agave COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`agave autocomplete [SHELL]`](#agave-autocomplete-shell)
* [`agave commands`](#agave-commands)
* [`agave hello [FILE]`](#agave-hello-file)
* [`agave help [COMMAND]`](#agave-help-command)
* [`agave security [FILE]`](#agave-security-file)

## `agave autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ agave autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ agave autocomplete
  $ agave autocomplete bash
  $ agave autocomplete zsh
  $ agave autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `agave commands`

list all the commands

```
USAGE
  $ agave commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `agave hello [FILE]`

describe the command here

```
USAGE
  $ agave hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ agave hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/HoneyIsMoney/agave-cli/blob/v0.0.0/src/commands/hello.ts)_

## `agave help [COMMAND]`

display help for agave

```
USAGE
  $ agave help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `agave security [FILE]`

describe the command here

```
USAGE
  $ agave security [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/security.ts](https://github.com/HoneyIsMoney/agave-cli/blob/v0.0.0/src/commands/security.ts)_
<!-- commandsstop -->
