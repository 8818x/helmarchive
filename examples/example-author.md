---
name: Your Name
full_name: Your Full Name      # optional → shown under the name on the hub
kind: author                   # optional
blurb: A line or two about you. # optional
image: /img/you.png            # optional → portrait on the hub
url: https://yoursite.example  # optional → "Official site" link
---

Copy this into `src/entities/` (e.g. `src/entities/your-name.md`) and set
`authorSlug` in `src/lib/site.ts` to the file's slug (`your-name`). Every post's
byline then reads "by Your Name" and links here — this page lists your writing.
