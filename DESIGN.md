---
version: alpha
name: helmarchive
description: >-
  Design system for helmarchive — a personal archive of articles. Rosé Pine
  based, English-first UI with Thai secondary, content-column layout. Values
  below are the authoritative defaults (the Rosé Pine theme); dark and light
  themes remap the primitives only.
colors:
  bg: "#191724"
  surface: "#1f1d2e"
  overlay: "#26233a"
  fg: "#e0def4"
  muted: "#6e6a86"
  subtle: "#908caa"
  link: "#c4a7e7"
  content-link: "#f6c177"
  line: "#26233a"
  chip: "#1f1d2e"
  pine: "#31748f"
  rose: "#ebbcba"
  love: "#eb6f92"
typography:
  fontFamily: "'Anuphan', 'IBM Plex Sans Thai', system-ui, sans-serif"
  fontSize:
    root: 17px
    h1: 1.8rem
    h2: 1.15rem
    body: 1rem
    meta: 0.85rem
    footer: 0.8rem
    kicker: 0.72rem
    chip: 0.75rem
    chip-large: 0.9rem
    card-sub: 0.75rem
  fontWeight:
    body: 400
    emphasis: 500
    heading: 700
  lineHeight:
    body: 1.7
    h1: 1.3
    meta: 1.25
  letterSpacing:
    brand: -0.01em
    kicker: 0.14em
rounded:
  box: 4px
  panel: 8px
spacing:
  gutter: 1.5rem
  topbar-top: 1.75rem
  main-top: 2.25rem
  main-bottom: 4rem
  section: 1.5rem
  paragraph: 1rem
  list-item: 0.75rem
components:
  chip:
    fontSize: "{typography.fontSize.chip}"
    padding: 0.05rem 0.55rem
    borderRadius: "{rounded.box}"
  chip-index:
    fontSize: "{typography.fontSize.chip-large}"
    padding: 0.22rem 0.75rem
    borderRadius: "{rounded.box}"
  menu-button:
    fontSize: 0.8rem
    padding: 0.35rem 0.55rem
    borderRadius: "{rounded.box}"
  mention-card:
    width: 12rem
    borderRadius: "{rounded.panel}"
  reminder:
    padding: 0.8rem 1rem
    borderRadius: 0 4px 4px 0
    borderLeft: 3px solid "{colors.content-link}"
  quote:
    padding: 0.2rem 0 0.2rem 1rem
    borderLeft: 3px solid "{colors.line}"
  explore-button:
    width: 32px
    height: 32px
    borderRadius: "{rounded.box}"
---

# helmarchive Design

## Overview

helmarchive is a reading-first personal archive: one narrow content column,
Rosé Pine palette, English-first UI with Thai as the secondary language. Chrome is minimal — a topbar
(wordmark + icon buttons), the content column, and a one-line footer. Color is
used sparingly and carries meaning: iris is reserved for navigable identity
(entity/author links), gold for external/plain content links. Three themes
share one stylesheet: Rosé Pine (default), dark, and light — themes remap only
the `--rp-*` primitives, so every semantic alias (`--fg`, `--bg`, `--link`, …)
follows automatically.

## Colors

Semantic aliases resolve against Rosé Pine primitives. Theme tables remap the
primitives; the aliases pick up the change with no further edits.

| Token     | Rosé Pine (default) | Dark       | Light      | Use                                  |
| --------- | ------------------- | ---------- | ---------- | ------------------------------------ |
| `bg`      | `#191724`           | `#111317`  | `#ffffff`  | Page background                      |
| `surface` | `#1f1d2e`           | `#181b21`  | `#ffffff`  | Cards, menus, chip base              |
| `overlay` | `#26233a`           | `#21252e`  | `#e7e3dc`  | Hover fill, rules, active state      |
| `fg`      | `#e0def4`           | `#e6e8eb`  | `#2a2722`  | Body text, headings                  |
| `muted`   | `#6e6a86`           | `#6b7280`  | `#75716a`  | Secondary text (source, disclaimer)  |
| `subtle`  | `#908caa`           | `#9aa3b2`  | `#55524b`  | Tertiary text (dates, icons, footer) |
| `link`    | `#c4a7e7`           | `#2573dd`  | `#0259DD`  | Entity/author links (iris accent)    |
| `content-link` | `#f6c177`      | `rgba(255,94,210,.87)` | `#FF6648` | Plain markdown links in body |
| `line`    | `#26233a`           | `#21252e`  | `#e7e3dc`  | Horizontal rules, borders            |
| `pine`    | `#31748f`           | —          | `#2a6478`  | Reserved primitive                   |
| `rose`    | `#ebbcba`           | —          | `#bf7674`  | Reserved primitive                   |
| `love`    | `#eb6f92`           | —          | `#c93d63`  | Reserved primitive                   |

Rules:

- `--rp-*` names describe hues only in the Rosé Pine default. Dark and light
  reuse them as slot names with theme-appropriate hues (`link`/iris → blue,
  `content-link`/gold → pink in dark, orange in light). Read the per-line
  comment in the theme block, not the variable name.
- Link color is per-theme by design — the entity/mention accent visibly changes
  between themes; it is not held constant.
- Tag chips are tinted from their own per-tag color: post chips use `--c` text
  with a 12% `color-mix` over `surface` (22% on hover, 32% border); tags-index
  chips use `--fg` text with a 8% tint (20% on hover, 26% border).
- Gold-tinted fills (reminder aside) mix 10% gold over `surface`.

## Typography

Single family stack serving English-first UI with Thai secondary:
`'Anuphan', 'IBM Plex Sans Thai', system-ui, sans-serif` — Anuphan draws both
scripts, IBM Plex Sans Thai catches Thai glyphs it lacks. Root `font-size:
17px`; all other sizes in `rem`.

| Level    | Size      | Weight | Line height | Notes                              |
| -------- | --------- | ------ | ----------- | ---------------------------------- |
| h1       | `1.8rem`  | 700    | 1.3         | Post/page titles                   |
| h2       | `1.15rem` | 700    | —           | In-body and end-of-post sections   |
| body     | `1rem`    | 400    | 1.7         | Generous; fits Thai diacritics (secondary script) |
| meta     | `0.85rem` | 500 (author) / 400 | 1.25 | Byline, dates, source line |
| footer   | `0.8rem`  | 400    | 1.5         | Site footer, disclaimer, menu items|
| chip     | `0.75rem` | 400    | 1.5         | Tag chips under a post title       |
| chip (index) | `0.9rem` | 400 | 1.4         | Tags index chips — larger, primary content there |
| card sub | `0.75rem` | 400    | 1.3         | Mention-card sub-line; blurb `0.8rem`/1.4 |
| card name| `0.95rem` | 600    | 1.25        | Mention-card title, `-0.01em`      |
| brand    | `1.05rem` | 700    | —           | Wordmark, `-0.01em`                |
| kicker   | `0.72rem` | 600    | —           | Uppercase section lead-in, `0.14em` tracking, subtle |

Notes:

- Tight line-heights (1.25–1.4) are used only where icons must center
  accurately inside the line box (byline, card tiers); body prose keeps 1.7.
- Quote text is italic; its links revert to normal style.

## Layout

One centered column, capped at `70ch` (`--maxw`). Everything in the page
chrome shares that cap.

- **Topbar**: `padding: 1.75rem 1.5rem 0`, space-between, baseline-aligned.
- **Main**: `padding: 2.25rem 1.5rem 4rem`; `flex: 1` in a column-flex body
  for the sticky footer.
- **Footer**: `padding: 0 1.5rem 1.5rem`, sized at `0.8rem`, width cap
  compensated to `calc(var(--maxw) * 1.25)` so its box aligns with main.
- Vertical rhythm: sections (`references`, `related`, disclaimer) sit `1.5rem`
  below the previous block with a `1px` top rule; the disclaimer's
  `padding-top` matches the following section's `margin-top` so the
  disclaimer + source cluster centers between the two rules.
- Horizontal gutters are always `1.5rem`.

## Elevation & Depth

Flat by default; elevation marks interactive floating layers only.

- **Preference menu**: `box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22)`,
  `1px` `line` border, `z-index: 20`. Opens with a 0.14s pop (4px translate).
- **Mention card**: `z-index: 30`, `1px` iris border (`rgba(196,167,231,0.6)`),
  layered shadow — inner top highlight, iris glow, dark drop:
  `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 18px rgba(196,167,231,0.28),
  0 10px 24px rgba(0,0,0,0.55)`. Background is a top-to-bottom
  `overlay → surface` gradient.
- In-page content (asides, quotes, chips) never casts a shadow — separation
  comes from tint, border, or rule, not elevation.

## Shapes

Two-value radius scale, exposed as CSS vars:

| Token            | Var               | Value  | Applied to                                              |
| ---------------- | ----------------- | ------ | ------------------------------------------------------- |
| `box`            | `--radius`        | `4px`  | Every in-page box: chips, postit card, entity image, icon buttons, menu items, shelf toggle, reminder (right side only) |
| `panel`          | `--radius-panel`  | `8px`  | Floating layers only: preference menu, mention card, book tooltip, shelves board |

Exempt (decorative bars, not boxes): the book spine only
(`1.5px 1.5px 0 0`, open bottom).

Left-border accents (reminder, blockquote) use a `3px` solid bar; the reminder
rounds only its right corners. No pill radius anywhere — chips are `4px`
boxes, matching the tags index and postit card.

## Components

### Section kicker

Tiny uppercase lead-in label opening a page section (home "latest in
bookshelf", tags index, individual tag pages, bookshelf): `0.72rem/600`,
`0.14em` tracking, subtle
color, `0.85rem` space below. Shared class `.kicker` in global.css — never
restyle per page.

### Tag chip

One structure site-wide (`.inline-tags` in global.css; the tags index mirrors
it): tag's own `--c` mixed over surface, tinted border, `4px` box. No
underline, ever. Two context variants:

- Under a post title: `0.75rem`, `0.05rem 0.55rem` padding, `--c` text, 12%
  tint (22% hover, 32% border) — small metadata that still reads as its tag.
- Tags index: `0.9rem`, `0.22rem 0.75rem` padding, `--fg` text, 8% tint (20%
  hover, 26% border) — primary content there, calmer at size.

### Entity mention (`[[target|label]]`)

Iris link with a dotted underline (`text-underline-offset: 2px`), pointer
cursor; hover/focus raises a mention card. Missing entity (no `.md`): subtle
color, dashed underline, `cursor: help`, no card.

### Mention card

Fixed `12rem` popover. Optional image row (16/10, cover; logos get `contain`
plus `0.5rem` padding on a base-colored plate). Meta block: name `0.95rem/600`,
sub `0.75rem`, blurb `0.8rem`, all in `0.75rem 0.9rem 0.85rem` padding. Iris
divider appears only under an image. Enters with a 0.16s fade + 6px slide,
origin-aware (flips direction when placed below the trigger). Singleton,
`pointer-events: none`.

### Byline (meta row)

One muted `0.85rem` flex line: icon + author link (iris, weight 500, links to
the entity hub), icon + date. Icons `0.95em`, 70% opacity, nudged down
`0.06em`. The author link is plain at rest — no dotted underline, so it never
promises a hover card like an in-body mention.

### Preference menu

`<details>`-based dropdown from a 32px icon button. Panel: surface bg, `1px`
line border, 8px radius, 6px offset below the trigger, 0.25rem inner padding.
Items are full-width text buttons (`0.8rem`, subtle color, `4px` radius);
hover/focus and the active item (`aria-current='true'`, weight 600) fill with
overlay. Active items are marked by background + weight only — no checkmark.

### Reminder aside

Author note at the top of a post body: gold 10% tint over surface, `3px` gold
left bar, right-only `4px` radius, `0.9rem` text. Placed after the first image
when the post leads with one.

### Blockquote

`3px` line-colored left bar, `1rem` left padding, subtle color, italic.
Links inside revert to upright.

### Link semantics (body)

Two link colors inside `.content`, never mixed:

- `[[entity]]` mention → iris, dotted underline, hover card.
- Plain markdown link → gold, no underline; the `title` attribute carries its
  tooltip.

## Do's and Don'ts

Do:

- Add themes by remapping `--rp-*` primitives only; let semantic aliases
  resolve lazily.
- Give each theme its own link accent so navigable links visibly change.
- Keep every transition on `var(--ease-out)` (custom `cubic-bezier(0.23, 1,
  0.32, 1)`) — the built-in ease reads sluggish on the entry frame.
- Respect `prefers-reduced-motion`: keep opacity/color fades, drop all
  transforms and movement.
- Size inline icons in `em` (`0.9–0.95em`) with a small translateY so they sit
  on the text baseline.
- Cap body images to the column (`max-width: 100%`, block).

Don't:

- Don't use iris for anything that isn't a navigable identity link, or gold
  for anything that isn't a plain content link.
- Don't underline links in chrome (chips, lists, footer) — underline is
  reserved for in-body links and hover affordances.
- Don't cast shadows on in-page content; elevation is for floating layers.
- Don't add checkmarks or icons to mark the active menu item — tint + weight
  is the pattern.
