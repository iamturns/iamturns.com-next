# Developing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [How do I setup the project for development?](#how-do-i-setup-the-project-for-development)
- [What's the development workflow?](#whats-the-development-workflow)
- [How should I manage environment variables?](#how-should-i-manage-environment-variables)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How do I setup the project for development?

1. If you don't have write access to this repo, [fork it](https://github.com/iamturns/iamturns.com-next/fork)
1. Clone the repo
1. Install dependencies: `npm ci`
1. Ensure everything is working: `npm run validate`
1. Use VS Code? Run command `Extensions: Show Recommended Extensions` and install

## What's the development workflow?

1. Start develop mode: `npm run dev`
1. For TDD fans: `npm run test--watch`
1. Write code
1. Create a [pull request on GitHub](https://github.com/iamturns/iamturns.com-next/pulls)

## How should I manage environment variables?

Files are loaded in the following order:

1. `.env.<NODE_ENV>.local`

   Local overrides of environment-specific settings.

   Common examples: `.env.development.local`, `.env.production.local`, `.env.test.local`.

   These files are ignored by git.

2. `.env.local`

   Local overrides for all environments (except the test environment).

   The test environment does not load this file, as it's expected that tests produce the same result for everyone.

   This file is ignored by git.

3. `.env.<NODE_ENV>`

   Environment-specific settings.

   Common example files: `.env.development`, `.env.production`, `.env.test`

4. `.env`

   Default environment settings.
