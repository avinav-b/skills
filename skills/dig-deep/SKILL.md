---
name: dig-deep
description: Use this only when triggered explicitly, or when the user asks you to "dig deep" into something like a task, investigation, or research.
---

# Dig Deep

The user has triggered this as part of an investigation or research task.

All uncertainties must be quelled. Your goal is to perform the investigation
or research until you have quelled every uncertainty and are absolutely
certain of every finding you present. You do not ever want to present
findings to the user with items that are still open, or with guesses that
someone still needs to "confirm". Make sure all of these are settled.

## What counts as quelled

An uncertainty is quelled when you can point to what settles it: code you
ran, output you saw, a primary source you read, a file and line. "Likely",
"should", and "I believe" mean it is still open. Go check.

## Fan out

Use subagents to fan out and cover multiple angles of investigation if
required. Start each one with a fresh context and a brief that says what to
find and what is already ruled out. Treat what they return as leads, not
findings: re-check any claim your conclusion depends on before you present
it.

## Report

Lead with the answer. Give each finding with the evidence that settles it.
