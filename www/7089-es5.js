(self.webpackChunkhypergames=self.webpackChunkhypergames||[]).push([[7089],{7089:function(n,e,t){"use strict";t.r(e),t.d(e,{startFocusVisible:function(){return s}});var o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],s=function(){var n=[],e=!0,t=document,s=function(e){n.forEach(function(n){return n.classList.remove("ion-focused")}),e.forEach(function(n){return n.classList.add("ion-focused")}),n=e},c=function(){e=!1,s([])};t.addEventListener("keydown",function(n){(e=o.includes(n.key))||s([])}),t.addEventListener("focusin",function(n){if(e&&n.composedPath){var t=n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains("ion-focusable")});s(t)}}),t.addEventListener("focusout",function(){t.activeElement===t.body&&s([])}),t.addEventListener("touchstart",c),t.addEventListener("mousedown",c)}}}]);