(self.webpackChunkgamehub=self.webpackChunkgamehub||[]).push([[9706],{9706:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return u}});var r=n(2377),a=n(7279);n(960);var u=function(e,t,n,u,i){var c=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){u(e.deltaX/c.innerWidth)},onEnd:function(e){var t=c.innerWidth,n=e.deltaX/t,a=e.velocityX,u=a>=0&&(a>.2||e.deltaX>t/2),o=(u?1-n:n)*t,s=0;if(o>5){var h=o/Math.abs(a);s=Math.min(h,540)}i(u,n<=0?.01:(0,r.j)(0,n,.9999),s)}})}}}]);