!function(){function e(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function o(e,o,t,a,r,i,n){try{var s=e[i](n),d=s.value}catch(l){return void t(l)}s.done?o(d):Promise.resolve(d).then(a,r)}function t(e){return function(){var t=this,a=arguments;return new Promise(function(r,i){var n=e.apply(t,a);function s(e){o(n,r,i,s,d,"next",e)}function d(e){o(n,r,i,s,d,"throw",e)}s(void 0)})}}function a(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunkgamehub=self.webpackChunkgamehub||[]).push([[1855],{1855:function(o,r,i){"use strict";i.r(r),i.d(r,{ion_modal:function(){return v}});var n=i(3150),s=i(7585),d=i(7330),l=i(7053),c=i(1269),m=i(4001),h=i(4086),p=i(7807),f=i(7279),u=i(2377);i(960);var b=function(e,o){var t=(0,h.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a=(0,h.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=(0,h.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(o){var i=window.innerWidth<768,n="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,s=(0,h.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(i){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",c="translateY(".concat(n?"-10px":l,") scale(0.93)");s.afterStyles({transform:c}).beforeAddWrite(function(){return d.style.setProperty("background-color","black")}).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:c,borderRadius:"10px 10px 0 0"}]),r.addAnimation(s)}else if(r.addAnimation(t),n){var m="translateY(-10px) scale(".concat(n?.93:1,")");s.afterStyles({transform:m}).addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:m}]);var p=(0,h.c)().afterStyles({transform:m}).addElement(o.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:m}]);r.addAnimation([s,p])}else a.fromTo("opacity","0","1")}else r.addAnimation(t);return r},x=function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,a=(0,h.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=(0,h.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),i=(0,h.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(t).addAnimation(r);if(o){var n=window.innerWidth<768,s="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,d=(0,h.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(function(e){1===e&&(o.style.setProperty("overflow",""),Array.from(l.querySelectorAll("ion-modal")).filter(function(e){return void 0!==e.presentingElement}).length<=1&&l.style.setProperty("background-color",""))}),l=document.body;if(n){var c=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",m="translateY(".concat(s?"-10px":c,") scale(0.93)");d.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),i.addAnimation(d)}else if(i.addAnimation(a),s){var p="translateY(-10px) scale(".concat(s?.93:1,")");d.addElement(o.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var f=(0,h.c)().addElement(o.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([d,f])}else r.fromTo("opacity","1","0")}else i.addAnimation(a);return i},w=function(e){var o=(0,h.c)(),t=(0,h.c)(),a=(0,h.c)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),o.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([t,a])},y=function(e){var o=(0,h.c)(),t=(0,h.c)(),a=(0,h.c)(),r=e.querySelector(".modal-wrapper");return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),o.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([t,a])},v=function(){function o(e){var t=this;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(0,n.r)(this,e),this.didPresent=(0,n.e)(this,"ionModalDidPresent",7),this.willPresent=(0,n.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,n.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){t.dismiss(void 0,l.B)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var o=t.usersElement,a=g[e.type];if(o&&a){var r=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}}}var r,i,h,v,k;return r=o,i=[{key:"swipeToCloseChanged",value:function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){(0,l.e)(this.el)}},{key:"present",value:(k=t(regeneratorRuntime.mark(function e(){var o,t,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(o=this.el.querySelector(".modal-wrapper")){e.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e.next=8,(0,d.a)(this.delegate,o,this.component,["ion-page"],t);case 8:return this.usersElement=e.sent,e.next=11,(0,m.e)(this.usersElement);case 11:return(0,n.c)(function(){return a.el.classList.add("show-modal")}),e.next=14,(0,l.d)(this,"modalEnter",b,w,this.presentingElement);case 14:this.swipeToClose&&this.initSwipeToClose();case 15:case"end":return e.stop()}},e,this)})),function(){return k.apply(this,arguments)})},{key:"initSwipeToClose",value:function(){var e=this;if("ios"===(0,s.b)(this)){var o,a,r,i,n,d=this.leaveAnimation||s.c.get("modalLeave",x),l=this.animation=d(this.el,this.presentingElement);this.gesture=(o=this.el,a=l,r=o.offsetHeight,i=!1,n=(0,f.createGesture)({el:o,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var o=e.event.target;return null===o||!o.closest||null===o.closest("ion-content, ion-footer")},onStart:function(){a.progressStart(!0,i?1:0)},onMove:function(e){var o=(0,u.j)(1e-4,e.deltaY/r,.9999);a.progressStep(o)},onEnd:function(o){var s=o.velocityY,d=(0,u.j)(1e-4,o.deltaY/r,.9999),l=(o.deltaY+1e3*s)/r>=.5,c=l?-.001:.001;l?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=(0,p.g)([0,0],[.32,.72],[0,1],[1,1],d)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=(0,p.g)([0,0],[1,0],[.68,.28],[1,1],d)[0]);var m=function(e,o){return(0,u.j)(400,e/Math.abs(1.1*o),500)}(l?d*r:(1-d)*r,s);i=l,n.enable(!1),a.onFinish(function(){l||n.enable(!0)}).progressEnd(l?1:0,c,m),l&&(e.gestureAnimationDismissing=!0,e.animation.onFinish(t(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.dismiss(void 0,"gesture");case 2:e.gestureAnimationDismissing=!1;case 3:case"end":return o.stop()}},o)}))))}})),this.gesture.enable(!0)}}},{key:"dismiss",value:(v=t(regeneratorRuntime.mark(function e(o,t){var a,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.gestureAnimationDismissing||"gesture"===t){e.next=2;break}return e.abrupt("return",!1);case 2:return a=l.h.get(this)||[],e.next=5,(0,l.f)(this,o,t,"modalLeave",x,y,this.presentingElement);case 5:if(r=e.sent,e.t0=r,!e.t0){e.next=12;break}return e.next=10,(0,d.d)(this.delegate,this.usersElement);case 10:this.animation&&this.animation.destroy(),a.forEach(function(e){return e.destroy()});case 12:return this.animation=void 0,e.abrupt("return",r);case 14:case"end":return e.stop()}},e,this)})),function(e,o){return v.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return(0,l.g)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,l.g)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var o,t=(0,s.b)(this);return(0,n.h)(n.H,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign((o={},e(o,t,!0),e(o,"modal-card",void 0!==this.presentingElement&&"ios"===t),o),(0,c.g)(this.cssClass)),style:{zIndex:"".concat(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},(0,n.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===t&&(0,n.h)("div",{class:"modal-shadow"}),(0,n.h)("div",{tabindex:"0"}),(0,n.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,n.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,n.i)(this)}}],h=[{key:"watchers",get:function(){return{swipeToClose:["swipeToCloseChanged"]}}}],i&&a(r.prototype,i),h&&a(r,h),o}(),g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};v.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}])}();