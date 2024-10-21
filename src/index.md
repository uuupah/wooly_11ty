---
title: papersheep
layout: base.njk
---

{% for post in collections.blog %}
  <a class="homepage-post" href="/blog/{{post.data.page.fileSlug}}">
    <img class="header-image" src="{{ post.data.coverImage }}"></img>
    <div class="homepage-post-content">
      <h2 class="homepage-post-header-text">{{post.data.title}}</h2>
      {%- for tag in post.data.tags -%}
          <div class="tag-span tag-red">{{ tag }}</div>
      {%- endfor -%}
      <div class="homepage-post-content-text">{{post.content}}</div>
    </div>
  </a>
{% endfor %}
