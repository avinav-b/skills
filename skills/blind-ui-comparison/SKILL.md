---
name: blind-ui-comparison
description: Use only when explicitly called, or when the user asks to improve a UI by comparing it blind against the same screen in other apps until critics agree it's the best.
---

# Blind UI Comparison

Improve a UI by putting it next to the best comparable UIs and iterating
until fresh critics, who don't know which one is yours, all agree yours is
the best.

## 1. Source the comparisons

Find UIs that are exactly comparable: the same screen doing the same job (a
camera capture screen against other camera capture screens, not against a
photo gallery). Include the platform defaults, like the stock iPhone or Pixel
app, and the strongest competitors.

You don't need the devices. Source screenshots online: App Store and Play
Store listings, official product and support pages, press kits, and design
galleries. Use a simulator or emulator where the screen exists there. Check
that each image really shows the same screen and state, and drop any that
don't.

Keep sourced images out of the repo. They're for comparison only.

## 2. Capture yours

Screenshot your UI running for real, in the same state as the comparisons:
the same device size, light or dark mode, and similar content.

## 3. Make it blind

Strip anything that gives away where an image came from: crop or blur app
names, logos, and brand marks, in yours too. Name the files with neutral
letters (A, B, C...) and shuffle which letter is yours every round.

## 4. Critique

Spawn 3 subagents, each with a fresh context. Give each one only the images
and one sentence on what the screen is for. Do not tell it which UI comes
from where, or that one of them is yours. Ask it to:

- Rate every UI out of 10 for UI/UX and out of 10 for Aesthetics.
- Give the specific issues behind each score.

## 5. Fix

Fix the issues with your UI that most of the critics raised. Ignore one-off
complaints. Make it better on its own terms, not a copy of a comparison.

## 6. Repeat

Re-capture your UI, re-blind, reshuffle, and run 3 new critics every round.
Keep going until all 3 critics score yours higher than every comparison, on
both UI/UX and Aesthetics. A tie is not a win.

If your scores stop improving for 3 rounds, stop and show the user where it's
stuck.

## Report

A table of each round's scores, before and after screenshots of your UI, and
what you changed.
