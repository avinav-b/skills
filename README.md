# Skills

The agent skills I use every day. They work in Claude Code, Codex, Cursor, and
any other agent that reads [Agent Skills](https://agentskills.io).

## Skills

| Skill | Invoked by | What it does |
|---|---|---|
| [`dig-deep`](skills/dig-deep/SKILL.md) | "dig deep" | Uses subagents and only returns a response to you once every single uncertainty that is possible to be ascertained is figured out. |
| [`human-pr-description`](skills/human-pr-description/SKILL.md) | "human PR" | Writes PR descriptions that show what behaves or looks different and why, with screenshots and visuals instead of code inventories. |
| [`pr-session`](skills/pr-session/SKILL.md) | "PR session" | Has a fresh subagent critique the PR, responds, and repeats with a new agent each round until you converge. |
| [`blind-ui-comparison`](skills/blind-ui-comparison/SKILL.md) | "blind UI comparison" | Sources the same screen from other apps, has 3 fresh critics rate them all blind against yours, and iterates until they all agree yours is best. |
| [`bye-bye`](skills/bye-bye/SKILL.md) | `/bye-bye` | Runs `dig-deep`, makes the fix, runs `pr-session` on it, and opens the PR with `human-pr-description`. |

`bye-bye` calls `dig-deep`, `pr-session`, and `human-pr-description`. Install those too.

## Install

Pick one route per agent. Installing both gives you every skill twice.

### Claude Code (updates itself)

```bash
claude plugin marketplace add avinav-b/skills
claude plugin install avinav-skills@avinav-b
```

### Codex (updates itself)

```bash
codex plugin marketplace add avinav-b/skills
codex plugin add avinav-skills@avinav-b
```

### Any other agent, or editable copies (manual updates)

```bash
npx skills@latest add avinav-b/skills                  # pick skills interactively
npx skills@latest add avinav-b/skills --skill=<name>   # just one
```

To update, run `npx skills@latest update`. Re-run `add` to pick up new skills.

### By hand

```bash
git clone https://github.com/avinav-b/skills
cp -R skills/skills/* ~/.claude/skills/   # Claude Code
cp -R skills/skills/* ~/.agents/skills/   # Codex and others
```

## Make them yours

These are starting points. Edit them. Put personal settings in your
`CLAUDE.md` or `AGENTS.md` instead of the skill files, so you can update the
skills without losing them.

## Contributing

See [AGENTS.md](AGENTS.md) for how skills in this repo are laid out and
checked.

## License

[MIT](LICENSE)
