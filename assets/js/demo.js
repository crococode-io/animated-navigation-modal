/**
 * demo.js
 * https://www.instagram.com/croco.code/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2022, CROCO.CODE
 * https://www.instagram.com/croco.code/
 */

// parallax
var scene = document.getElementById('ci-scene');
var parallax = new Parallax(scene);

// zoom in & out effect
var trigger = document.querySelector('.trigger'),
  items = document.querySelector('.items'),
  itemLayer = document.querySelectorAll('.items__layer'),
  item = document.querySelectorAll('.items__item'),
  close = items.querySelector('.close'),
  tl = new TimelineMax({
    paused: true
  });

tl.to(trigger, 0.45, {
  opacity: 1,
  scale: 0
}, 0.1)
tl.to(itemLayer, 0.45, {
    opacity: 1,
    scale: 1
  }, 0.1, "+=0.9")
  .staggerTo(item, 0.95, {
    opacity: 1,
    scale: 1
  }, 0.45, "-=0.25");

// open menu
trigger.addEventListener('click', function() {
  tl.play();
});

// close menu
close.addEventListener('click', function() {
  tl.reverse().timeScale(2);
});