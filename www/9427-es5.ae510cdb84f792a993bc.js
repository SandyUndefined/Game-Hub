!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunkgamehub=self.webpackChunkgamehub||[]).push([[9427],{9427:function(t,a,i){"use strict";i.r(a),i.d(a,{HomePageModule:function(){return b}});var o=i(8583),r=i(3679),s=i(7823),l=i(952),u=i(4762),c=i(5453),g=i(9019),m=i(8186),d=i(2772),f=i(3760),p=i(3511),h=i(5389);function Z(e,n){if(1&e&&(m.TgZ(0,"ion-slide",19),m.TgZ(1,"ion-col",20),m._UZ(2,"img",21),m.TgZ(3,"p",22),m._uU(4),m.qZA(),m.qZA(),m.qZA()),2&e){var t=n.$implicit;m.hYB("routerLink","/categories/",t.id,"/",null==t?null:t.name,""),m.xp6(2),m.Q6J("defaultImage","../../../assets/loader.png")("lazyLoad",null==t?null:t.thumbnail),m.xp6(2),m.Oqu(null==t?null:t.name)}}function _(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"ion-col",31),m.NdJ("click",function(){var e=m.CHM(t).$implicit;return m.oxw(3).openGame(null==e?null:e.game_url)}),m._UZ(1,"img",32),m.TgZ(2,"div",33),m.TgZ(3,"small",34),m._uU(4),m.qZA(),m.qZA(),m.qZA()}if(2&e){var a=n.$implicit;m.xp6(1),m.Q6J("defaultImage","../../../assets/loader.png")("lazyLoad",null==a?null:a.thumbnail),m.xp6(3),m.hij(" ",null==a?null:a.name," ")}}function A(e,n){if(1&e&&(m.TgZ(0,"ion-grid"),m.TgZ(1,"ion-row"),m.TgZ(2,"ion-col",25),m.TgZ(3,"ion-text",14),m.TgZ(4,"h3",26),m._uU(5),m.ALo(6,"translate"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(7,"ion-col",27),m.TgZ(8,"ion-fab-button",28),m._UZ(9,"ion-icon",29),m.qZA(),m.qZA(),m.qZA(),m.TgZ(10,"ion-row"),m.YNc(11,_,5,3,"ion-col",30),m.qZA(),m.qZA()),2&e){var t=m.oxw().$implicit;m.xp6(5),m.Oqu(m.lcZ(6,4,null==t[0]?null:t[0].category_name)),m.xp6(3),m.hYB("routerLink","/categories/",null==t[0]?null:t[0].category_id,"/",null==t[0]?null:t[0].category_name,""),m.xp6(3),m.Q6J("ngForOf",t)}}function v(e,n){if(1&e&&(m.TgZ(0,"div",23),m.YNc(1,A,12,6,"ion-grid",24),m.qZA()),2&e){var t=n.$implicit;m.xp6(1),m.Q6J("ngIf",(null==t?null:t.length)>0)}}var T,w,x=function(){return{slidesPerView:"auto",zoom:!1,grabCursor:!0}},q=[{path:"",component:(T=function(){function t(n,a){e(this,t),this.webApi=n,this.iab=a,this.homeData=[],this.options={adId:g.N.interstitial_ad_id,isTesting:g.N.testing_ad}}var a,i,o;return a=t,(i=[{key:"ngOnInit",value:function(){this.prepareData(),this.initAdmob()}},{key:"doRefresh",value:function(e){this.prepareData(),setTimeout(function(){e.target.complete()},1e3)}},{key:"prepareData",value:function(){localStorage.getItem("games")?(this.games=JSON.parse(localStorage.getItem("games")),this.getData()):this.getData(),this.makeHomeData()}},{key:"getData",value:function(){var e=this;this.webApi.getData().subscribe(function(n){"success"==n[0].status&&(localStorage.setItem("games",JSON.stringify(n[0].data[0])),e.games=n[0].data[0])})}},{key:"initAdmob",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.TQ.initialize({});case 2:case"end":return e.stop()}},e)}))}},{key:"openGame",value:function(e){var n=this;this.prepareAd();var t=this.iab.create(e,"_blank","location=no,mediaPlaybackRequiresUserAction=yes");t.on("exit").subscribe(function(e){n.showAd()}),t.on("loaderror").subscribe(function(e){t.close(),n.showAd()})}},{key:"showAd",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.TQ.showInterstitial().then(function(e){},function(e){});case 2:case"end":return e.stop()}},e)}))}},{key:"prepareAd",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.TQ.prepareInterstitial(this.options).then(function(e){},function(e){});case 2:case"end":return e.stop()}},e,this)}))}},{key:"makeHomeData",value:function(){var e=this;if(console.log(this.games),null!=this.games){this.homeData=[];for(var n=0;n<this.games.categories.length;n++){this.homeData[n]=[];for(var t=0;t<this.games.games.length;t++)this.games.categories[n].id==this.games.games[t].category_id&&this.homeData[n].length<4&&this.homeData[n].push(this.games.games[t])}}null==this.games&&setTimeout(function(){e.prepareData()},2500)}}])&&n(a.prototype,i),o&&n(a,o),t}(),T.\u0275fac=function(e){return new(e||T)(m.Y36(d.Q),m.Y36(f.i))},T.\u0275cmp=m.Xpm({type:T,selectors:[["app-home"]],decls:27,vars:14,consts:[[3,"fullscreen"],["slot","fixed","pullFactor","0.5","pullMin","100","pullMax","400",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","chevron","refreshingText","Loading..."],[1,"animate__animated","animate__slideInDown","animate__faster"],[1,"ion-padding-top","ion-padding-bottom"],["size","9"],[1,"bold"],[1,"header"],["routerLink","/more","size","3",1,"ion-text-right","ion-padding-top"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"side-icon","h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16m-7 6h7"],[1,"categories-grid","ion-padding","animate__animated","animate__fadeInUp","animate__faster"],[1,"ion-padding-bottom"],[1,"ion-padding-top"],["color","dark"],[1,"no-gap","game-font"],[3,"options"],["class","x-small-card",3,"routerLink",4,"ngFor","ngForOf"],["class","ion-padding",4,"ngFor","ngForOf"],[1,"x-small-card",3,"routerLink"],[1,"card-image","animate__animated","animate__fadeInUp","animate__fast"],[1,"card-image",3,"defaultImage","lazyLoad"],[1,"lite-gap","x-small"],[1,"ion-padding"],[4,"ngIf"],["size","10",1,"animate__animated","animate__fadeInUp","animate__faster"],[1,"sub-header","game-font"],["size","2",1,"animate__animated","animate__fadeInRight","animate__faster"],["horizontal","end","size","small",3,"routerLink"],["name","arrow-forward"],["class","animate__animated animate__fadeInUp animate__fast","size-xs","6","size-sm","6","size-md","3","size-lg","3",3,"click",4,"ngFor","ngForOf"],["size-xs","6","size-sm","6","size-md","3","size-lg","3",1,"animate__animated","animate__fadeInUp","animate__fast",3,"click"],[1,"card-image","game-card",3,"defaultImage","lazyLoad"],[1,"small-gap"],[1,"ion-text-center"]],template:function(e,n){1&e&&(m.TgZ(0,"ion-content",0),m.TgZ(1,"ion-refresher",1),m.NdJ("ionRefresh",function(e){return n.doRefresh(e)}),m._UZ(2,"br"),m._UZ(3,"ion-refresher-content",2),m.qZA(),m.TgZ(4,"ion-item",3),m.TgZ(5,"ion-label",4),m.TgZ(6,"ion-row"),m.TgZ(7,"ion-col",5),m.TgZ(8,"h2",6),m._uU(9),m.ALo(10,"translate"),m.qZA(),m.TgZ(11,"h1",7),m._uU(12),m.ALo(13,"translate"),m.qZA(),m.qZA(),m.TgZ(14,"ion-col",8),m.O4$(),m.TgZ(15,"svg",9),m._UZ(16,"path",10),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.kcU(),m.TgZ(17,"ion-grid",11),m.TgZ(18,"ion-row",12),m.TgZ(19,"ion-col",13),m.TgZ(20,"ion-text",14),m.TgZ(21,"h4",15),m._uU(22),m.ALo(23,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(24,"ion-slides",16),m.YNc(25,Z,5,5,"ion-slide",17),m.qZA(),m.qZA(),m.YNc(26,v,2,1,"div",18),m.qZA()),2&e&&(m.Q6J("fullscreen",!0),m.xp6(9),m.Oqu(m.lcZ(10,7,"Welcome to")),m.xp6(3),m.Oqu(m.lcZ(13,9,"Game Hub")),m.xp6(10),m.Oqu(m.lcZ(23,11,"Top Categories")),m.xp6(2),m.Q6J("options",m.DdM(13,x)),m.xp6(1),m.Q6J("ngForOf",null==n.games?null:n.games.categories),m.xp6(1),m.Q6J("ngForOf",n.homeData))},directives:[s.W2,s.nJ,s.Wo,s.Ie,s.Q$,s.Nd,s.wI,s.YI,l.rH,s.jY,s.yW,s.Hr,o.sg,s.A$,p.z1,o.O5,s.W4,s.gu],pipes:[h.X$],styles:[""]}),T)}],k=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=m.oAB({type:n}),n.\u0275inj=m.cJS({imports:[[l.Bz.forChild(q)],l.Bz]}),n}(),b=((w=function n(){e(this,n)}).\u0275fac=function(e){return new(e||w)},w.\u0275mod=m.oAB({type:w}),w.\u0275inj=m.cJS({imports:[[o.ez,r.u5,p.mZ,h.aw,s.Pc,k]]}),w)}}])}();