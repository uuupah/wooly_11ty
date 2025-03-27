---
title: This Is My Blog
layout: bloglist.njk
---

all blogposts
  {% for post in collections.blog | reverse %}
    \- <a href="{{ post.data.page.fileSlug }} ">{{ post.data.title }}</a>
  {% endfor %}
