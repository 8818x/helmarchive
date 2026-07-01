---
name: Example Thing
full_name: Example Thing, Inc.
kind: example
blurb: A sample entity. Copy into src/entities/ to make it mentionable.
url: https://example.com
---

Entities are anything you mention across posts — people, teams, films, games.
`name` is required; `full_name`, `kind`, `blurb`, `image`, `url` are optional.

Files may be grouped in subfolders — the file name is the slug, so
`src/entities/people/neo.md` is mentioned as `[[neo|…]]` and served at
`/entities/neo`.
