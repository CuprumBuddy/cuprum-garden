---
title: 
description: 
lang: en-US
tags: 
aliases: 
cover: 
draft: false
created: 2025-03-26T11:18:34+03:00
modified: 2025-03-30T17:31:04+03:00
published: 2025-03-26
enableToc: true
---
i.e. how this site was built. Inspired by `/colophon` from [[DRAFT "slash pages"|slash pages]].

I've used [Host your Obsidian notebook on GitHub Pages for free](https://dev.to/defenderofbasic/host-your-obsidian-notebook-on-github-pages-for-free-8l1) tutorial about [[DRAFT Obsidian Quartz GitHub Pages Template | Obsidian / Quartz / GitHub Pages Template]] by Defender for a quick start, and a [GitHub Desktop fork for Linux](https://github.com/shiftkey/desktop) (and I find it pretty insane that the official version [doesn't have Linux support](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop) – at least at the time of writing, 2025-03-26).

Quartz documentation states that Quartz aims to be accessible and highly customizable even for people who don’t have any programming experience. I mostly agree with this, but if you don’t have *any* programming experience, you will have to learn at least three skills:
- reading documentation so you understand how to achieve the desired results;
- reading and editing another person’s code to edit `quartz.config.ts`;
- debugging to fix any errors caused by your edits.
## Quartz Features & Plugins
[[DRAFT Quartz|Quartz]] transforms Markdown files into HTML. Think of it as of a front-end.
- [[DRAFT Citations (Quartz plugin)|Citations (Quartz plugin)]] [^1]
## Obsidian Plugins
These plugins mostly affect Markdown files.
### On the site
Tools that directly affect how users see this site. Potentially useful both for public and private vaults.
- [[DRAFT Obsidian Front Matter Timestamps|Front Matter Timestamps]]: automatically inserts “created” and “modified” timestamps into the note frontmatter.
- [[DRAFT Obsidian Git|Git]]
- [[DRAFT Obsidian Smart Typography|Smart Typography]]: converts symbols into prettier ones, e.g. `<=` into ≤, `<-` into ← and so on.  
### In Obsidian
Kind of a backstage/back-end: while I can’t directly share the results of these plugin’s work on a site built with [[DRAFT Quartz|Quartz]], they help me keep writing.
- [[DRAFT Obsidian BRAT|BRAT]]: allows installing plugins which are available on GitHub, but yet haven’t made it into Obsidian “Community plugins” tab.
- [[DRAFT Obsidian Color Folders and Files|Color Folders and Files]]: allows to colour folders and files to make them stand out in the navigation tab.
- [[DRAFT Obsidian Latex Suite|Latex Suite]]: makes LaTeX math input considerably faster.
- [[DRAFT Obsidian Line Arrange|Line Arrange]]
- [[Obsidian Keep the Rhythm|Keep the Rhythm]]: counts how many words I wrote daily/weekly/yearly and generates a pretty heatmap based on these statistics.
- [[DRAFT Obsidian Strange New Worlds|Strange New Worlds]]: presents connections between notes in a more visually pleasant way than standard backlinks and outgoing links tabs.
- [[DRAFT Obsidian Wikipedia Search|Wikipedia Search]]

[^1]: This is an example of a footnote.
