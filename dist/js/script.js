"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
$("#phone1, #phone2").intlTelInput({
  hiddenInput: "full_phone",
  initialCountry: "us",
  separateDialCode: true,
  utilsScript: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/32471/utils.js'
});
var navbarWrap = document.querySelector('.navbar');
var navbarBox = document.querySelector('.navbar-box');
var navItem = document.querySelectorAll('.navbar-box__item');
var btnToTop = document.querySelector('.go-top');

function magic() {
  if (window.pageYOffset > 30) {
    btnToTop.style.opacity = '1';
    navbarWrap.classList.add('active');
    navbarBox.classList.add('active');
  } else {
    btnToTop.style.opacity = '0';
    navbarWrap.classList.remove('active');
    navbarBox.classList.remove('active');
  }
}

window.onscroll = magic;