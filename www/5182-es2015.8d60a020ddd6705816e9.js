(self.webpackChunkgamehub=self.webpackChunkgamehub||[]).push([[5182],{5182:function(n,e,t){"use strict";t.r(e),t.d(e,{NetworkWeb:function(){return a},Network:function(){return s}});var o=t(8384);function i(){const n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;let e="unknown";const t=n?n.type||n.effectiveType:null;if(t&&"string"==typeof t)switch(t){case"bluetooth":case"cellular":e="cellular";break;case"none":e="none";break;case"ethernet":case"wifi":case"wimax":e="wifi";break;case"other":case"unknown":e="unknown";break;case"slow-2g":case"2g":case"3g":e="cellular";break;case"4g":e="wifi"}return e}class a extends o.Uw{constructor(){super(),this.handleOnline=()=>{const n=i();this.notifyListeners("networkStatusChange",{connected:!0,connectionType:n})},this.handleOffline=()=>{this.notifyListeners("networkStatusChange",{connected:!1,connectionType:"none"})},window.addEventListener("online",this.handleOnline),window.addEventListener("offline",this.handleOffline)}async getStatus(){if(!window.navigator)throw this.unavailable("Browser does not support the Network Information API");const n=window.navigator.onLine,e=i();return{connected:n,connectionType:n?e:"none"}}}const s=new a}}]);