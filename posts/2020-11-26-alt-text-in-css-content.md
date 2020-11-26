---
layout: 'article'
title: 'Alt text in CSS content'
date: '2020-11-25T16:30:00.000Z'
---

The CSS `content` property is used with `::before` or `::after` to add additional content dynamically. For example, it could be used to add an asterisk `*` to the label for required form fields:

```css
label.required::after {
  content: '*';
}
```

But what happens if someone uses a screen reader to fill in this hypothetical form? They'd hear something like this:

<p class="voiceover-caption">
  Username star, text field.
</p>

While the user might be able to work out from context that a star indicates a required field, it would be better to explicitly convey that.

New syntax was recently added to a draft of the CSS spec which allows alt text to be added to the CSS `content` property. It looks like this:

```css
label.required::after {
  content: '*' / 'required';
}
```

Anything specified after the slash `/` will be used as alt text, so it'll be read by screen readers. Now the form field gets read like this:

<p class="voiceover-caption">
  Username required, text field.
</p>

That's much more understandable! And the asterisk still appears visually in the browser.

> **Accessibility note**
>
> This example of using the alt text for a required form field is contrived just for a simple explanation. In reality, a required form field should be marked up with `aria-required="true"`, which screen readers can use to let the user know a field is required. There's no need to explicitly add "required" to the label.

The `content` property can also be used to display images using CSS, so adding alt text is especially important for those cases.

The bad news is that this syntax is still a draft, which means it's not real CSS syntax yet. As of writing, it's [only available in Chromium-based browsers](https://caniuse.com/mdn-css_properties_content_alt_text). Other browsers will treat it as invalid, which might cause the entire `content` property to be disregarded, even the content before the slash.

For now, unless you can guarantee your users are all using Chrome, it's probably best to wait before adopting this syntax. But in future please bear it in mind as more browsers begin to support it, because accessibility is important.

*This post was inspired by [a tweet by @chordbug](https://twitter.com/chordbug/status/1331343730620723201?s=21).*
