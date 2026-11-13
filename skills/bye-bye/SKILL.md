---
name: bye-bye
description: Take a problem from investigation to an open PR without stopping. Runs dig-deep, fixes it, runs pr-session, and opens the PR with human-pr-description.
disable-model-invocation: true
---

# Bye-Bye

The user wants this taken from problem to open PR end to end. They may not be
watching, so don't stop to ask unless a step below says to.

Invoking this grants permission to create a branch, commit, push it, and open
a PR. It does not grant permission to merge, force-push someone else's
branch, or touch production or real data.

## 1. Dig deep

Call the Skill tool with `dig-deep`, aimed at the problem the user gave you.
Come out of it knowing the cause and what the fix should be.

If the investigation shows the user's premise is wrong, or the only fix needs
something this skill doesn't grant, stop and report.

## 2. Fix

Work on a new branch, never the default branch. Make the smallest fix that
addresses the cause you found. Prove it works: run the tests, and show the
problem before and gone after where you can.

## 3. PR session

Call the Skill tool with `pr-session`, pointed at your branch's diff against
its base. If a point is still disputed when the session would stop to ask the
user, don't stop: note both sides for the PR description and move on.

## 4. Open the PR

Commit and push the branch. Call the Skill tool with `human-pr-description`
to write the description, then open the PR. Include any disputed points from
the PR session.

## Report

The PR link, what dig-deep found, what the PR session changed, and anything
left disputed.
