---
categories:
- tools
date: "2025-07-06T13:35:30+03:00"
draft: false
keywords:
- Obsidian Plugins
- Artificial Intelligence
- Large Language Models
- Quality of Life
tags:
- Obsidian Plugins
- Artificial Intelligence
- Large Language Models
- Quality of Life
lastmod: "2025-07-06T14:18:03+03:00"
title: 🔧 Attachments MD Indexer〈Ian Inkov〉
---

> This plugin enhances Obsidian's ability to manage various attachment types by creating searchable index files in Markdown format. This ensures that Canvas files, PDFs, and images are properly represented in graph views, become searchable by content, and are accessible to Obsidian plugins that primarily work with Markdown files.

------------------------------------------------------------------------

> Title: Attachments MD Indexer
>
> Author: [Ian Inkov](https://github.com/iinkov)
>
> URL: https://github.com/iinkov/obsidian-attachments-md-indexer
>
> License: [AGPL-3.0 license](https://github.com/iinkov/obsidian-attachments-md-indexer?tab=AGPL-3.0-1-ov-file#)

------------------------------------------------------------------------

In my opinion, this plugin is pretty convenient despite having some limitations. Here's the list of things you might want to keep in mind:

- Gemini auto-translates non-English text into English; it definitely works with Russian, but, as I suspect, doesn't with Japanese.
- Sadly, at the moment users can't directly change the prompt in plugin settings. This can lead to some unwanted consequences: for example, all the image descriptions are provided in English, making the plugin less useful for people who don't speak English.
- Don't turn on "Run on start" setting if Gemini isn't available in your country and you have to turn VPN on and off from time to time. Images, PDFs, etc. are "indexed" even if the plugin couldn't get an answer from Gemini, resulting in a bunch of index files with errors instead of OCRed text, AI-generated descriptions and so on. The plugin also doesn't provide a built-in way to delete such files.
