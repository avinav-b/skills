# Working in this repo

This repo publishes agent skills. Each skill is a folder at
`skills/<name>/` with a `SKILL.md` inside. The folder name and the `name` in
the frontmatter must match.

## Layout

```
skills/<name>/
  SKILL.md              # required: frontmatter + instructions
  agents/openai.yaml    # optional: Codex picker metadata
  scripts/              # optional: helpers the skill runs
  *.md                  # optional: reference docs the skill loads on demand
templates/skill/        # copied by scripts/new-skill.sh, never shipped
.claude-plugin/         # Claude Code and Codex plugin + marketplace manifests
```

The plugin finds skills by scanning `skills/`, so a new folder ships with no
manifest edit. Keep the layout flat (no category subfolders), or the plugin
and skills.sh stop finding them.

## Adding a skill

1. Run `scripts/new-skill.sh <name>`. Use lowercase kebab-case.
2. Write the `description` and the body. See "Writing skills" below.
3. Add a row to the table in `README.md`, linking the name to its file:
   ``[`<name>`](skills/<name>/SKILL.md)``. Delete the "None yet" row.
4. Bump `version` in `.claude-plugin/plugin.json`. Plugin installs only update
   when the version changes.
5. Run `npm run check`.

## Writing skills

- `description` decides when the skill fires. For a skill the model may reach
  for on its own, say when to use it ("Use when the user asks to..."). Keep it
  under 1024 characters.
- A skill only a human should start sets `disable-model-invocation: true` in
  `SKILL.md` and `policy.allow_implicit_invocation: false` in
  `agents/openai.yaml`. Keep the two in sync. Its description is for a person
  reading a slash-command list, so drop the trigger phrasing.
- Keep `SKILL.md` short. Move long reference material into sibling `.md` files
  and tell the agent when to read them.
- To use another skill, say "Call the Skill tool with `<name>`". Don't link
  into another skill's folder.
- No personal paths, secrets, or machine-specific settings. These files are
  public.

## Checks

`npm run check` runs `scripts/validate.mjs` (frontmatter, names, README table)
and `claude plugin validate .` (manifests). CI runs the first one on
every push.

Run `scripts/link-skills.sh` to symlink every skill into `~/.claude/skills`
and `~/.agents/skills`, so edits here take effect in your agents right away.
