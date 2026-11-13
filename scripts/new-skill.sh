#!/usr/bin/env bash
set -euo pipefail

# Creates skills/<name>/ from templates/skill/.
# Usage: scripts/new-skill.sh <kebab-case-name>

REPO="$(cd "$(dirname "$0")/.." && pwd)"
name="${1:-}"

if [[ ! "$name" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "usage: scripts/new-skill.sh <kebab-case-name>" >&2
  exit 1
fi

dest="$REPO/skills/$name"
if [ -e "$dest" ]; then
  echo "error: $dest already exists" >&2
  exit 1
fi

# "my-skill" -> "My Skill"
title="$(echo "$name" | tr '-' ' ' | awk '{for (i = 1; i <= NF; i++) $i = toupper(substr($i, 1, 1)) substr($i, 2)} 1')"

cp -R "$REPO/templates/skill" "$dest"
find "$dest" -type f -exec sed -i.bak -e "s/__NAME__/$name/g" -e "s/__TITLE__/$title/g" {} \;
find "$dest" -name '*.bak' -delete

echo "created skills/$name"
echo "next: write its description and body, add it to README.md, bump the plugin version"
