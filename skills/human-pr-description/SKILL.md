---
name: human-pr-description
description: Only to be used when explicitly called, or when the user tells you to write a 'human PR description'.
---

# Human PR Description

Goal: a reviewer reading a PR description does not care about the actual lines of code that changed, or about syntax semantics. They need to quickly understand what behaves differently and why, or what looks differently and why.

A PR may have UI changes, or may be a change to a process or behavior.

# UI Changes

If possible PR descriptions for UI changes should always present a before and after screenshot of the UI change.

# Process or Behavior Changes

Process and behavior changes can often be described best through diagrams, animations, or some other type of visualization. Use visuals where possible where it will help aid understanding. Do not restrict yourself to visuals that the text format supports (ex. mermaid diagrams). You should have the freedom of creating any visualization or animation you like in HTML, and finding a way to get it into the PR description, for example as an image. Audit your visuals to make sure they communicate effectively as visuals and are simple to understand. They should not be filled with text.

# Text

Text in the PR should be concise and simple to understand. Different forms of writing (eg. bullets, lists, tables) should be used when it is the most effective form of communication. Prefer directness. Text should explain the process or UI change. You do not want to just have a prose wall of text referencing random variable names and function names in monospace blocks.
