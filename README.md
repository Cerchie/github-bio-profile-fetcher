github-bio-profile-fetcher
=================

sample cli for npm package tutorial

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

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

## `github-profile-bio-fetcher profile USERNAME`

gets user's bio

```
USAGE
  $ github-profile-bio-fetcher profile USERNAME 

ARGUMENTS
  USERNAME  GitHub username

DESCRIPTION
fetch the bio for the GitHub user

EXAMPLES
  $ github-profile-bio-fetcher profile Cerchie 
  "This is the story of Cerchie's life:" (./src/commands/profile/index.ts)
```

_See code: [src/commands/profile/index.ts](https://github.com/Cerchie/github-profile-bio-fetcher/blob/v0.0.0/src/commands/profile/index.ts)_

e-bio-fetcher hello world
  hello world! (./src/commands/hello/world.ts)
```

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