# Action Reward

Github Action which comments on your PRs with a GIF as a reward for pushing code to Gamekaiju repositories.

## Usage

```yaml
name: Reward with GIF

on:
  pull_request:
    branches: [main]

jobs:
  reward:
    name: Action Reward PR
    runs-on: ubuntu-latest
    steps:
      - uses: gamekaiju/action-reward-pr@main
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
