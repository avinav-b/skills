#!/usr/bin/env bash
set -euo pipefail

# Dev-only: symlinks every skill in this repo into the local skill folders, so
# edits here take effect in your agents right away.
#   ~/.claude/skills  Claude Code
#   ~/.agents/skills  Codex and other Agent Skills harnesses
# Re-run after adding, removing, or renaming a skill.

REPO="$(cd "$(dirname "$0")/.." && pwd)"
DESTS=("$HOME/.claude/skills" "$HOME/.agents/skills")

for DEST in "${DESTS[@]}"; do
  # A destination that is itself a symlink into this repo would make us write
  # links back into skills/.
  if [ -L "$DEST" ]; then
    case "$(readlink -f "$DEST")" in
      "$REPO" | "$REPO"/*)
        echo "error: $DEST is a symlink into this repo. Remove it and re-run." >&2
        exit 1
        ;;
    esac
  fi
  mkdir -p "$DEST"

  for src in "$REPO"/skills/*/; do
    [ -f "$src/SKILL.md" ] || continue
    src="${src%/}"
    name="$(basename "$src")"
    target="$DEST/$name"

    # Never clobber a real skill folder you made by hand.
    if [ -e "$target" ] && [ ! -L "$target" ]; then
      echo "skipped $name: $target exists and is not a symlink" >&2
      continue
    fi

    ln -sfn "$src" "$target"
    echo "linked $name -> $target"
  done
done
