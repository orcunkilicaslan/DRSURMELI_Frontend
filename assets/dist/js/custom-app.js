"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o){var a={};function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=a,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t){jQuery(function(n){1059<n(window).width()&&n(window).on("load resize scroll",function(e){var t=n(window).scrollTop(),o=n("body"),a=n("header.header");t>a.height()/3?(a.addClass("headscroll"),o.addClass("bodyscroll")):(a.removeClass("headscroll"),o.removeClass("bodyscroll"))})}),$(".headnavigation-navmenu .dropdown-menu a.dropdown-toggle").on("click",function(e){return $(this).next().hasClass("show")||$(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),$(this).next(".dropdown-menu").toggleClass("show"),$(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(e){$(".dropdown-submenu .show").removeClass("show")}),!1})},function(e,t){function o(){var e=$(".owl-item.active .media-body-title").text().charAt(0),t=$(".owl-item.active .media-avatar .avatartext");t.text(e),t.css("background-color",function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}())}$(document).ready(function(){$(".headslider").parent().find(".header").addClass("headbiglogo"),$(".headtitle").parent().find(".header").addClass("headsmalllogo")}),$(document).ready(function(){for(var e=document.querySelectorAll(".headtitlebannerimg"),t=0;t<e.length;t++)e[t].style.backgroundImage="url('"+e[t].getAttribute("data-img-url")+"')",e[t].style.backgroundSize=e[t].getAttribute("data-img-size"),e[t].style.backgroundPositionY=e[t].getAttribute("data-position-y"),e[t].style.backgroundPositionX=e[t].getAttribute("data-position-x"),e[t].style.height=e[t].getAttribute("data-cont-height")+"px"}),$(document).ready(function(){for(var e=document.querySelectorAll(".headsliderbgimg"),t=0;t<e.length;t++)e[t].style.backgroundImage="url('"+e[t].getAttribute("data-img-url")+"')",e[t].style.backgroundSize=e[t].getAttribute("data-img-size"),e[t].style.backgroundPositionY=e[t].getAttribute("data-position-y"),e[t].style.backgroundPositionX=e[t].getAttribute("data-position-x")}),$(".headsliderowl").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,items:1,margin:0,autoWidth:!1,mouseDrag:!1,responsiveClass:!0,responsive:{0:{},819:{},1059:{},1379:{},1619:{},1939:{}}}),$(document).ready(function(){for(var e=document.querySelectorAll(".proceduresimg"),t=0;t<e.length;t++)e[t].style.backgroundImage="url('"+e[t].getAttribute("data-img-url")+"')",e[t].style.backgroundSize=e[t].getAttribute("data-img-size"),e[t].style.backgroundPositionY=e[t].getAttribute("data-position-y"),e[t].style.backgroundPositionX=e[t].getAttribute("data-position-x")}),$(".homeproceduresowl").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:1e4,autoplayHoverPause:!1,items:5,margin:0,autoWidth:!1,mouseDrag:!0,animateIn:"fadeInUp",animateOut:"fadeOutUp",center:!0,responsiveClass:!0,responsive:{0:{},819:{},1059:{},1379:{},1619:{},1939:{}}}),$(".beforeaftergalleryowl").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:1e4,autoplayHoverPause:!1,items:3,margin:0,autoWidth:!1,mouseDrag:!0,animateIn:"fadeInUp",animateOut:"fadeOutUp",center:!0,responsiveClass:!0,responsive:{0:{},819:{},1059:{},1379:{},1619:{},1939:{}}}),$(".testimonialcommentowl").owlCarousel({loop:!0,nav:!0,dots:!1,autoplay:!0,autoplayTimeout:1e4,autoplayHoverPause:!1,items:1,margin:0,onInitialize:o,onInitialized:o,onTranslate:o,onTranslated:o,autoWidth:!1,mouseDrag:!0,responsiveClass:!0,responsive:{0:{},819:{},1059:{},1379:{},1619:{},1939:{}}}),$(document).ready(function(){$(".accitem .heading").on("click",function(e){e.preventDefault(),$(this).closest(".accitem").hasClass("active")?$(".accitem").removeClass("active"):($(".accitem").removeClass("active"),$(this).closest(".accitem").addClass("active"));e=$(this).next();e.slideToggle(100),$(".accitem .content").not(e).slideUp("fast")})}),$(document).ready(function(){$('[data-ride="carousel"]').carousel({interval:5e3})})}]);
//# sourceMappingURL=custom-app.js.map
