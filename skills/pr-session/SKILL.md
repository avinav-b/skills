---
name: pr-session
description: Use only when explicitly called, or when the user asks for a 'PR session', or to have fresh subagents critique a PR back and forth until you converge.
---

# PR Session

Spawn a subagent with only the context it needs and nothing else, and get it
to critique the PR. Then respond. Then go back and forth, back and forth,
until you have come to a convergence. Use a fresh agent every time.

## The critic's brief

Start each critic with a fresh context, not a fork of this conversation. Give
it only:

- Where the change is: the PR, or the repo path, base commit, and diff command.
- What the change is meant to do, in a sentence or two.
- From the second round on: each earlier finding and how you answered it
  (fixed, or disagreed with your evidence).

Leave out your own reasoning, your opinion of the change, and the rest of
this conversation. Tell it to critique only: no edits, commits, pushes, or PR
comments.

## Respond

Check each finding yourself before acting on it.

- It holds up: make the smallest fix.
- It's wrong: say why, with evidence (file and line, a test, output).

Don't agree just to end the loop.

## Converge

Each round is a new agent, given the current diff and every finding so far.
You have converged when a fresh critic raises nothing new that holds up and
accepts your answers to the earlier points. If the same point is still
disputed after two rounds, stop and give the user both sides.

Don't push or post on the PR during the session unless the user asked.

## Report

Rounds run, what changed, and what you pushed back on and why.
