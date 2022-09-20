# Animated Navigation Modals with Parallax & GSAP

Inspiration for an animated modal with CSS transitions and animations powered by TweenMax.

![Animated Navigation Modals with Parallax & GSAP](https://raw.githubusercontent.com/crococode-io/images/main/animated-navigation-modal.png)

## Usage

Create HTML structure:
```
<a href="#0" class="trigger">categories</a>

<div class="items">
  <div class="items__inner" id="ci-scene">

    <div class="items__layer layer" data-depth="0.85">
      <div class="items__item" data-title="Nature"><a href="#" target="_blank"></a></div>
    </div>
    <div class="items__layer layer" data-depth="0.70">
      <div class="items__item" data-title="Food"><a href="#" target="_blank"></a></div>
    </div>
    <div class="items__layer layer" data-depth="0.65">
      <div class="items__item" data-title="Architecture"><a href="#" target="_blank"></a></div>
    </div>
    <div class="items__layer layer" data-depth="1.20">
      <div class="items__item" data-title="Portrait"><a href="#" target="_blank"></a></div>
    </div>
    <div class="items__layer layer" data-depth="0.15">
      <div class="items__item" data-title="close"><a class="close" target="_blank"></a></div>
    </div>

  </div>
</div>
```

Include Parallax and TweenMax:
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/2.1.3/parallax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
```

Include plugin's CSS and JS:
```
<link rel="stylesheet" href="assets/css/demo.css">
<script src="assets/js/demo.js"></script>
```

## Credits
- [Parallax](https://matthew.wagerfield.com/parallax/) by Matthew Wagerfield
- [TweenMax](https://greensock.com/tweenmax) by Greensock


## License
This resource can be used freely if integrated or build upon in personal or commercial projects such as websites, web apps and web templates intended for sale. It is not allowed to take the resource "as-is" and sell it, redistribute, re-publish it, or sell "pluginized" versions of it. Free plugins built using this resource should have a visible mention and link to the original work. Always consider the licenses of all included libraries, scripts and images used.

## Misc

Follow CROCO.CODE: [GitHub](https://github.com/crococode-io) & [Instagram](https://www.instagram.com/croco.code/)

[© CROCO.CODE 2022](https://www.instagram.com/croco.code)
