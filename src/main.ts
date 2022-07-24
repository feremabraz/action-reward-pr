import * as core from '@actions/core'
import * as github from '@actions/github'
import rewardGifs from './rewardGifs'

async function run(): Promise<void> {
  try {
    const randomGif = rewardGifs[Math.floor(Math.random() * rewardGifs.length)]
    const message = `![Reward Gif](${randomGif})`
    const githubToken = core.getInput('GITHUB_TOKEN')
    const context = github.context
    if (context.payload.pull_request == null) {
      core.setFailed('No pull request found.')
      return
    }
    const pullRequestNumber = context.payload.pull_request.number
    const octokit = github.getOctokit(githubToken)
    await octokit.rest.issues.createComment({
      ...context.repo,
      issue_number: pullRequestNumber,
      body: message,
    })
  } catch (error) {
    core.setFailed(getErrorMessage(error))
  }
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

await run()
