---
categories:
- tools
date: "2025-07-14T12:45:43+03:00"
draft: false
keywords:
- Research
- Wikipedia
- Wikidata
- Browser Extension
tags:
- Research
- Wikipedia
- Wikidata
- Browser Extension
lastmod: "2025-07-14T12:45:43+03:00"
title: 🔧 Entity Explosion〈Toby Hudson〉
---

{{< figure
src="/img/Pasted_image_20250714130551.png"
class="wikilink" alt="Entity Explosion logo"
>}}

> By <a href="//commons.wikimedia.org/wiki/User:99of9" title="User:99of9">Toby Hudson</a> - Own work,
> <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=93167112">Link</a>

------------------------------------------------------------------------

> **[Entity Explosion (Q98398855)](https://www.wikidata.org/wiki/Q98398855 "Q98398855")** is a Chrome and Firefox browser extension by Toby Hudson ([99of9](https://www.wikidata.org/wiki/User:99of9 "User:99of9")) which uses API calls to the Wikidata Query Service to match the URL you are browsing on to a Wikidata item, and then display Wikidata data and links.

------------------------------------------------------------------------

> Title: Entity Explosion
>
> Author: Toby Hudson
>
> URL: https://www.wikidata.org/wiki/Wikidata:Entity_Explosion
>
> License: [GPL-3.0 license](https://github.com/99of9/Entity-Explosion?tab=GPL-3.0-1-ov-file#)

------------------------------------------------------------------------

I would say that results provided by this extension aren't always going to be what you expect, but even these mismatches can be entertaining in their own regard.

For example, for now-deleted post from [r/todayilearned](https://www.reddit.com/r/todayilearned/) (by the way, I highly recommend it as a source of daily random interesting facts) about "Conan the Bacterium" Entity Explosion returns:

<blockquote class="reddit-embed-bq" data-embed-theme="dark" style="height:500px" data-embed-created="2025-07-14T10:21:00Z">

<a href="https://www.reddit.com/r/todayilearned/comments/1lt4ij6/til_about_conan_the_bacterium_an_organism_thats/">TIL about \"Conan the Bacterium\", an organism that\'s been around for about a billion years more than us, can survive almost anything and will likely outlast us all.</a><br> by
<a href="https://www.reddit.com/user/1Universal_Turtle/">u/1Universal_Turtle</a> in
<a href="https://www.reddit.com/r/todayilearned/">todayilearned</a>
</blockquote>

<script async src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>

{{< figure
  src="/img/Paste_image_20250714132548.png"
  caption="Explosion Entity screenshot showing 'fact'-related links"
  class="ma0 w-75"
>}}

And for the Wikipedia page about "Conan the Bacterium" (which has a funny name in Latin as well, meaning "radiation-surviving terrible berry"), the extension predictably returns correct results, since Wikipedia-based projects are deeply interconnected.

<a href="https://en.wikipedia.org/wiki/Deinococcus_radiodurans" data-iframely-url="//iframely.net/jH3XnXLA?theme=dark"></a>

<script async src="//iframely.net/embed.js"></script>

{{< figure
  src="/img/Pasted_image_20250714133112.png"
  caption="Explosion Entity screenshot showing 'Deinococcus radiodurans'-related links"
  class="ma0 w-75"
>}}

Overall, I think it's a nice extension. It the best case you quickly get a selection of links about a thing that already captured your attention, in the worst you get a chance to learn about something new. You can also [improve](https://www.wikidata.org/wiki/Wikidata:Entity_Explosion#SPARQL_queries) the addon queries.
