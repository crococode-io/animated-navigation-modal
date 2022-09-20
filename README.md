# Creative Radial Menu with TweenMax

Inspiration for effect on password input field using CSS transitions and animations powered by TweenMax.

![Creative Radial Menu with TweenMax](https://raw.githubusercontent.com/crococode-io/images/main/animated-input-error-message.png)

## Usage

Create HTML structure:
```
<div class="error-message">
  <span>incorrect password</span>
</div>

<div class="password-holder">
  <input id="password" type="password" required>
  <label for="password">Password</label>
  <svg class="unlock" viewBox="0 0 12 16">
      <path d="M6,2 C6.6,2 7.1,2.2 7.5,2.7 L8.2,3.4 L9.7,2.1 L9,1.3 C8.2,0.5 7.1,0 6,0 C3.8,0 2,1.8 2,4 L2,5.5 C0.8,6.6 0,8.2 0,10 C0,13.3 2.7,16 6,16 C9.3,16 12,13.3 12,10 C12,6.7 9.3,4 6,4 C5.3,4 4.6,4.1 4,4.4 L4,4 C4,2.9 4.9,2 6,2 Z M6,7 C7.1,7 8,7.9 8,9 C8,9.7 7.6,10.4 7,10.7 L7,13 L5,13 L5,10.7 C4.4,10.4 4,9.7 4,9 C4,7.9 4.9,7 6,7 Z"></path>
  </svg>
  <svg class="error" viewBox="0 0 16 14">
      <path d="M15.216,12.529 L8.882,0.654 C8.506,-0.052 7.494,-0.052 7.117,0.654 L0.784,12.529 C0.429,13.195 0.912,14 1.667,14 L14.334,14 C15.088,14 15.571,13.195 15.216,12.529 Z M8,12 C7.448,12 7,11.552 7,11 C7,10.448 7.448,10 8,10 C8.552,10 9,10.448 9,11 C9,11.552 8.552,12 8,12 Z M9,9 L7,9 L7,5 L9,5 L9,9 Z"></path>
  </svg>
</div>
```

Include jQuery and TweenMax:
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
```

Include plugin's CSS and JS:
```
<link rel="stylesheet" href="assets/css/demo.css">
<script src="assets/js/demo.js"></script>
```

## Credits
- The inspiration for effects and Layout comes from [Hoang Nguyen](https://dribbble.com/shots/4840488-Error-Form)
- [TweenMax](https://greensock.com/tweenmax) by Greensock


## License
This resource can be used freely if integrated or build upon in personal or commercial projects such as websites, web apps and web templates intended for sale. It is not allowed to take the resource "as-is" and sell it, redistribute, re-publish it, or sell "pluginized" versions of it. Free plugins built using this resource should have a visible mention and link to the original work. Always consider the licenses of all included libraries, scripts and images used.

## Misc

Follow CROCO.CODE: [GitHub](https://github.com/crococode-io) & [Instagram](https://www.instagram.com/croco.code/)

[© CROCO.CODE 2022](https://www.instagram.com/croco.code)