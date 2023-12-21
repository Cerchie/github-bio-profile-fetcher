oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g github-profile-bio-fetcher
$ github-profile-bio-fetcher COMMAND
running command...
$ github-profile-bio-fetcher (--version)
github-profile-bio-fetcher/0.0.0 darwin-arm64 node-v20.8.0
$ github-profile-bio-fetcher --help [COMMAND]
USAGE
  $ github-profile-bio-fetcher COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`github-profile-bio-fetcher hello PERSON`](#github-profile-bio-fetcher-hello-person)
* [`github-profile-bio-fetcher hello world`](#github-profile-bio-fetcher-hello-world)
* [`github-profile-bio-fetcher help [COMMANDS]`](#github-profile-bio-fetcher-help-commands)
* [`github-profile-bio-fetcher plugins`](#github-profile-bio-fetcher-plugins)
* [`github-profile-bio-fetcher plugins:install PLUGIN...`](#github-profile-bio-fetcher-pluginsinstall-plugin)
* [`github-profile-bio-fetcher plugins:inspect PLUGIN...`](#github-profile-bio-fetcher-pluginsinspect-plugin)
* [`github-profile-bio-fetcher plugins:install PLUGIN...`](#github-profile-bio-fetcher-pluginsinstall-plugin-1)
* [`github-profile-bio-fetcher plugins:link PLUGIN`](#github-profile-bio-fetcher-pluginslink-plugin)
* [`github-profile-bio-fetcher plugins:uninstall PLUGIN...`](#github-profile-bio-fetcher-pluginsuninstall-plugin)
* [`github-profile-bio-fetcher plugins reset`](#github-profile-bio-fetcher-plugins-reset)
* [`github-profile-bio-fetcher plugins:uninstall PLUGIN...`](#github-profile-bio-fetcher-pluginsuninstall-plugin-1)
* [`github-profile-bio-fetcher plugins:uninstall PLUGIN...`](#github-profile-bio-fetcher-pluginsuninstall-plugin-2)
* [`github-profile-bio-fetcher plugins update`](#github-profile-bio-fetcher-plugins-update)

## `github-profile-bio-fetcher hello PERSON`

Say hello

```
USAGE
  $ github-profile-bio-fetcher hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Cerchie/github-profile-bio-fetcher/blob/v0.0.0/src/commands/hello/index.ts)_

## `github-profile-bio-fetcher hello world`

Say hello world

```
USAGE
  $ github-profile-bio-fetcher hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ github-profile-bio-fetcher hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Cerchie/github-profile-bio-fetcher/blob/v0.0.0/src/commands/hello/world.ts)_

## `github-profile-bio-fetcher help [COMMANDS]`

Display help for github-profile-bio-fetcher.

```
USAGE
  $ github-profile-bio-fetcher help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for github-profile-bio-fetcher.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `github-profile-bio-fetcher plugins`

List installed plugins.

```
USAGE
  $ github-profile-bio-fetcher plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ github-profile-bio-fetcher plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/index.ts)_

## `github-profile-bio-fetcher plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ github-profile-bio-fetcher plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ github-profile-bio-fetcher plugins add

EXAMPLES
  $ github-profile-bio-fetcher plugins add myplugin 

  $ github-profile-bio-fetcher plugins add https://github.com/someuser/someplugin

  $ github-profile-bio-fetcher plugins add someuser/someplugin
```

## `github-profile-bio-fetcher plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ github-profile-bio-fetcher plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ github-profile-bio-fetcher plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/inspect.ts)_

## `github-profile-bio-fetcher plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ github-profile-bio-fetcher plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ github-profile-bio-fetcher plugins add

EXAMPLES
  $ github-profile-bio-fetcher plugins install myplugin 

  $ github-profile-bio-fetcher plugins install https://github.com/someuser/someplugin

  $ github-profile-bio-fetcher plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/install.ts)_

## `github-profile-bio-fetcher plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ github-profile-bio-fetcher plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ github-profile-bio-fetcher plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/link.ts)_

## `github-profile-bio-fetcher plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ github-profile-bio-fetcher plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ github-profile-bio-fetcher plugins unlink
  $ github-profile-bio-fetcher plugins remove

EXAMPLES
  $ github-profile-bio-fetcher plugins remove myplugin
```

## `github-profile-bio-fetcher plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ github-profile-bio-fetcher plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/reset.ts)_

## `github-profile-bio-fetcher plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ github-profile-bio-fetcher plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ github-profile-bio-fetcher plugins unlink
  $ github-profile-bio-fetcher plugins remove

EXAMPLES
  $ github-profile-bio-fetcher plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/uninstall.ts)_

## `github-profile-bio-fetcher plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ github-profile-bio-fetcher plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ github-profile-bio-fetcher plugins unlink
  $ github-profile-bio-fetcher plugins remove

EXAMPLES
  $ github-profile-bio-fetcher plugins unlink myplugin
```

## `github-profile-bio-fetcher plugins update`

Update installed plugins.

```
USAGE
  $ github-profile-bio-fetcher plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->
