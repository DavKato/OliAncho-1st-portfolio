---
title: Placeholder
tag: glutenFree
author: Davide
language: en
date: 2019-07-07T00:51:58.035Z
update: 2019-07-07T00:51:58.065Z
thumbnail: https://res.cloudinary.com/oliancho/image/upload/c_limit,f_auto,q_auto,w_1800/v1563784575/bagushaus/baguspost/abc-accomplished-alphabet-48898.jpg
summary: This is a placeholder. I need to start writing real posts!!
---

# Hello Mr./Mrs. Traveler

This is a placeholder post since there is no English blog post in this website yet.

I made this blog as a part of our portfolio just to showcase what we can do..
I don't really have a plan to start writing posts.
(I'm a kind of person who raaarely update SNS, you know)

<BagusImg src="shots.jpg" alt="Davide" title="Davide"/>

<BagusLink src="/" title="Our Portfolio"/>

```
import OtherComponent from "OtherComponent.vue"

export default {
  data: {
    templateRender: null
  },

  components: {
    OtherComponent // If markdown has `<other-component>` in body, will work :)
  }

  render: function (createElement) {
    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
  },

  created: function () {
    this.templateRender = new Function(fm.vue.render)();
    this.$options.staticRenderFns = new Function(fm.vue.staticRenderFns)();
  }
}
```
