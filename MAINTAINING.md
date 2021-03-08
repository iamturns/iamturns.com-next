# Maintaining

This guide is intended for maintainers (anybody with commit access).

## Code of Conduct

Please make sure you're familiar with and follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Reviewing Pull Requests

Checklist:

1. Any decisions to capture as an ADR?
2. Any FAQs to update? E.g. README.md or DEVELOPING.md

## Approving Pull Requests

1. Use "Squash and Merge". This keeps a clean history in `master`, with a full history available in Pull Requests.
2. Ensure the merge message conforms to [Conventional Commits](https://conventionalcommits.org/) spec.
3. Breaking changes? Ensure the commit message contains the text `BREAKING CHANGE:`.

## Releasing

Releasing is handled automatically when merging to `master`, powered by [CircleCI](https://circleci.com/) and [semantic-release](https://github.com/semantic-release/semantic-release).
