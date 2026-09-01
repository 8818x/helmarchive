---
name: Your Name
full_name: Your Full Name      # optional → shown under the name on the hub
kind: author                   # optional
blurb: A line or two about you. # optional
urls:                          # optional → one row per external link; label omit = "Official site", icon omit = globe
                                 #   icon = lucide name ("facebook") or uploaded image path ("/img/icon.png")
  - url: https://yoursite.example
  - label: Facebook
    url: https://facebook.com/yourpage
    icon: /img/example.jpg
---

The author entity — rename or duplicate this file as your own slug (e.g.
`src/entities/your-name.md`), then put `author: your-name` in a post's
frontmatter. That post's byline reads "by Your Name" and links here — this page
lists your writing. `image: /img/you.png` adds a portrait to the hub and cards.
