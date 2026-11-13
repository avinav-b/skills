#!/usr/bin/env node
// Checks every skill in skills/: frontmatter, names, invocation settings, and
// that README.md links to it. Exits non-zero with a list of problems.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const readme = readFileSync(join(root, "README.md"), "utf8");
const problems = [];

function frontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return null;
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (kv) fields[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return fields;
}

const names = readdirSync(skillsDir).filter((entry) =>
  statSync(join(skillsDir, entry)).isDirectory(),
);

for (const name of names) {
  const where = `skills/${name}`;
  const skillPath = join(skillsDir, name, "SKILL.md");
  if (!existsSync(skillPath)) {
    problems.push(`${where}: missing SKILL.md`);
    continue;
  }

  const fm = frontmatter(readFileSync(skillPath, "utf8"));
  if (!fm) {
    problems.push(`${where}/SKILL.md: missing --- frontmatter ---`);
    continue;
  }

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) || name.length > 64) {
    problems.push(`${where}: folder name must be kebab-case, 64 chars max`);
  }
  if (fm.name !== name) {
    problems.push(`${where}/SKILL.md: name "${fm.name ?? ""}" must match folder "${name}"`);
  }
  if (!fm.description) {
    problems.push(`${where}/SKILL.md: missing description`);
  } else if (fm.description.length > 1024) {
    problems.push(`${where}/SKILL.md: description is over 1024 characters`);
  } else if (fm.description.startsWith("TODO")) {
    problems.push(`${where}/SKILL.md: description is still the template TODO`);
  }

  const userOnlyClaude = fm["disable-model-invocation"] === "true";
  const yamlPath = join(skillsDir, name, "agents", "openai.yaml");
  if (existsSync(yamlPath)) {
    const userOnlyCodex = /^\s*allow_implicit_invocation:\s*false\s*$/m.test(
      readFileSync(yamlPath, "utf8"),
    );
    if (userOnlyClaude !== userOnlyCodex) {
      problems.push(
        `${where}: disable-model-invocation in SKILL.md and allow_implicit_invocation in agents/openai.yaml disagree`,
      );
    }
  }

  if (!readme.includes(`(skills/${name}/SKILL.md)`)) {
    problems.push(`README.md: add a row linking to skills/${name}/SKILL.md`);
  }
}

if (problems.length) {
  console.error(problems.map((p) => `- ${p}`).join("\n"));
  process.exit(1);
}
console.log(`ok: ${names.length} skill(s)`);
